import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const publicDir = join(__dirname, '..', 'public');

const sourceImage = join(publicDir, 'sathish-teams-img.png');

async function generateFavicons() {
  console.log('Generating favicons from profile image...');
  
  // Read the source image
  const image = sharp(sourceImage);
  
  // Get image metadata to center crop to square
  const metadata = await image.metadata();
  const size = Math.min(metadata.width, metadata.height);
  
  // Create a square crop from center
  const squareImage = image.extract({
    left: Math.floor((metadata.width - size) / 2),
    top: Math.floor((metadata.height - size) / 2),
    width: size,
    height: size
  });
  
  // Generate 32x32 PNG for favicon.ico replacement
  await squareImage
    .clone()
    .resize(32, 32)
    .png()
    .toFile(join(publicDir, 'favicon-32.png'));
  console.log('Created favicon-32.png');
  
  // Generate 16x16 PNG
  await squareImage
    .clone()
    .resize(16, 16)
    .png()
    .toFile(join(publicDir, 'favicon-16.png'));
  console.log('Created favicon-16.png');
  
  // Generate 180x180 Apple touch icon
  await squareImage
    .clone()
    .resize(180, 180)
    .png()
    .toFile(join(publicDir, 'apple-touch-icon.png'));
  console.log('Created apple-touch-icon.png');
  
  // Generate 192x192 for Android
  await squareImage
    .clone()
    .resize(192, 192)
    .png()
    .toFile(join(publicDir, 'icon-192.png'));
  console.log('Created icon-192.png');
  
  // Generate 512x512 for Android
  await squareImage
    .clone()
    .resize(512, 512)
    .png()
    .toFile(join(publicDir, 'icon-512.png'));
  console.log('Created icon-512.png');
  
  console.log('Favicons generated successfully!');
}

generateFavicons().catch(console.error);

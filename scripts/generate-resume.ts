/**
 * Resume Generation Script
 * Generates PDF from HTML template using Puppeteer
 * 
 * Usage: npx ts-node scripts/generate-resume.ts [version]
 * Example: npx ts-node scripts/generate-resume.ts v1
 */

import * as fs from 'fs';
import * as path from 'path';

// Use process.cwd() for reliable path resolution
const ROOT_DIR = process.cwd();
const RESUME_DIR = path.join(ROOT_DIR, 'resume');
const TEMPLATES_DIR = path.join(RESUME_DIR, 'templates');
const OUTPUT_DIR = path.join(RESUME_DIR, 'output');

async function generateResume(version: string = 'v1') {
  // Dynamically import puppeteer
  const puppeteer = await import('puppeteer');
  
  const templatePath = path.join(TEMPLATES_DIR, `resume_${version}.html`);
  const outputPdfPath = path.join(OUTPUT_DIR, `Sathish_Kumar_V_Resume_${version}.pdf`);
  
  // Check if template exists
  if (!fs.existsSync(templatePath)) {
    console.error(`❌ Template not found: ${templatePath}`);
    console.log('\nAvailable templates:');
    const templates = fs.readdirSync(TEMPLATES_DIR).filter(f => f.endsWith('.html'));
    templates.forEach(t => console.log(`  - ${t}`));
    process.exit(1);
  }
  
  // Ensure output directory exists
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }
  
  console.log(`\n📄 Generating Resume ${version.toUpperCase()}\n`);
  console.log(`Template: ${templatePath}`);
  console.log(`Output:   ${outputPdfPath}\n`);
  
  try {
    // Launch browser
    console.log('🚀 Launching browser...');
    const browser = await puppeteer.default.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    
    const page = await browser.newPage();
    
    // Read HTML content
    const htmlContent = fs.readFileSync(templatePath, 'utf-8');
    
    // Set content
    console.log('📝 Loading template...');
    await page.setContent(htmlContent, { waitUntil: 'domcontentloaded' });
    
    // Generate PDF
    console.log('🖨️  Generating PDF...');
    await page.pdf({
      path: outputPdfPath,
      format: 'A4',
      printBackground: true,
      margin: {
        top: '10mm',
        right: '10mm',
        bottom: '10mm',
        left: '10mm'
      }
    });
    
    await browser.close();
    
    console.log(`\n✅ PDF generated successfully!`);
    console.log(`   ${outputPdfPath}\n`);
    
    // Show file size
    const stats = fs.statSync(outputPdfPath);
    console.log(`   Size: ${(stats.size / 1024).toFixed(2)} KB`);
    
  } catch (error) {
    console.error('❌ Error generating PDF:', error);
    process.exit(1);
  }
}

// Get version from command line args
const version = process.argv[2] || 'v1';
generateResume(version);

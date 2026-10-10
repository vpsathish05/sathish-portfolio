/**
 * Copy Resume to Public Directory
 * Run: npx ts-node scripts/copy-resume-to-public.ts
 * 
 * Copies the final resume from resume/output/ to public/resume/
 * so it can be downloaded from the website
 */

import * as fs from 'fs'
import * as path from 'path'

const SOURCE_DIR = path.join(__dirname, '..', 'resume', 'output')
const DEST_DIR = path.join(__dirname, '..', 'public', 'resume')

function copyResumes(): void {
  console.log('\n📄 Copying resumes to public directory...\n')

  // Ensure destination directory exists
  if (!fs.existsSync(DEST_DIR)) {
    fs.mkdirSync(DEST_DIR, { recursive: true })
    console.log(`  Created directory: ${DEST_DIR}`)
  }

  // Check if source directory exists
  if (!fs.existsSync(SOURCE_DIR)) {
    console.error(`  ❌ Source directory not found: ${SOURCE_DIR}`)
    console.error('  Run resume generation first.')
    process.exit(1)
  }

  // Get all files from source
  const files = fs.readdirSync(SOURCE_DIR)
  const resumeFiles = files.filter(f => f.endsWith('.pdf') || f.endsWith('.docx'))

  if (resumeFiles.length === 0) {
    console.error('  ❌ No resume files found in output directory')
    console.error('  Generate resumes first.')
    process.exit(1)
  }

  // Copy each file
  resumeFiles.forEach(file => {
    const sourcePath = path.join(SOURCE_DIR, file)
    const destPath = path.join(DEST_DIR, file)
    
    fs.copyFileSync(sourcePath, destPath)
    console.log(`  ✓ Copied: ${file}`)
  })

  console.log(`\n✅ ${resumeFiles.length} file(s) copied successfully!\n`)
  console.log('Files available at:')
  resumeFiles.forEach(file => {
    console.log(`  • /resume/${file}`)
  })
  console.log('')
}

copyResumes()

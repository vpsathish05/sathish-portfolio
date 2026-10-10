/**
 * Confidentiality Check Script
 * 
 * Scans files for confidential terms that should not be committed
 * Run: npx ts-node scripts/check-confidentiality.ts
 * 
 * Exit codes:
 * 0 - No confidential terms found
 * 1 - Confidential terms found (blocks commit)
 */

import * as fs from 'fs'
import * as path from 'path'
import { fileURLToPath } from 'url'

// ES Module compatibility
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// ============================================
// CONFIDENTIAL TERMS - NEVER COMMIT THESE
// ============================================

// CRITICAL: These should NEVER appear in public files
const CRITICAL_TERMS = {
  // Client Names - ALWAYS replace with generic terms
  clients: [
    'BC Partners',
    'Waste Harmonics',
    'WHK',
    'IDnow',
    'Elevation Labs',
    'Knox Lane',
    'Creative Car Park',
    'CCP',
    'CivicPlus',
    'MSS',
    'Survitec',
    'Ocorian',
    'Dexters',
    'upReach',
    'Medivet',
    'Vital MedTech',
    'nShift',
    'Horizoncare',
    'Zedra',
    'Partnerize',
    'DSN',
    'Toluna',
    'Aura',
    'Venatus',
    'Stonebridge',
    'Assured',
    'TSI',
    'ADP',
    'G3',
  ],

  // Internal Product Names - Replace with generic descriptions
  products: [
    'JLens',
    'Tenali AI',
    'Tenali AI AZ',
    'JMAN Agent',
    'JAgents',
    'Ace Scholar',
    'Marketplace Agent',
    'Work IQ Chatbot',
  ],

  // Project Codenames
  projects: [
    'Project Horizon',
    'IC Devil',
    'Customer Cube',
  ],

  // Colleague Names - Remove from public files
  colleagues: [
    'Vendeesh',
    'Vendeeshwaran',
    'Bharani Aswath',
    'Hari Raj GS',
    'Vasanthakumar',
    'Hemalatha',
    'Kishore T C',
    'Amit Kumar',
    'Vikash Kumar',
    'Nivya Velangani',
    'Jayaprasanth',
    'Sylvia',
    'Daniel',
    'Sarah',
    'Julia',
    'Guru',
  ],
}

// WARNING: These are okay in resume/portfolio but NOT in LinkedIn posts or generic content
// The script will warn but not block for these
const WARNING_TERMS = {
  employer: [
    // Employer name is OK in resume - people need to know where you worked
    // But should be careful in generic content
  ],
  
  // These product names might be okay if they're public
  public_products: [
    'AI Proposal Writer',
    'Power BI Grading Tool',
  ],
}

// Files/directories to check
const CHECK_PATHS = [
  'src/data/portfolio.ts',
  'resume/source',
  'docs/job-hunt',
  'public',
  'README.md',
]

// Files/directories to skip
const SKIP_PATTERNS = [
  'node_modules',
  '.git',
  '.next',
  'out',
  'sk_okf',  // Source knowledge base is private
  'check-confidentiality.ts',  // This file
  'CONTEXT_UPDATE_PLAN.md',  // Planning doc
  '.gitignore',
  'IMPLEMENTATION_PLAN.md',
  'SETUP_PLAN.md',
]

interface Violation {
  file: string
  line: number
  term: string
  category: string
  context: string
  severity: 'critical' | 'warning'
}

function shouldSkip(filePath: string): boolean {
  return SKIP_PATTERNS.some(pattern => filePath.includes(pattern))
}

function getAllFiles(dirPath: string, files: string[] = []): string[] {
  if (!fs.existsSync(dirPath)) return files
  
  const stat = fs.statSync(dirPath)
  if (stat.isFile()) {
    files.push(dirPath)
    return files
  }
  
  const entries = fs.readdirSync(dirPath)
  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry)
    if (shouldSkip(fullPath)) continue
    
    const entryStat = fs.statSync(fullPath)
    if (entryStat.isDirectory()) {
      getAllFiles(fullPath, files)
    } else if (entryStat.isFile()) {
      // Only check text files
      const ext = path.extname(fullPath).toLowerCase()
      if (['.ts', '.tsx', '.js', '.json', '.md', '.html', '.css', '.txt', ''].includes(ext)) {
        files.push(fullPath)
      }
    }
  }
  return files
}

function checkFile(filePath: string): Violation[] {
  const violations: Violation[] = []
  
  try {
    const content = fs.readFileSync(filePath, 'utf-8')
    const lines = content.split('\n')
    
    // Check critical terms
    for (const [category, terms] of Object.entries(CRITICAL_TERMS)) {
      for (const term of terms) {
        // Case-insensitive search, word boundary
        const regex = new RegExp(`\\b${term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'gi')
        
        lines.forEach((line, index) => {
          if (regex.test(line)) {
            violations.push({
              file: filePath,
              line: index + 1,
              term,
              category,
              context: line.trim().substring(0, 80),
              severity: 'critical',
            })
          }
        })
      }
    }
    
    // Check warning terms
    for (const [category, terms] of Object.entries(WARNING_TERMS)) {
      for (const term of terms) {
        const regex = new RegExp(`\\b${term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'gi')
        
        lines.forEach((line, index) => {
          if (regex.test(line)) {
            violations.push({
              file: filePath,
              line: index + 1,
              term,
              category,
              context: line.trim().substring(0, 80),
              severity: 'warning',
            })
          }
        })
      }
    }
  } catch (error) {
    // Skip files that can't be read
  }
  
  return violations
}

function main(): void {
  console.log('\n🔐 Confidentiality Check\n')
  console.log('Scanning for confidential terms...\n')
  
  const rootDir = path.join(__dirname, '..')
  let allViolations: Violation[] = []
  
  for (const checkPath of CHECK_PATHS) {
    const fullPath = path.join(rootDir, checkPath)
    const files = getAllFiles(fullPath)
    
    for (const file of files) {
      const violations = checkFile(file)
      allViolations = allViolations.concat(violations)
    }
  }
  
  const criticalViolations = allViolations.filter(v => v.severity === 'critical')
  const warningViolations = allViolations.filter(v => v.severity === 'warning')
  
  if (criticalViolations.length === 0 && warningViolations.length === 0) {
    console.log('✅ No confidential terms found!\n')
    console.log('Safe to commit.\n')
    process.exit(0)
  }
  
  if (criticalViolations.length > 0) {
    console.error('❌ CRITICAL: CONFIDENTIAL TERMS DETECTED!\n')
    console.error('The following files contain confidential client/product information:\n')
    
    // Group by file
    const byFile = new Map<string, Violation[]>()
    for (const v of criticalViolations) {
      const existing = byFile.get(v.file) || []
      existing.push(v)
      byFile.set(v.file, existing)
    }
    
    for (const [file, violations] of byFile) {
      const relativePath = path.relative(rootDir, file)
      console.error(`📄 ${relativePath}`)
      
      // Deduplicate by line and term
      const seen = new Set<string>()
      for (const v of violations) {
        const key = `${v.line}:${v.term}`
        if (seen.has(key)) continue
        seen.add(key)
        console.error(`   Line ${v.line}: "${v.term}" (${v.category})`)
        console.error(`   > ${v.context}...`)
      }
      console.error('')
    }
    
    console.error(`Total CRITICAL violations: ${criticalViolations.length}\n`)
    console.error('⚠️  DO NOT COMMIT until these are replaced with generic terms.\n')
    console.error('Refer to: docs/CONTEXT_UPDATE_PLAN.md for replacement guidelines.\n')
    
    process.exit(1)
  }
  
  if (warningViolations.length > 0) {
    console.log('⚠️  WARNINGS (review but may be acceptable):\n')
    
    const byFile = new Map<string, Violation[]>()
    for (const v of warningViolations) {
      const existing = byFile.get(v.file) || []
      existing.push(v)
      byFile.set(v.file, existing)
    }
    
    for (const [file, violations] of byFile) {
      const relativePath = path.relative(rootDir, file)
      console.log(`📄 ${relativePath}`)
      
      const seen = new Set<string>()
      for (const v of violations) {
        const key = `${v.line}:${v.term}`
        if (seen.has(key)) continue
        seen.add(key)
        console.log(`   Line ${v.line}: "${v.term}" (${v.category})`)
      }
      console.log('')
    }
    
    console.log('These terms may be acceptable in resumes but review before committing.\n')
    process.exit(0)  // Warnings don't block commit
  }
}

main()

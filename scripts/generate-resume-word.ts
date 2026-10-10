/**
 * Resume Word Document Generation Script
 * Generates DOCX from portfolio data using docx library
 * 
 * Usage: npx ts-node scripts/generate-resume-word.ts [version]
 * Example: npx ts-node scripts/generate-resume-word.ts v1
 */

import * as fs from 'fs';
import * as path from 'path';
import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  HeadingLevel,
  AlignmentType,
  BorderStyle,
  Table,
  TableRow,
  TableCell,
  WidthType,
  convertInchesToTwip,
} from 'docx';

const ROOT_DIR = process.cwd();
const OUTPUT_DIR = path.join(ROOT_DIR, 'resume', 'output');

// Resume content - v1
const resumeData = {
  name: 'SATHISH KUMAR V',
  title: 'AI Architect & Team Lead | LLM Systems | RAG Architecture | Agentic AI',
  contact: {
    location: 'Chennai, India',
    phone: '+91 8056770991',
    email: 'sathishkumar05@gmail.com',
    linkedin: 'linkedin.com/in/sathish-kumar-310976153',
    github: 'github.com/vpsathish05',
    portfolio: 'vpsathish05.github.io/sathish-portfolio'
  },
  summary: `AI COE Team Lead managing 6-7 engineers while driving enterprise AI strategy. 6+ years of progressive expertise building production-grade AI systems, LLM applications, and intelligent automation. Product owner for 5+ internal AI platforms serving 200+ employees. Delivered 13+ client AI projects and 15+ internal AI products. Achieved 99% processing time reduction (260 hours → 26 minutes) with 85-90% automation rates. Won 5+ enterprise sales opportunities through solution architecture and technical pre-sales. Expert in Azure AI Foundry, AWS Bedrock, LangChain/LangGraph, MCP (Model Context Protocol), and RAG architectures.`,
  skills: {
    'AI & LLM': 'Azure AI Foundry, AWS Bedrock, LangChain, LangGraph, RAG, Agentic AI, MCP, Copilot Studio, Microsoft Fabric AI, Databricks Agents, OpenAI, Claude, Prompt Engineering',
    'Document Intelligence': 'PaddleOCR, Azure Document Intelligence, Amazon Textract, PDF/Table Extraction',
    'Vector Databases': 'Chroma DB, PostgreSQL pgvector, Azure Cognitive Search, Pinecone',
    'Programming': 'Python, TypeScript, JavaScript, C#',
    'Full Stack': 'FastAPI, Next.js, React, Angular, Node.js, NestJS, .NET Core',
    'Data Engineering': 'dbt, Microsoft Fabric, Amazon Redshift, PostgreSQL, Azure Data Factory, Databricks, Power BI',
    'Cloud & DevOps': 'Azure, AWS, Docker, Terraform, GitHub Actions, Git'
  },
  experience: [
    {
      company: 'JMAN Group, Chennai',
      duration: 'Feb 2022 – Present (4+ years)',
      roles: [
        {
          title: 'AI COE Team Lead & Solutions Consultant',
          period: 'Oct 2025 – Present',
          bullets: [
            'Lead AI Center of Excellence cluster team of 6-7 engineers, driving AI strategy and delivery',
            'Product owner for enterprise AI assistant platform serving 200+ employees',
            'Won 5+ sales opportunities through solution architecture and technical pre-sales',
            'Created AI Playbook covering RAG, agents, multi-agent systems, MCP, LLMOps',
            'Led AI governance and compliance reviews including EU AI Act and GDPR',
            'Conducted 16+ technical interviews for AI engineering roles'
          ]
        },
        {
          title: 'Solution Enabler',
          period: 'Apr 2024 – Oct 2025',
          bullets: [
            'Product lead for private AI platform—foundation for enterprise AI products with multi-LLM support',
            'Led Contract Intelligence project: 99% processing time reduction (260 hours → 26 minutes)',
            'Architected AI context layer for PE firm with Claude Enterprise and MCP',
            'Created custom MCP server for Microsoft Fabric with Excel export and dashboards',
            'Led BOM Entry Automation achieving 95%+ required-field extraction accuracy'
          ]
        },
        {
          title: 'Senior Software Engineer',
          period: 'Apr 2023 – Apr 2024',
          bullets: [
            'Built medallion architecture data platform processing 5M+ records daily',
            'Developed data models in Amazon Redshift with SCD Type 2 implementation',
            'Implemented automated data quality checks ensuring 99.5% data integrity'
          ]
        },
        {
          title: 'Software Engineer',
          period: 'Feb 2022 – Apr 2023',
          bullets: [
            'Developed RESTful APIs using Node.js, NestJS, and FastAPI',
            'Implemented ETL pipelines with Azure Data Factory processing 1M+ records daily',
            'Built containerized deployments using Docker reducing deployment time by 60%'
          ]
        }
      ]
    },
    {
      company: 'Previous Experience',
      duration: 'Jul 2017 – Feb 2022',
      roles: [
        {
          title: '',
          period: '',
          bullets: [
            'Elroi Software Solutions (Sep 2021 – Feb 2022): Full Stack Developer - C#, .NET, SQL Server',
            'Qserve UAE (Aug 2020 – Nov 2020): Full-Stack Developer - Retail Management System',
            'RmKV Computask (Jul 2017 – Aug 2018): Software Developer - Enterprise ERP for 20+ locations'
          ]
        }
      ]
    }
  ],
  projects: [
    {
      title: 'Contract Intelligence Platform',
      client: 'Enterprise Client',
      role: 'Technical Lead',
      highlights: [
        'Reduced manual processing from 260 hours to 26 minutes—99% time reduction',
        'Built multi-stage pipeline using PaddleOCR and Qwen SLM for 200-page contracts',
        'Deployed GPU-accelerated inference on AWS EC2 with Salesforce integration'
      ],
      tech: 'Python, FastAPI, PaddleOCR, Qwen SLM, AWS EC2 GPU, S3, Salesforce, MongoDB'
    },
    {
      title: 'Enterprise AI Assistant Platform',
      client: 'Internal Product',
      role: 'Product Owner & Lead Architect',
      highlights: [
        'Secure AI platform—private ChatGPT alternative serving 200+ employees',
        'Integrated with SharePoint, Power BI, DevOps, CRM; Fabric Data Agent for analytics'
      ],
      tech: 'React, TypeScript, Azure OpenAI, Azure Cognitive Search, PostgreSQL, MCP'
    },
    {
      title: 'AI Context Layer for Private Equity',
      client: 'PE Firm Client',
      role: 'AI Solution Architect',
      highlights: [
        'Designed AI context layer enabling investment workflow automation',
        'Architected solution using Claude Enterprise with custom MCP tool layer'
      ],
      tech: 'Azure AI, Claude Enterprise, MCP, LangGraph, Enterprise Search'
    }
  ],
  achievements: [
    'Team Leadership: Managing 6-7 engineers in AI COE cluster with mentoring and career development',
    'Product Ownership: 5+ internal AI platforms including enterprise AI assistant',
    'Sales Impact: Won 5+ enterprise opportunities through solution architecture and pre-sales',
    'Knowledge Sharing: Created AI Playbook, delivered 10+ internal training sessions',
    'Recognition: Performance-linked bonus (PLI) FY2024-25; 2x hackathon 3rd place finishes'
  ],
  education: [
    { degree: 'Master of Computer Applications (MCA)', institution: 'University of Madras IDE', year: '2017-2020', grade: '70%' },
    { degree: 'Bachelor of Computer Applications (BCA)', institution: 'Jairam Arts and Science College', year: '2014-2017', grade: '66%' }
  ],
  publications: [
    '"Contract Intelligence at Scale: How OCR-LLM Turned 260 Hours Into 26 Minutes" - Medium (2024)'
  ]
};

async function generateWordResume(version: string = 'v1') {
  console.log(`\n📄 Generating Resume ${version.toUpperCase()} (Word)\n`);

  // Ensure output directory exists
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  const outputPath = path.join(OUTPUT_DIR, `Sathish_Kumar_V_Resume_${version}.docx`);

  // Create document
  const doc = new Document({
    sections: [{
      properties: {
        page: {
          margin: {
            top: convertInchesToTwip(0.5),
            right: convertInchesToTwip(0.5),
            bottom: convertInchesToTwip(0.5),
            left: convertInchesToTwip(0.5)
          }
        }
      },
      children: [
        // Header - Name
        new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [
            new TextRun({
              text: resumeData.name,
              bold: true,
              size: 36,
              color: '2c3e50'
            })
          ]
        }),
        // Title
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { after: 100 },
          children: [
            new TextRun({
              text: resumeData.title,
              size: 22,
              color: '34495e'
            })
          ]
        }),
        // Contact
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { after: 200 },
          border: {
            bottom: { style: BorderStyle.SINGLE, size: 12, color: '2c3e50' }
          },
          children: [
            new TextRun({
              text: `${resumeData.contact.location} | ${resumeData.contact.phone} | ${resumeData.contact.email}`,
              size: 18
            })
          ]
        }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { after: 300 },
          children: [
            new TextRun({
              text: `LinkedIn: ${resumeData.contact.linkedin} | GitHub: ${resumeData.contact.github} | Portfolio: ${resumeData.contact.portfolio}`,
              size: 16,
              color: '3498db'
            })
          ]
        }),

        // Professional Summary
        createSectionHeader('PROFESSIONAL SUMMARY'),
        new Paragraph({
          spacing: { after: 200 },
          children: [
            new TextRun({
              text: resumeData.summary,
              size: 20
            })
          ]
        }),

        // Technical Skills
        createSectionHeader('TECHNICAL SKILLS'),
        ...Object.entries(resumeData.skills).map(([category, skills]) =>
          new Paragraph({
            spacing: { after: 50 },
            children: [
              new TextRun({ text: `${category}: `, bold: true, size: 20 }),
              new TextRun({ text: skills, size: 20 })
            ]
          })
        ),
        new Paragraph({ spacing: { after: 200 }, children: [] }),

        // Professional Experience
        createSectionHeader('PROFESSIONAL EXPERIENCE'),
        ...resumeData.experience.flatMap(exp => [
          new Paragraph({
            spacing: { before: 100 },
            children: [
              new TextRun({ text: exp.company, bold: true, size: 22 }),
              new TextRun({ text: `  |  ${exp.duration}`, italics: true, size: 18, color: '7f8c8d' })
            ]
          }),
          ...exp.roles.flatMap(role => [
            role.title ? new Paragraph({
              spacing: { before: 50 },
              indent: { left: convertInchesToTwip(0.2) },
              border: { left: { style: BorderStyle.SINGLE, size: 6, color: '3498db' } },
              children: [
                new TextRun({ text: role.title, bold: true, size: 20, color: '34495e' }),
                role.period ? new TextRun({ text: `  (${role.period})`, italics: true, size: 18, color: '7f8c8d' }) : new TextRun({ text: '' })
              ]
            }) : new Paragraph({ children: [] }),
            ...role.bullets.map(bullet =>
              new Paragraph({
                bullet: { level: 0 },
                spacing: { after: 50 },
                children: [new TextRun({ text: bullet, size: 19 })]
              })
            )
          ])
        ]),
        new Paragraph({ spacing: { after: 200 }, children: [] }),

        // Key Projects
        createSectionHeader('KEY PROJECTS'),
        ...resumeData.projects.flatMap(project => [
          new Paragraph({
            spacing: { before: 100 },
            children: [
              new TextRun({ text: `${project.title} | ${project.client}`, bold: true, size: 20 }),
              new TextRun({ text: `  (${project.role})`, italics: true, size: 18, color: '7f8c8d' })
            ]
          }),
          ...project.highlights.map(highlight =>
            new Paragraph({
              bullet: { level: 0 },
              spacing: { after: 30 },
              children: [new TextRun({ text: highlight, size: 19 })]
            })
          ),
          new Paragraph({
            spacing: { after: 100 },
            children: [
              new TextRun({ text: 'Tech: ', bold: true, size: 18, color: '3498db' }),
              new TextRun({ text: project.tech, size: 18, color: '3498db' })
            ]
          })
        ]),

        // Leadership & Achievements
        createSectionHeader('LEADERSHIP & ACHIEVEMENTS'),
        ...resumeData.achievements.map(achievement =>
          new Paragraph({
            bullet: { level: 0 },
            spacing: { after: 50 },
            children: [new TextRun({ text: achievement, size: 19 })]
          })
        ),
        new Paragraph({ spacing: { after: 200 }, children: [] }),

        // Education
        createSectionHeader('EDUCATION'),
        ...resumeData.education.map(edu =>
          new Paragraph({
            spacing: { after: 50 },
            children: [
              new TextRun({ text: edu.degree, bold: true, size: 20 }),
              new TextRun({ text: ` | ${edu.institution} | ${edu.year} | ${edu.grade}`, size: 19 })
            ]
          })
        ),
        new Paragraph({ spacing: { after: 200 }, children: [] }),

        // Publications
        createSectionHeader('PUBLICATIONS'),
        ...resumeData.publications.map(pub =>
          new Paragraph({
            bullet: { level: 0 },
            spacing: { after: 50 },
            children: [new TextRun({ text: pub, size: 19 })]
          })
        ),

        // Footer
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { before: 300 },
          children: [
            new TextRun({
              text: 'Availability: Immediate | Work Preference: Remote (Open to UK/US timezone overlap)',
              size: 18,
              color: '7f8c8d'
            })
          ]
        })
      ]
    }]
  });

  // Generate document
  console.log('📝 Creating document...');
  const buffer = await Packer.toBuffer(doc);
  fs.writeFileSync(outputPath, buffer);

  console.log(`\n✅ Word document generated successfully!`);
  console.log(`   ${outputPath}\n`);

  // Show file size
  const stats = fs.statSync(outputPath);
  console.log(`   Size: ${(stats.size / 1024).toFixed(2)} KB`);
}

function createSectionHeader(text: string): Paragraph {
  return new Paragraph({
    spacing: { before: 200, after: 100 },
    shading: { fill: '2c3e50' },
    children: [
      new TextRun({
        text: ` ${text}`,
        bold: true,
        size: 22,
        color: 'FFFFFF'
      })
    ]
  });
}

// Get version from command line args
const version = process.argv[2] || 'v1';
generateWordResume(version);

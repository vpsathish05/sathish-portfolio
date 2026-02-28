import { personalInfo } from "@/data/portfolio";

export const generatePersonSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Person",
  "name": personalInfo.name,
  "jobTitle": personalInfo.title,
  "description": personalInfo.description,
  "email": personalInfo.email,
  "telephone": personalInfo.phone,
  "url": "https://sathishkumar.dev",
  "image": personalInfo.avatar,
  "sameAs": [
    personalInfo.linkedin,
    personalInfo.github
  ],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Chennai",
    "addressCountry": "IN"
  },
  "knowsAbout": [
    "Full-Stack Development",
    "Data Engineering",
    "Next.js",
    "Node.js",
    "Python",
    "AI/ML",
    "React",
    "Angular",
    "C#",
    ".NET",
    "SQL",
    "dbt",
    "Azure"
  ]
});

export const generateWebsiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Sathish Kumar V - Portfolio",
  "description": "Full-Stack Developer & Data Engineer Portfolio",
  "url": "https://sathishkumar.dev",
  "author": {
    "@type": "Person",
    "name": personalInfo.name
  }
});

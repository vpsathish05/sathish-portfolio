"use client";

import { useState, useEffect } from "react";
import { Button, Tag } from "../../design-system/components/signal.js";

/* ========================================================================
   SATHISH KUMAR V — AI ARCHITECT PORTFOLIO
   Design: 2026 UK/US minimal dark mode, one-page, impact-first
   Reference: Brittany Chiang, Tania Rascia, Devon Stank patterns
   ======================================================================== */

export default function Portfolio() {
  const [theme, setTheme] = useState<"night" | "paper">("night");
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // Intersection observer for active section tracking
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -60% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="portfolio">
      {/* ================================================================
          STICKY NAVIGATION - UK/US trend: minimal, always visible
          ================================================================ */}
      <nav className="nav">
        <div className="nav__brand">
          <span className="nav__mark">SK</span>
          <span className="nav__name">Sathish Kumar V</span>
        </div>
        
        <div className="nav__links">
          {[
            { id: "about", label: "About" },
            { id: "work", label: "Work" },
            { id: "projects", label: "Projects" },
            { id: "experience", label: "Experience" },
          ].map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`nav__link ${activeSection === link.id ? "active" : ""}`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="nav__end">
          <Tag tone="current" live>Open to UK/US Remote</Tag>
          <Button size="sm" variant="secondary" href="#contact">
            Get in touch
          </Button>
        </div>
      </nav>

      <main className="main">
        {/* ================================================================
            LEFT COLUMN - Fixed sidebar (desktop) with links
            UK/US trend: Brittany Chiang style - fixed left, scrolling right
            ================================================================ */}
        <aside className="sidebar">
          <div className="sidebar__content">
            <div className="sidebar__intro">
              <h1 className="sidebar__name">Sathish Kumar V</h1>
              <h2 className="sidebar__title">AI Architect & Team Lead</h2>
              <p className="sidebar__tagline">
                I build AI systems that run in production—not demos, not notebooks.
              </p>
            </div>

            <nav className="sidebar__nav">
              {[
                { id: "about", label: "About" },
                { id: "work", label: "Client Work" },
                { id: "projects", label: "Products" },
                { id: "experience", label: "Experience" },
              ].map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className={`sidebar__link ${activeSection === link.id ? "active" : ""}`}
                >
                  <span className="sidebar__indicator" />
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="sidebar__social">
              <a href="https://github.com/vpsathish05" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/sathish-kumar-310976153/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://medium.com/@vpsathish05" target="_blank" rel="noopener noreferrer" aria-label="Medium">
                <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                  <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                </svg>
              </a>
            </div>
          </div>
        </aside>

        {/* ================================================================
            RIGHT COLUMN - Scrolling content
            UK/US trend: Clean sections, clear hierarchy, metrics first
            ================================================================ */}
        <div className="content">
          
          {/* ABOUT SECTION */}
          <section id="about" className="section">
            <p className="about__text">
              I&apos;m an <strong>AI Team Lead</strong> based in Chennai, building production AI systems for 
              consulting clients and leading a team of 7 engineers. I&apos;ve shipped 15 internal AI products, 
              delivered 13 client projects, and won 5 enterprise deals through solutions I architected and pitched.
            </p>
            <p className="about__text">
              My focus is on <strong>systems that survive reality</strong>—RAG pipelines processing thousands 
              of documents, contract extraction achieving 99% time reduction, AI platforms serving 200+ consultants. 
              When we win the deal, I build it.
            </p>
            <p className="about__text">
              I&apos;m looking for <strong>remote roles with UK or US companies</strong> where I can keep doing 
              what I do best: shipping AI that runs in production, not just demos well. Available with 60-90 day notice.
            </p>

            {/* Impact metrics - UK/US trend: Numbers up front */}
            <div className="metrics">
              <div className="metric">
                <span className="metric__value">13</span>
                <span className="metric__label">Client Projects</span>
              </div>
              <div className="metric">
                <span className="metric__value">15</span>
                <span className="metric__label">Internal Products</span>
              </div>
              <div className="metric">
                <span className="metric__value">7</span>
                <span className="metric__label">Engineers Led</span>
              </div>
              <div className="metric">
                <span className="metric__value">5</span>
                <span className="metric__label">Deals Won</span>
              </div>
            </div>

            {/* Tech Stack - Organised by category (UK/US trend) */}
            <div className="skills">
              <h3 className="skills__heading">Technologies I work with</h3>
              <div className="skills__group">
                <span className="skills__category">AI/LLM</span>
                <div className="skills__tags">
                  <Tag tone="signal">LangChain</Tag>
                  <Tag tone="signal">LangGraph</Tag>
                  <Tag tone="signal">Azure OpenAI</Tag>
                  <Tag tone="signal">Claude</Tag>
                  <Tag tone="signal">MCP</Tag>
                  <Tag>RAG</Tag>
                  <Tag>Agents</Tag>
                </div>
              </div>
              <div className="skills__group">
                <span className="skills__category">Platform</span>
                <div className="skills__tags">
                  <Tag>Azure AI Foundry</Tag>
                  <Tag>Microsoft Fabric</Tag>
                  <Tag>AWS Bedrock</Tag>
                  <Tag>Docker</Tag>
                  <Tag>Terraform</Tag>
                </div>
              </div>
              <div className="skills__group">
                <span className="skills__category">Languages</span>
                <div className="skills__tags">
                  <Tag>Python</Tag>
                  <Tag>TypeScript</Tag>
                  <Tag>FastAPI</Tag>
                  <Tag>React</Tag>
                  <Tag>PostgreSQL</Tag>
                </div>
              </div>
            </div>
          </section>

          {/* CLIENT WORK SECTION */}
          <section id="work" className="section">
            <h2 className="section__title">
              <span className="section__number">01</span>
              Client Work
            </h2>

            <div className="projects">
              {/* Featured: Contract Intelligence */}
              <article className="project project--featured">
                <div className="project__header">
                  <span className="project__type">Document Intelligence</span>
                  <a 
                    href="https://medium.com/@vpsathish05/contract-intelligence-at-scale-how-ocr-llm-turned-260-hours-into-26-minutes-00dc6aab26a0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project__link"
                    aria-label="Read case study"
                  >
                    ↗
                  </a>
                </div>
                <h3 className="project__title">Contract extraction at scale</h3>
                <p className="project__description">
                  Enterprise client drowning in 200-page contracts, pricing buried in nested tables. 
                  Their team spent 260 hours per batch. Built the pipeline that does it in 26 minutes 
                  with 85% straight-through processing. Started as 4-week PoC, became 6-month engagement.
                </p>
                <div className="project__outcome">
                  <strong>99% time reduction</strong> · $0.002/page vs $0.03 with GPT-4 Vision
                </div>
                <div className="project__tags">
                  <Tag>PaddleOCR</Tag>
                  <Tag>Qwen 7B</Tag>
                  <Tag>Human-in-loop</Tag>
                  <Tag>Salesforce</Tag>
                </div>
              </article>

              {/* AI Context Layer for PE */}
              <article className="project">
                <div className="project__header">
                  <span className="project__type">PE Investment Platform</span>
                </div>
                <h3 className="project__title">AI context layer for Private Equity</h3>
                <p className="project__description">
                  Investment team spent days preparing for committee meetings. Built an AI layer that 
                  knows their portfolio context, cites sources, challenges assumptions. Claude Enterprise 
                  with custom MCP tool layer for secure data access.
                </p>
                <div className="project__tags">
                  <Tag>Claude Enterprise</Tag>
                  <Tag>MCP</Tag>
                  <Tag>LangGraph</Tag>
                </div>
              </article>

              {/* Private AI Platform */}
              <article className="project">
                <div className="project__header">
                  <span className="project__type">Enterprise AI Platform</span>
                </div>
                <h3 className="project__title">Private AI for 200 consultants</h3>
                <p className="project__description">
                  Consultants using ChatGPT with client data—compliance nightmare. Built a governed 
                  AI platform connecting SharePoint, Power BI, CRM. Same capabilities, zero data 
                  leaving the perimeter.
                </p>
                <div className="project__tags">
                  <Tag>Azure OpenAI</Tag>
                  <Tag>Knowledge Integration</Tag>
                  <Tag>Governance</Tag>
                </div>
              </article>

              {/* Additional projects grid */}
              <div className="projects__grid">
                <article className="project project--compact">
                  <span className="project__type">Manufacturing</span>
                  <h4 className="project__title">BOM automation</h4>
                  <p className="project__description">
                    Manual entry from emails, PDFs, images into ERP. Built ingestion pipeline with 
                    OCR, LLM extraction, validation. 95% accuracy on required fields.
                  </p>
                  <div className="project__tags">
                    <Tag>Azure AI Foundry</Tag>
                    <Tag>ERP</Tag>
                  </div>
                </article>

                <article className="project project--compact">
                  <span className="project__type">Analytics</span>
                  <h4 className="project__title">Natural language BI</h4>
                  <p className="project__description">
                    Business users couldn&apos;t query their own data without SQL. Built semantic 
                    layer making Power BI models AI-queryable via Copilot Studio.
                  </p>
                  <div className="project__tags">
                    <Tag>Fabric</Tag>
                    <Tag>MCP</Tag>
                  </div>
                </article>

                <article className="project project--compact">
                  <span className="project__type">Healthcare</span>
                  <h4 className="project__title">Research chatbot</h4>
                  <p className="project__description">
                    Clinicians spending hours reading papers. Built RAG chatbot synthesising 
                    research from PubMed, Google Scholar. 1K+ daily queries.
                  </p>
                  <div className="project__tags">
                    <Tag>LangChain</Tag>
                    <Tag>pgvector</Tag>
                  </div>
                </article>
              </div>
            </div>
          </section>

          {/* PRODUCTS I OWN SECTION */}
          <section id="projects" className="section">
            <h2 className="section__title">
              <span className="section__number">02</span>
              Products I Own
            </h2>

            <div className="projects">
              <article className="project">
                <div className="project__header">
                  <span className="project__type">Enterprise AI Platform</span>
                </div>
                <h3 className="project__title">Enterprise AI Assistant</h3>
                <p className="project__description">
                  Our internal ChatGPT alternative. Secure enterprise AI connecting to SharePoint, 
                  Power BI, project data. Multi-model, multi-workspace. I&apos;m the product owner, 
                  serving 200+ employees.
                </p>
                <div className="project__tags">
                  <Tag>React</Tag>
                  <Tag>Azure OpenAI</Tag>
                  <Tag>MCP</Tag>
                  <Tag>PostgreSQL</Tag>
                </div>
              </article>

              <article className="project">
                <div className="project__header">
                  <span className="project__type">Consulting Agent</span>
                </div>
                <h3 className="project__title">AI Backend Platform</h3>
                <p className="project__description">
                  Central AI platform with multi-LLM support, knowledge integration, document 
                  intelligence. I own the technical architecture powering our chat products.
                </p>
                <div className="project__tags">
                  <Tag>LangGraph</Tag>
                  <Tag>FastAPI</Tag>
                  <Tag>Redis</Tag>
                </div>
              </article>

              <article className="project">
                <div className="project__header">
                  <span className="project__type">MCP Server</span>
                  <a 
                    href="https://github.com/vpsathish05"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project__link"
                    aria-label="View on GitHub"
                  >
                    ↗
                  </a>
                </div>
                <h3 className="project__title">Fabric MCP Server</h3>
                <p className="project__description">
                  Custom MCP server over Microsoft Fabric. Adds Excel export, dashboard generation 
                  beyond Fabric Data Agent&apos;s limits. Deployed on Azure Container Apps.
                </p>
                <div className="project__tags">
                  <Tag>MCP</Tag>
                  <Tag>Fabric</Tag>
                  <Tag>Claude</Tag>
                </div>
              </article>

              {/* Additional products */}
              <div className="products__more">
                <Tag tone="current">+ AI Proposal Writer</Tag>
                <Tag tone="current">+ Power BI Semantic Assistant</Tag>
                <Tag tone="current">+ AI Playbook (Knowledge Base)</Tag>
                <Tag tone="current">+ MCP Integrations Accelerator</Tag>
              </div>
            </div>

            {/* Hackathon Section */}
            <div className="hackathons">
              <h3 className="hackathons__title">Hackathon Projects</h3>
              
              <article className="project project--compact">
                <span className="project__type">AI PoC · 2024</span>
                <h4 className="project__title">SapienSync | Talent Recommendation</h4>
                <p className="project__description">
                  AI engine ranking best-fit employees for open roles. 6-step pipeline: intake 
                  normalisation, semantic skill matching (1536-dim embeddings, pgvector), GPT-4o 
                  rationale generation. 4.4% MAPE forecasting accuracy.
                </p>
                <div className="project__tags">
                  <Tag>GPT-4o</Tag>
                  <Tag>pgvector</Tag>
                  <Tag>asyncio</Tag>
                </div>
              </article>

              <article className="project project--compact">
                <span className="project__type">Hackathon 2024</span>
                <h4 className="project__title">UK PE Lead Generation Network</h4>
                <p className="project__description">
                  Sales intelligence pipeline targeting UK Private Equity. Medallion Architecture 
                  with Companies House, FCA Register, web scraping. Weighted lead scoring.
                </p>
                <div className="project__tags">
                  <Tag>Medallion</Tag>
                  <Tag>GPT-4o-mini</Tag>
                  <Tag>Power BI</Tag>
                </div>
              </article>
            </div>
          </section>

          {/* EXPERIENCE SECTION */}
          <section id="experience" className="section">
            <h2 className="section__title">
              <span className="section__number">03</span>
              Experience
            </h2>

            <div className="timeline">
              <article className="timeline__item timeline__item--current">
                <div className="timeline__period">2025 — Present</div>
                <div className="timeline__content">
                  <h3 className="timeline__role">
                    AI Team Lead & Solutions Consultant
                    <Tag tone="signal" live>Now</Tag>
                  </h3>
                  <p className="timeline__org">Consulting Firm · Chennai</p>
                  <p className="timeline__description">
                    Leading AI COE cluster of 7 engineers. Product owner for enterprise AI assistant 
                    serving 200+ employees. Architecting solutions using Azure AI Foundry, AWS Bedrock, 
                    and MCP. Won 5+ sales opportunities through solution architecture and pre-sales.
                  </p>
                </div>
              </article>

              <article className="timeline__item">
                <div className="timeline__period">2024 — 2025</div>
                <div className="timeline__content">
                  <h3 className="timeline__role">Solution Enabler</h3>
                  <p className="timeline__org">Consulting Firm · Chennai</p>
                  <p className="timeline__description">
                    Product lead for private AI platform. Led Contract Intelligence project—260 hours 
                    to 26 minutes with 85-90% automation. Architected AI context layers for PE firms. 
                    Built custom MCP servers for Microsoft Fabric.
                  </p>
                </div>
              </article>

              <article className="timeline__item">
                <div className="timeline__period">2023 — 2024</div>
                <div className="timeline__content">
                  <h3 className="timeline__role">Senior Software Engineer</h3>
                  <p className="timeline__org">Consulting Firm · Chennai</p>
                  <p className="timeline__description">
                    Enhanced data pipelines using dbt, Azure Data Factory, Matillion ETL. Optimised 
                    ETL processes for Amazon Redshift and SQL Server. Built full-stack applications 
                    with Angular, React, Node.js.
                  </p>
                </div>
              </article>

              <article className="timeline__item">
                <div className="timeline__period">2017 — 2023</div>
                <div className="timeline__content">
                  <h3 className="timeline__role">Software Engineer → Data Engineer</h3>
                  <p className="timeline__org">Various Companies · Chennai</p>
                  <p className="timeline__description">
                    Started with C# and .NET building enterprise systems for retail. Progressed to 
                    data engineering with ETL pipelines, warehouses, dbt models. First client delivery 
                    work and foundational engineering experience.
                  </p>
                </div>
              </article>
            </div>

            {/* Education - brief */}
            <div className="education">
              <h3 className="education__title">Education</h3>
              <p className="education__item">
                <strong>MCA</strong> · University of Madras · 2017-2020
              </p>
              <p className="education__item">
                <strong>BCA</strong> · Jairam Arts and Science College · 2014-2017
              </p>
            </div>
          </section>

          {/* CONTACT SECTION */}
          <section id="contact" className="section section--contact">
            <h2 className="section__title">
              <span className="section__number">04</span>
              Get in touch
            </h2>

            <p className="contact__text">
              I&apos;m exploring remote roles with UK or US companies (60-90 day notice). 
              If you need someone who builds AI systems that run in production—not just 
              demo well—let&apos;s talk.
            </p>

            <div className="contact__actions">
              <Button size="lg" href="mailto:sathishkumar05@gmail.com">
                sathishkumar05@gmail.com
              </Button>
              <Button size="lg" variant="secondary" href="/sathish-portfolio/resume/output/Sathish_Kumar_V_Resume_v1.pdf">
                Download Resume
              </Button>
            </div>

            <div className="contact__links">
              <a href="https://www.linkedin.com/in/sathish-kumar-310976153/" target="_blank" rel="noopener noreferrer">
                LinkedIn ↗
              </a>
              <a href="https://github.com/vpsathish05" target="_blank" rel="noopener noreferrer">
                GitHub ↗
              </a>
              <a href="https://medium.com/@vpsathish05" target="_blank" rel="noopener noreferrer">
                Medium ↗
              </a>
            </div>
          </section>

          {/* Footer */}
          <footer className="footer">
            <p>
              Built with Next.js and the Signal Design System. 
              Design inspired by <a href="https://brittanychiang.com" target="_blank" rel="noopener noreferrer">Brittany Chiang</a>.
            </p>
          </footer>
        </div>
      </main>

      {/* Theme Toggle */}
      <button 
        className="theme-toggle"
        onClick={() => setTheme(theme === "night" ? "paper" : "night")}
        aria-label={`Switch to ${theme === "night" ? "light" : "dark"} mode`}
      >
        {theme === "night" ? "☀️" : "🌙"}
      </button>

      <style jsx global>{`
        /* ================================================================
           BASE RESET & VARIABLES
           ================================================================ */
        *, *::before, *::after {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        html {
          scroll-behavior: smooth;
          scroll-padding-top: 100px;
        }

        body {
          background: var(--bg);
          color: var(--ink);
          font-family: var(--font-sans);
          font-size: 16px;
          line-height: 1.7;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        a {
          color: var(--ink);
          text-decoration: none;
          transition: color 0.2s ease;
        }

        a:hover {
          color: var(--signal);
        }

        strong {
          color: var(--ink);
          font-weight: 500;
        }

        /* ================================================================
           PORTFOLIO LAYOUT - Two column (Brittany Chiang style)
           ================================================================ */
        .portfolio {
          min-height: 100vh;
        }

        .main {
          display: flex;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* ================================================================
           NAVIGATION - Sticky top (mobile) / Hidden (desktop)
           ================================================================ */
        .nav {
          display: none;
          position: sticky;
          top: 0;
          z-index: 100;
          background: var(--surface);
          border-bottom: 1px solid var(--line);
          padding: 16px 24px;
        }

        @media (max-width: 1024px) {
          .nav {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 16px;
          }

          .nav__brand {
            display: flex;
            align-items: center;
            gap: 10px;
          }

          .nav__mark {
            display: grid;
            place-items: center;
            width: 32px;
            height: 32px;
            background: var(--ink);
            color: var(--bg);
            font-family: var(--font-mono);
            font-size: 12px;
            font-weight: 600;
            border-radius: 6px;
          }

          .nav__name {
            font-weight: 600;
            font-size: 15px;
          }

          .nav__links {
            display: none;
          }

          .nav__end {
            display: flex;
            align-items: center;
            gap: 12px;
          }

          .nav__end .sg-tag {
            display: none;
          }
        }

        @media (max-width: 640px) {
          .nav__name {
            display: none;
          }
        }

        /* ================================================================
           SIDEBAR - Fixed left column (desktop only)
           ================================================================ */
        .sidebar {
          position: sticky;
          top: 0;
          height: 100vh;
          width: 45%;
          max-width: 480px;
          padding: 96px 48px 96px 24px;
          display: flex;
          flex-direction: column;
        }

        .sidebar__content {
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .sidebar__intro {
          margin-bottom: 48px;
        }

        .sidebar__name {
          font-family: var(--font-display);
          font-size: 48px;
          font-weight: 400;
          line-height: 1;
          letter-spacing: -0.02em;
          color: var(--ink);
          margin-bottom: 8px;
        }

        .sidebar__title {
          font-family: var(--font-sans);
          font-size: 20px;
          font-weight: 500;
          color: var(--ink);
          margin-bottom: 16px;
        }

        .sidebar__tagline {
          font-size: 16px;
          line-height: 1.6;
          color: var(--ink-muted);
          max-width: 320px;
        }

        .sidebar__nav {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: auto;
        }

        .sidebar__link {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 8px 0;
          font-family: var(--font-mono);
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--ink-muted);
          transition: color 0.2s ease;
        }

        .sidebar__link:hover,
        .sidebar__link.active {
          color: var(--ink);
        }

        .sidebar__indicator {
          width: 32px;
          height: 1px;
          background: var(--line-strong);
          transition: width 0.3s ease, background 0.2s ease;
        }

        .sidebar__link:hover .sidebar__indicator,
        .sidebar__link.active .sidebar__indicator {
          width: 64px;
          background: var(--ink);
        }

        .sidebar__social {
          display: flex;
          gap: 20px;
          margin-top: 32px;
        }

        .sidebar__social a {
          color: var(--ink-muted);
          transition: color 0.2s ease;
        }

        .sidebar__social a:hover {
          color: var(--signal);
        }

        @media (max-width: 1024px) {
          .sidebar {
            display: none;
          }
        }

        /* ================================================================
           CONTENT - Scrolling right column
           ================================================================ */
        .content {
          flex: 1;
          padding: 96px 0 96px 48px;
          max-width: 680px;
        }

        @media (max-width: 1024px) {
          .main {
            flex-direction: column;
          }

          .content {
            padding: 48px 0;
            max-width: 100%;
          }
        }

        /* ================================================================
           SECTIONS
           ================================================================ */
        .section {
          margin-bottom: 144px;
        }

        .section:last-of-type {
          margin-bottom: 96px;
        }

        .section__title {
          display: flex;
          align-items: center;
          gap: 16px;
          font-family: var(--font-sans);
          font-size: 16px;
          font-weight: 600;
          color: var(--ink);
          margin-bottom: 40px;
          padding-bottom: 16px;
          border-bottom: 1px solid var(--line);
        }

        .section__number {
          font-family: var(--font-mono);
          font-size: 14px;
          font-weight: 500;
          color: var(--signal-ink);
        }

        /* ================================================================
           ABOUT SECTION
           ================================================================ */
        .about__text {
          color: var(--ink-muted);
          margin-bottom: 16px;
          font-size: 16px;
          line-height: 1.7;
        }

        .about__text:last-of-type {
          margin-bottom: 48px;
        }

        /* METRICS */
        .metrics {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          margin-bottom: 48px;
          padding: 24px;
          background: var(--surface);
          border: 1px solid var(--line);
          border-radius: 12px;
        }

        .metric {
          text-align: center;
        }

        .metric__value {
          display: block;
          font-family: var(--font-display);
          font-size: 48px;
          font-weight: 400;
          color: var(--ink);
          line-height: 1;
          margin-bottom: 8px;
        }

        .metric__label {
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--ink-muted);
        }

        @media (max-width: 640px) {
          .metrics {
            grid-template-columns: repeat(2, 1fr);
          }

          .metric__value {
            font-size: 36px;
          }
        }

        /* SKILLS */
        .skills {
          margin-top: 48px;
        }

        .skills__heading {
          font-family: var(--font-sans);
          font-size: 14px;
          font-weight: 600;
          color: var(--ink);
          margin-bottom: 24px;
        }

        .skills__group {
          margin-bottom: 20px;
        }

        .skills__category {
          display: block;
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--ink-faint);
          margin-bottom: 10px;
        }

        .skills__tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        /* ================================================================
           PROJECTS
           ================================================================ */
        .projects {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .project {
          padding: 24px;
          background: var(--surface);
          border: 1px solid var(--line);
          border-radius: 12px;
          transition: border-color 0.2s ease, transform 0.2s ease;
        }

        .project:hover {
          border-color: var(--line-strong);
          transform: translateY(-2px);
        }

        .project--featured {
          background: var(--surface-raised);
          border-left: 3px solid var(--signal);
        }

        .project__header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }

        .project__type {
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--signal-ink);
        }

        .project__link {
          font-size: 18px;
          color: var(--ink-muted);
          transition: color 0.2s ease, transform 0.2s ease;
        }

        .project__link:hover {
          color: var(--signal);
          transform: translate(2px, -2px);
        }

        .project__title {
          font-family: var(--font-sans);
          font-size: 20px;
          font-weight: 600;
          color: var(--ink);
          margin-bottom: 12px;
          line-height: 1.3;
        }

        .project--compact .project__title {
          font-size: 16px;
          margin-bottom: 8px;
        }

        .project__description {
          font-size: 15px;
          line-height: 1.6;
          color: var(--ink-muted);
          margin-bottom: 16px;
        }

        .project--compact .project__description {
          font-size: 14px;
          margin-bottom: 12px;
        }

        .project__outcome {
          font-size: 14px;
          color: var(--current-ink);
          margin-bottom: 16px;
          padding: 12px;
          background: var(--current-soft);
          border-radius: 6px;
        }

        .project__tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .projects__grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 16px;
          margin-top: 24px;
        }

        .products__more {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 24px;
          padding-top: 24px;
          border-top: 1px dashed var(--line);
        }

        /* HACKATHONS */
        .hackathons {
          margin-top: 48px;
          padding-top: 48px;
          border-top: 1px solid var(--line);
        }

        .hackathons__title {
          font-family: var(--font-sans);
          font-size: 14px;
          font-weight: 600;
          color: var(--ink);
          margin-bottom: 24px;
        }

        .hackathons .project {
          margin-bottom: 16px;
        }

        /* ================================================================
           TIMELINE
           ================================================================ */
        .timeline {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        .timeline__item {
          display: grid;
          grid-template-columns: 140px 1fr;
          gap: 24px;
          position: relative;
        }

        .timeline__period {
          font-family: var(--font-mono);
          font-size: 12px;
          font-weight: 500;
          color: var(--ink-muted);
          padding-top: 4px;
        }

        .timeline__content {
          position: relative;
          padding-left: 24px;
        }

        .timeline__content::before {
          content: '';
          position: absolute;
          left: 0;
          top: 8px;
          width: 8px;
          height: 8px;
          background: var(--surface);
          border: 2px solid var(--line-strong);
          border-radius: 2px;
        }

        .timeline__item--current .timeline__content::before {
          background: var(--signal);
          border-color: var(--signal);
          box-shadow: 0 0 0 4px var(--signal-soft);
        }

        .timeline__content::after {
          content: '';
          position: absolute;
          left: 3px;
          top: 20px;
          bottom: -32px;
          width: 2px;
          background: var(--line);
        }

        .timeline__item:last-child .timeline__content::after {
          display: none;
        }

        .timeline__role {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 18px;
          font-weight: 600;
          color: var(--ink);
          margin-bottom: 4px;
        }

        .timeline__org {
          font-size: 14px;
          color: var(--ink-muted);
          margin-bottom: 12px;
        }

        .timeline__description {
          font-size: 15px;
          line-height: 1.6;
          color: var(--ink-muted);
        }

        @media (max-width: 640px) {
          .timeline__item {
            grid-template-columns: 1fr;
            gap: 8px;
          }

          .timeline__content {
            padding-left: 0;
          }

          .timeline__content::before,
          .timeline__content::after {
            display: none;
          }
        }

        /* EDUCATION */
        .education {
          margin-top: 48px;
          padding-top: 48px;
          border-top: 1px solid var(--line);
        }

        .education__title {
          font-family: var(--font-sans);
          font-size: 14px;
          font-weight: 600;
          color: var(--ink);
          margin-bottom: 16px;
        }

        .education__item {
          font-size: 14px;
          color: var(--ink-muted);
          margin-bottom: 8px;
        }

        /* ================================================================
           CONTACT SECTION
           ================================================================ */
        .contact__text {
          font-size: 18px;
          line-height: 1.6;
          color: var(--ink-muted);
          margin-bottom: 32px;
          max-width: 480px;
        }

        .contact__actions {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          margin-bottom: 32px;
        }

        .contact__links {
          display: flex;
          gap: 24px;
          font-family: var(--font-mono);
          font-size: 13px;
          font-weight: 500;
        }

        .contact__links a {
          color: var(--ink-muted);
          text-decoration: underline;
          text-underline-offset: 4px;
        }

        .contact__links a:hover {
          color: var(--signal);
        }

        /* ================================================================
           FOOTER
           ================================================================ */
        .footer {
          padding-top: 48px;
          border-top: 1px solid var(--line);
          font-size: 13px;
          color: var(--ink-faint);
        }

        .footer a {
          color: var(--ink-muted);
          text-decoration: underline;
          text-underline-offset: 3px;
        }

        .footer a:hover {
          color: var(--signal);
        }

        /* ================================================================
           THEME TOGGLE
           ================================================================ */
        .theme-toggle {
          position: fixed;
          bottom: 24px;
          right: 24px;
          width: 48px;
          height: 48px;
          display: grid;
          place-items: center;
          background: var(--surface);
          border: 1px solid var(--line);
          border-radius: 50%;
          cursor: pointer;
          font-size: 20px;
          transition: border-color 0.2s ease, transform 0.2s ease;
          z-index: 100;
        }

        .theme-toggle:hover {
          border-color: var(--ink-muted);
          transform: scale(1.05);
        }

        /* ================================================================
           RESPONSIVE - Mobile Hero for sidebar content
           ================================================================ */
        @media (max-width: 1024px) {
          .content::before {
            content: '';
            display: block;
          }

          .section:first-of-type {
            padding-top: 0;
          }

          /* Mobile hero */
          .content > .section:first-of-type::before {
            content: 'Sathish Kumar V';
            display: block;
            font-family: var(--font-display);
            font-size: 40px;
            font-weight: 400;
            line-height: 1.1;
            color: var(--ink);
            margin-bottom: 8px;
          }

          .content > .section:first-of-type::after {
            content: 'AI Architect & Team Lead';
            display: block;
            font-size: 18px;
            font-weight: 500;
            color: var(--ink);
            margin-bottom: 24px;
          }
        }

        /* ================================================================
           SMOOTH SCROLL & FOCUS STATES
           ================================================================ */
        :focus-visible {
          outline: 2px solid var(--signal);
          outline-offset: 3px;
        }

        /* Selection */
        ::selection {
          background: var(--signal-soft);
          color: var(--ink);
        }
      `}</style>
    </div>
  );
}

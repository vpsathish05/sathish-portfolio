"use client";

import { useState, useEffect } from "react";
import { Button, Tag } from "../../design-system/components/signal.js";

/* ========================================================================
   SATHISH KUMAR V — AI ARCHITECT PORTFOLIO
   Design: 2026 UK/US minimal, metric-first, 3-project focus
   Based on: Brittany Chiang layout + recruiter research insights
   ======================================================================== */

export default function Portfolio() {
  const [theme, setTheme] = useState<"night" | "paper">("night");
  const [activeSection, setActiveSection] = useState("about");

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
      <main className="main">
        {/* ================================================================
            LEFT COLUMN - Fixed sidebar
            ================================================================ */}
        <aside className="sidebar">
          <div className="sidebar__content">
            {/* Hero - Metric First */}
            <div className="sidebar__hero">
              <h1 className="sidebar__name">Sathish Kumar V</h1>
              <h2 className="sidebar__title">AI Architect & Team Lead</h2>
              
              {/* The Hook - Single Most Impressive Metric */}
              <p className="sidebar__hook">
                I turned a 260-hour contract review into 26 minutes. 
                That&apos;s the kind of AI I build.
              </p>

              {/* Key Metrics - Scannable in 6 seconds */}
              <div className="sidebar__metrics">
                <div className="sidebar__metric">
                  <span className="sidebar__metric-value">99%</span>
                  <span className="sidebar__metric-label">time saved</span>
                </div>
                <div className="sidebar__metric">
                  <span className="sidebar__metric-value">7</span>
                  <span className="sidebar__metric-label">engineers led</span>
                </div>
                <div className="sidebar__metric">
                  <span className="sidebar__metric-value">5</span>
                  <span className="sidebar__metric-label">deals won</span>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <nav className="sidebar__nav">
              {[
                { id: "about", label: "About" },
                { id: "work", label: "Work" },
                { id: "experience", label: "Experience" },
                { id: "contact", label: "Contact" },
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

            {/* Social Links */}
            <div className="sidebar__social">
              <a href="https://github.com/vpsathish05" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/sathish-kumar-310976153/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://medium.com/@vpsathish05" target="_blank" rel="noopener noreferrer" aria-label="Medium">
                <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                  <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                </svg>
              </a>
            </div>
          </div>
        </aside>

        {/* ================================================================
            RIGHT COLUMN - Scrolling content
            ================================================================ */}
        <div className="content">
          
          {/* ============================================================
              ABOUT SECTION
              ============================================================ */}
          <section id="about" className="section">
            <p className="about__lead">
              I&apos;m an AI Team Lead in Chennai, building production AI systems for enterprise clients. 
              I lead a team of 7, own 15 internal AI products, and architect client solutions from pitch to deployment.
            </p>
            
            <p className="about__text">
              My obsession is making LLMs <em>useful</em>, not impressive. RAG pipelines that actually 
              answer questions. Document extraction that handles the messy edge cases. AI platforms 
              that 200 consultants use daily because they&apos;re better than ChatGPT for their work.
            </p>

            <p className="about__text">
              I&apos;m exploring <strong>remote roles with UK or US companies</strong>. I want to keep 
              doing what I do best: shipping AI that runs in production. Available with 60-90 day notice, 
              flexible on overlap hours.
            </p>

            {/* Skills - Depth over breadth */}
            <div className="skills">
              <div className="skills__group">
                <span className="skills__label">Primary</span>
                <span className="skills__detail">
                  LangGraph (4 production agents), MCP (authored custom servers), RAG architectures
                </span>
              </div>
              <div className="skills__group">
                <span className="skills__label">Fluent</span>
                <span className="skills__detail">
                  Azure OpenAI, Claude, PaddleOCR, FastAPI, React, PostgreSQL
                </span>
              </div>
              <div className="skills__group">
                <span className="skills__label">Working</span>
                <span className="skills__detail">
                  AWS Bedrock, Terraform, dbt, Microsoft Fabric, Docker
                </span>
              </div>
            </div>
          </section>

          {/* ============================================================
              WORK SECTION - 3 Project Focus
              ============================================================ */}
          <section id="work" className="section">
            <h2 className="section__title">Work</h2>

            {/* ========== HERO PROJECT: Contract Intelligence ========== */}
            <article className="project project--hero">
              <div className="project__label">
                <span className="project__type">Featured Project</span>
                <a 
                  href="https://medium.com/@vpsathish05/contract-intelligence-at-scale-how-ocr-llm-turned-260-hours-into-26-minutes-00dc6aab26a0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project__link"
                >
                  Read Case Study ↗
                </a>
              </div>
              
              <h3 className="project__title">Contract Intelligence at Scale</h3>
              
              <div className="project__story">
                <p>
                  <strong>The problem:</strong> An enterprise client was drowning in 200-page contracts. 
                  Pricing buried in nested tables, multi-currency values, handwritten annotations. 
                  Their team spent 260 hours per batch extracting data manually. Three OCR vendors 
                  had already failed.
                </p>
                <p>
                  <strong>What I built:</strong> A multi-stage pipeline using PaddleOCR for table detection 
                  and Qwen 7B for field extraction. The key insight: don&apos;t aim for 100% automation. 
                  Route low-confidence results to a human review queue instead of guessing.
                </p>
                <p>
                  <strong>The result:</strong> 26 minutes instead of 260 hours. 85% straight-through 
                  processing with no human touch. $0.002 per page versus $0.03 with GPT-4 Vision. 
                  Started as a 4-week proof of concept, became a 6-month engagement because it worked.
                </p>
              </div>

              <div className="project__metrics">
                <div className="project__metric">
                  <span className="project__metric-value">99%</span>
                  <span className="project__metric-label">time reduction</span>
                </div>
                <div className="project__metric">
                  <span className="project__metric-value">85%</span>
                  <span className="project__metric-label">automation</span>
                </div>
                <div className="project__metric">
                  <span className="project__metric-value">15×</span>
                  <span className="project__metric-label">cheaper</span>
                </div>
              </div>

              <div className="project__tech">
                <Tag>PaddleOCR</Tag>
                <Tag>Qwen 7B</Tag>
                <Tag>FastAPI</Tag>
                <Tag>Human-in-loop</Tag>
                <Tag>Salesforce</Tag>
              </div>
            </article>

            {/* ========== PROJECT 2: PE Context Layer ========== */}
            <article className="project">
              <div className="project__label">
                <span className="project__type">Enterprise AI</span>
              </div>
              
              <h3 className="project__title">AI Context Layer for Private Equity</h3>
              
              <div className="project__story">
                <p>
                  <strong>The problem:</strong> Investment teams spent days preparing for committee meetings. 
                  Information scattered across deal rooms, financial models, and research reports. 
                  They needed an AI that understood their portfolio context, not a generic chatbot.
                </p>
                <p>
                  <strong>What I built:</strong> A governed context layer using Claude Enterprise with 
                  custom MCP tools for secure data access. The AI cites sources, flags uncertainty, 
                  and challenges assumptions—exactly what investment professionals need.
                </p>
                <p>
                  <strong>The result:</strong> Authored the RFP response, proposal, and architecture docs 
                  that won the deal. Now in active engagement building the production system.
                </p>
              </div>

              <div className="project__tech">
                <Tag>Claude Enterprise</Tag>
                <Tag>MCP</Tag>
                <Tag>LangGraph</Tag>
                <Tag>Enterprise Search</Tag>
              </div>
            </article>

            {/* ========== PROJECT 3: Enterprise AI Platform ========== */}
            <article className="project">
              <div className="project__label">
                <span className="project__type">Internal Product</span>
              </div>
              
              <h3 className="project__title">Enterprise AI Assistant (Product Owner)</h3>
              
              <div className="project__story">
                <p>
                  <strong>The problem:</strong> 200 consultants were pasting client data into ChatGPT. 
                  Compliance nightmare. Legal was panicking. But people used it because it was useful.
                </p>
                <p>
                  <strong>What I built:</strong> Our internal ChatGPT alternative. Connects to SharePoint, 
                  Power BI, DevOps, CRM. Multi-model support, workspace isolation, audit trails. 
                  I&apos;m the product owner—roadmap, priorities, and technical architecture.
                </p>
                <p>
                  <strong>The result:</strong> 200+ daily active users. Presented to executive leadership 
                  with ongoing investment in the roadmap. It&apos;s now how our consultants work.
                </p>
              </div>

              <div className="project__tech">
                <Tag>React</Tag>
                <Tag>Azure OpenAI</Tag>
                <Tag>MCP</Tag>
                <Tag>PostgreSQL</Tag>
                <Tag>Redis</Tag>
              </div>
            </article>

            {/* ========== MORE WORK - Simple List ========== */}
            <div className="more-work">
              <h4 className="more-work__title">More Work</h4>
              <ul className="more-work__list">
                <li>
                  <span className="more-work__name">BOM Automation</span>
                  <span className="more-work__desc">— OCR + LLM extraction for manufacturing ERP, 95% field accuracy</span>
                </li>
                <li>
                  <span className="more-work__name">Natural Language BI</span>
                  <span className="more-work__desc">— Semantic layer making Power BI queryable via Copilot Studio</span>
                </li>
                <li>
                  <span className="more-work__name">Research Chatbot</span>
                  <span className="more-work__desc">— RAG over PubMed/Google Scholar for healthcare client, 1K+ daily queries</span>
                </li>
                <li>
                  <span className="more-work__name">Fabric MCP Server</span>
                  <span className="more-work__desc">— Custom MCP server extending Microsoft Fabric capabilities</span>
                </li>
                <li>
                  <span className="more-work__name">AI Playbook</span>
                  <span className="more-work__desc">— Internal knowledge base for RAG, agents, and production AI patterns</span>
                </li>
              </ul>
            </div>
          </section>

          {/* ============================================================
              EXPERIENCE SECTION
              ============================================================ */}
          <section id="experience" className="section">
            <h2 className="section__title">Experience</h2>

            <div className="timeline">
              {/* Current Role */}
              <article className="timeline__item timeline__item--current">
                <div className="timeline__header">
                  <h3 className="timeline__role">AI Team Lead & Solutions Consultant</h3>
                  <span className="timeline__period">2025 — Present</span>
                </div>
                <p className="timeline__org">Consulting Firm · Chennai</p>
                <p className="timeline__desc">
                  Lead AI COE cluster of 7 engineers. Product owner for enterprise AI assistant 
                  serving 200+ employees. Architect and pitch client solutions—won 5 deals this year 
                  from solutions I designed. If we win, I build it.
                </p>
                <div className="timeline__tags">
                  <Tag tone="signal">LangGraph</Tag>
                  <Tag tone="signal">MCP</Tag>
                  <Tag>Azure AI Foundry</Tag>
                  <Tag>AWS Bedrock</Tag>
                </div>
              </article>

              {/* Previous Role */}
              <article className="timeline__item">
                <div className="timeline__header">
                  <h3 className="timeline__role">Solution Enabler</h3>
                  <span className="timeline__period">2024 — 2025</span>
                </div>
                <p className="timeline__org">Consulting Firm · Chennai</p>
                <p className="timeline__desc">
                  Product lead for private AI platform. Led Contract Intelligence project (the 260h → 26min one). 
                  Architected AI context layers for PE firms. Built custom MCP servers for Microsoft Fabric.
                </p>
              </article>

              {/* Foundation Years - Combined */}
              <article className="timeline__item">
                <div className="timeline__header">
                  <h3 className="timeline__role">Software & Data Engineering</h3>
                  <span className="timeline__period">2017 — 2024</span>
                </div>
                <p className="timeline__org">Multiple Companies · Chennai</p>
                <p className="timeline__desc">
                  Built the foundation: C#/.NET enterprise apps, then data pipelines with dbt/Azure Data Factory/Redshift. 
                  Shipped 5+ production apps, processed 5M+ records daily. The experience that taught me 
                  AI without clean data is expensive guessing.
                </p>
              </article>
            </div>

            {/* Education - Minimal */}
            <div className="education">
              <p><strong>MCA</strong> · University of Madras · 2020</p>
              <p><strong>BCA</strong> · Jairam Arts and Science College · 2017</p>
            </div>
          </section>

          {/* ============================================================
              CONTACT SECTION
              ============================================================ */}
          <section id="contact" className="section section--contact">
            <h2 className="section__title">Get in Touch</h2>

            <p className="contact__text">
              I&apos;m looking for remote roles with UK or US companies. If you need someone who 
              ships AI systems that actually work in production—not just demo well—let&apos;s talk.
            </p>

            <p className="contact__availability">
              <strong>Availability:</strong> 60-90 day notice · Flexible on overlap hours
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
                LinkedIn
              </a>
              <a href="https://github.com/vpsathish05" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href="https://medium.com/@vpsathish05" target="_blank" rel="noopener noreferrer">
                Medium
              </a>
            </div>
          </section>

        </div>
      </main>

      {/* Theme Toggle */}
      <button 
        className="theme-toggle"
        onClick={() => setTheme(theme === "night" ? "paper" : "night")}
        aria-label={`Switch to ${theme === "night" ? "light" : "dark"} mode`}
      >
        {theme === "night" ? "☀" : "☾"}
      </button>

      <style jsx global>{`
        /* ================================================================
           BASE
           ================================================================ */
        *, *::before, *::after {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        html {
          scroll-behavior: smooth;
          scroll-padding-top: 80px;
        }

        body {
          background: var(--bg);
          color: var(--ink);
          font-family: var(--font-sans);
          font-size: 16px;
          line-height: 1.7;
          -webkit-font-smoothing: antialiased;
        }

        ::selection {
          background: var(--signal-soft);
          color: var(--ink);
        }

        a {
          color: inherit;
          text-decoration: none;
          transition: color 0.15s ease;
        }

        strong {
          color: var(--ink);
          font-weight: 600;
        }

        em {
          color: var(--signal-ink);
          font-style: normal;
        }

        /* ================================================================
           LAYOUT
           ================================================================ */
        .portfolio {
          min-height: 100vh;
        }

        .main {
          display: grid;
          grid-template-columns: 1fr 1fr;
          max-width: 1400px;
          margin: 0 auto;
          gap: 16px;
        }

        @media (max-width: 1024px) {
          .main {
            grid-template-columns: 1fr;
          }
        }

        /* ================================================================
           SIDEBAR
           ================================================================ */
        .sidebar {
          position: sticky;
          top: 0;
          height: 100vh;
          padding: 80px 48px 48px 64px;
          display: flex;
          flex-direction: column;
        }

        .sidebar__content {
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .sidebar__hero {
          margin-bottom: 48px;
        }

        .sidebar__name {
          font-family: var(--font-sans);
          font-size: 42px;
          font-weight: 700;
          letter-spacing: -0.03em;
          line-height: 1.1;
          color: var(--ink);
          margin-bottom: 8px;
        }

        .sidebar__title {
          font-size: 18px;
          font-weight: 500;
          color: var(--ink-muted);
          margin-bottom: 20px;
        }

        .sidebar__hook {
          font-size: 17px;
          line-height: 1.5;
          color: var(--ink-muted);
          max-width: 340px;
        }

        /* Sidebar Metrics */
        .sidebar__metrics {
          display: flex;
          gap: 24px;
          margin-top: 24px;
        }

        .sidebar__metric {
          display: flex;
          flex-direction: column;
        }

        .sidebar__metric-value {
          font-family: var(--font-mono);
          font-size: 28px;
          font-weight: 600;
          color: var(--signal-ink);
          line-height: 1;
        }

        .sidebar__metric-label {
          font-size: 12px;
          color: var(--ink-faint);
          margin-top: 4px;
        }

        /* Sidebar Navigation */
        .sidebar__nav {
          display: flex;
          flex-direction: column;
          gap: 4px;
          margin-bottom: auto;
        }

        .sidebar__link {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 10px 0;
          font-family: var(--font-mono);
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: var(--ink-muted);
          transition: color 0.15s ease;
        }

        .sidebar__link:hover {
          color: var(--ink);
        }

        .sidebar__link.active {
          color: var(--ink);
        }

        .sidebar__indicator {
          width: 32px;
          height: 1px;
          background: var(--line-strong);
          transition: width 0.2s ease, background 0.15s ease;
        }

        .sidebar__link:hover .sidebar__indicator,
        .sidebar__link.active .sidebar__indicator {
          width: 64px;
          background: var(--ink);
        }

        /* Social */
        .sidebar__social {
          display: flex;
          gap: 16px;
          padding-top: 24px;
        }

        .sidebar__social a {
          color: var(--ink-muted);
          transition: color 0.15s ease;
        }

        .sidebar__social a:hover {
          color: var(--signal);
        }

        @media (max-width: 1024px) {
          .sidebar {
            position: relative;
            height: auto;
            padding: 48px 24px;
          }

          .sidebar__metrics {
            gap: 20px;
          }

          .sidebar__nav {
            display: none;
          }
        }

        /* ================================================================
           CONTENT
           ================================================================ */
        .content {
          padding: 80px 64px 80px 32px;
        }

        @media (max-width: 1024px) {
          .content {
            padding: 0 24px 64px;
          }
        }

        /* ================================================================
           SECTIONS
           ================================================================ */
        .section {
          margin-bottom: 120px;
        }

        .section:last-of-type {
          margin-bottom: 64px;
        }

        .section__title {
          font-family: var(--font-mono);
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--ink);
          margin-bottom: 32px;
          padding-bottom: 12px;
          border-bottom: 1px solid var(--line);
        }

        /* ================================================================
           ABOUT SECTION
           ================================================================ */
        .about__lead {
          font-size: 18px;
          line-height: 1.6;
          color: var(--ink);
          margin-bottom: 20px;
        }

        .about__text {
          font-size: 16px;
          line-height: 1.7;
          color: var(--ink-muted);
          margin-bottom: 16px;
        }

        /* Skills */
        .skills {
          margin-top: 40px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .skills__group {
          display: flex;
          gap: 12px;
          font-size: 14px;
          line-height: 1.6;
        }

        .skills__label {
          font-weight: 600;
          color: var(--signal-ink);
          min-width: 70px;
          flex-shrink: 0;
        }

        .skills__detail {
          color: var(--ink-muted);
        }

        /* ================================================================
           PROJECTS
           ================================================================ */
        .project {
          padding: 28px;
          background: var(--surface);
          border: 1px solid var(--line);
          border-radius: 12px;
          margin-bottom: 20px;
          transition: border-color 0.2s ease;
        }

        .project:hover {
          border-color: var(--line-strong);
        }

        .project--hero {
          background: var(--surface-raised);
          border-left: 3px solid var(--signal);
        }

        .project__label {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }

        .project__type {
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--signal-ink);
        }

        .project__link {
          font-family: var(--font-mono);
          font-size: 12px;
          color: var(--ink-muted);
          transition: color 0.15s ease;
        }

        .project__link:hover {
          color: var(--signal);
        }

        .project__title {
          font-size: 22px;
          font-weight: 600;
          color: var(--ink);
          margin-bottom: 16px;
          line-height: 1.3;
        }

        .project__story {
          margin-bottom: 20px;
        }

        .project__story p {
          font-size: 15px;
          line-height: 1.65;
          color: var(--ink-muted);
          margin-bottom: 12px;
        }

        .project__story p:last-child {
          margin-bottom: 0;
        }

        .project__story strong {
          color: var(--ink);
          font-weight: 500;
        }

        /* Project Metrics */
        .project__metrics {
          display: flex;
          gap: 32px;
          margin: 24px 0;
          padding: 16px 0;
          border-top: 1px dashed var(--line);
          border-bottom: 1px dashed var(--line);
        }

        .project__metric {
          display: flex;
          flex-direction: column;
        }

        .project__metric-value {
          font-family: var(--font-mono);
          font-size: 24px;
          font-weight: 600;
          color: var(--current-ink);
          line-height: 1;
        }

        .project__metric-label {
          font-size: 12px;
          color: var(--ink-faint);
          margin-top: 4px;
        }

        .project__tech {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 16px;
        }

        /* ================================================================
           MORE WORK
           ================================================================ */
        .more-work {
          margin-top: 48px;
          padding-top: 32px;
          border-top: 1px solid var(--line);
        }

        .more-work__title {
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--ink-muted);
          margin-bottom: 16px;
        }

        .more-work__list {
          list-style: none;
        }

        .more-work__list li {
          padding: 10px 0;
          font-size: 14px;
          line-height: 1.5;
          border-bottom: 1px solid var(--line);
        }

        .more-work__list li:last-child {
          border-bottom: none;
        }

        .more-work__name {
          font-weight: 500;
          color: var(--ink);
        }

        .more-work__desc {
          color: var(--ink-muted);
        }

        /* ================================================================
           TIMELINE
           ================================================================ */
        .timeline {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .timeline__item {
          padding: 24px;
          background: var(--surface);
          border: 1px solid var(--line);
          border-radius: 12px;
          transition: border-color 0.2s ease;
        }

        .timeline__item:hover {
          border-color: var(--line-strong);
        }

        .timeline__item--current {
          border-left: 3px solid var(--signal);
        }

        .timeline__header {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          margin-bottom: 4px;
          flex-wrap: wrap;
          gap: 8px;
        }

        .timeline__role {
          font-size: 17px;
          font-weight: 600;
          color: var(--ink);
        }

        .timeline__period {
          font-family: var(--font-mono);
          font-size: 12px;
          color: var(--ink-muted);
        }

        .timeline__org {
          font-size: 14px;
          color: var(--ink-muted);
          margin-bottom: 12px;
        }

        .timeline__desc {
          font-size: 15px;
          line-height: 1.6;
          color: var(--ink-muted);
        }

        .timeline__tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-top: 16px;
        }

        /* Education */
        .education {
          margin-top: 40px;
          padding-top: 24px;
          border-top: 1px solid var(--line);
        }

        .education p {
          font-size: 14px;
          color: var(--ink-muted);
          margin-bottom: 4px;
        }

        /* ================================================================
           CONTACT
           ================================================================ */
        .contact__text {
          font-size: 18px;
          line-height: 1.6;
          color: var(--ink-muted);
          margin-bottom: 16px;
          max-width: 480px;
        }

        .contact__availability {
          font-size: 14px;
          color: var(--ink-muted);
          margin-bottom: 32px;
        }

        .contact__actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 32px;
        }

        .contact__links {
          display: flex;
          gap: 24px;
        }

        .contact__links a {
          font-size: 14px;
          color: var(--ink-muted);
          text-decoration: underline;
          text-underline-offset: 4px;
          text-decoration-color: var(--line-strong);
        }

        .contact__links a:hover {
          color: var(--signal);
          text-decoration-color: var(--signal);
        }

        /* ================================================================
           THEME TOGGLE
           ================================================================ */
        .theme-toggle {
          position: fixed;
          bottom: 24px;
          right: 24px;
          width: 44px;
          height: 44px;
          display: grid;
          place-items: center;
          background: var(--surface);
          border: 1px solid var(--line);
          border-radius: 50%;
          cursor: pointer;
          font-size: 18px;
          transition: border-color 0.15s ease;
          z-index: 100;
        }

        .theme-toggle:hover {
          border-color: var(--ink-muted);
        }

        /* ================================================================
           FOCUS STATES
           ================================================================ */
        :focus-visible {
          outline: 2px solid var(--signal);
          outline-offset: 2px;
        }

        /* ================================================================
           RESPONSIVE
           ================================================================ */
        @media (max-width: 640px) {
          .sidebar__name {
            font-size: 32px;
          }

          .sidebar__metrics {
            flex-wrap: wrap;
          }

          .project__metrics {
            flex-wrap: wrap;
            gap: 20px;
          }

          .timeline__header {
            flex-direction: column;
            gap: 4px;
          }
        }
      `}</style>
    </div>
  );
}

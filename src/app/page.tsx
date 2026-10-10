"use client";

import { useState, useEffect } from "react";
import {
  NavBar,
  Hero,
  SectionHeader,
  ProjectCard,
  AgentTrace,
  Terminal,
  Metric,
  Timeline,
  ContactBand,
  Button,
  Tag,
} from "../../design-system/components/signal.js";

export default function Portfolio() {
  const [theme, setTheme] = useState<"night" | "paper">("night");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="shell">
      {/* Navigation */}
      <NavBar
        name="Sathish Kumar V"
        initials="SK"
        homeHref="#"
        links={[
          { label: "Impact", href: "#impact", active: true },
          { label: "Work", href: "#work" },
          { label: "Products", href: "#products" },
          { label: "Path", href: "#path" },
          { label: "Contact", href: "#contact" },
        ]}
        status="Open to UK/US remote"
        cta={{ label: "Let&apos;s talk", href: "#contact" }}
      />

      {/* Hero Section */}
      <Hero
        eyebrow="AI TEAM LEAD · 7 ENGINEERS · CHENNAI → UK/US REMOTE"
        name="I ship AI that"
        accent="runs in production."
        statement={
          <>
            Not demos. Not notebooks. Production systems processing thousands of documents, 
            answering real questions, connecting to real enterprise data. I lead a team of 7, 
            own 15 internal AI products, and architect client solutions from pitch to deployment. 
            When we win the deal, I build it.
          </>
        }
        actions={
          <>
            <Button size="lg" href="#work">
              See the systems
            </Button>
            <Button size="lg" variant="secondary" href="/sathish-portfolio/resume/output/Sathish_Kumar_V_Resume_v1.pdf">
              Resume (PDF)
            </Button>
          </>
        }
        graph={{
          core: "Ship",
          nodes: ["Docs", "RAG", "Agents", "MCP", "Value"],
          hot: [0, 4],
        }}
      />

      {/* Impact Numbers - Staff Engineer Style */}
      <section id="impact" className="stack">
        <SectionHeader
          index="01"
          label="Impact"
          title="What I&apos;ve"
          accent="actually shipped."
          lede="Numbers from production systems, not benchmarks. Every metric here is something I can walk you through in an interview."
        />

        <div className="sg-metrics sg-metrics-hero">
          <Metric
            value="13"
            label="Client projects"
            note="Contract intel, PE platforms, DTaaS"
          />
          <Metric
            value="15"
            label="Internal products"
            note="AI platform, agents, MCP tools"
          />
          <Metric
            value="7"
            label="Engineers led"
            note="Hiring, mentoring, delivery"
          />
          <Metric
            value="5"
            label="Deals won"
            note="Solutions I architected and pitched"
          />
        </div>

        <div className="sg-metrics">
          <Metric
            value="99%"
            label="Time reduction"
            note="Contract extraction: 260h → 26min"
          />
          <Metric
            value="85%"
            label="Straight-through processing"
            note="No human intervention needed"
          />
          <Metric
            value="$0.002"
            label="Per-page cost"
            note="vs $0.03 with GPT-4 Vision"
          />
          <Metric
            value="6"
            unit="mo"
            label="PoC → Production"
            note="Started as 4-week pilot"
          />
        </div>
      </section>

      {/* Client Work Section */}
      <section id="work" className="stack">
        <SectionHeader
          index="02"
          label="Client delivery"
          title="Enterprise AI"
          accent="that shipped."
          lede="I architect and deliver AI systems for consulting clients — PE firms, SaaS companies, manufacturing. I do pre-sales, solution design, and hands-on build."
        />

        <div className="sg-grid-2">
          {/* Featured Case Study */}
          <ProjectCard
            featured
            index="/01"
            kind="DOCUMENT INTELLIGENCE"
            title="Contract extraction at scale"
            summary="A company drowning in 200-page contracts, pricing buried in nested tables. Their team spent 260 hours per batch. Previous OCR attempts failed on complex layouts. I built the pipeline that does it in 26 minutes."
            outcome="85% straight-through processing. Legal team does strategy now, not data entry. Started as 4-week PoC, became 6-month engagement because it worked."
            tags={["PaddleOCR", "Qwen 7B", "Human-in-loop", "Salesforce"]}
            href="https://medium.com/@vpsathish05/contract-intelligence-at-scale-how-ocr-llm-turned-260-hours-into-26-minutes-00dc6aab26a0"
          />

          <div style={{ display: "grid", gap: 24, alignContent: "start" }}>
            <ProjectCard
              index="/02"
              kind="PE INVESTMENT PLATFORM"
              title="AI context layer for PE"
              summary="Investment team spent days preparing for committee meetings. Information scattered across deal rooms, models, reports. Built an AI layer that knows their portfolio context, cites sources, challenges assumptions."
              tags={["Claude Enterprise", "MCP tools", "Audit trail"]}
            />

            <ProjectCard
              index="/03"
              kind="ENTERPRISE AI PLATFORM"
              title="Private AI for 200 consultants"
              summary="Consultants using ChatGPT with client data — compliance nightmare. Built a governed AI platform connecting SharePoint, Power BI, CRM. Same capabilities, zero data leaving the perimeter."
              tags={["Azure OpenAI", "Knowledge integration", "Governance"]}
            />
          </div>
        </div>

        {/* Additional projects row */}
        <div className="sg-grid-3">
          <ProjectCard
            index="/04"
            kind="MANUFACTURING"
            title="BOM automation"
            summary="Manual entry from emails, PDFs, images into ERP. Built ingestion pipeline with OCR, LLM extraction, validation. Target: 95% accuracy on required fields."
            tags={["Azure AI Foundry", "SharePoint", "ERP integration"]}
          />
          <ProjectCard
            index="/05"
            kind="ANALYTICS"
            title="Natural language BI"
            summary="Business users couldn&apos;t query their own data without SQL. Built semantic layer making Power BI models AI-queryable via Copilot Studio."
            tags={["Fabric", "Semantic models", "MCP"]}
          />
          <ProjectCard
            index="/06"
            kind="OPERATIONAL DATA"
            title="DTaaS platform"
            summary="Parking operations needed real-time insight into PCNs, site performance, degradation patterns. Built data extraction and dashboards from daily operational data."
            tags={["Data pipelines", "Power BI", "Azure DevOps"]}
          />
        </div>
      </section>

      {/* Deep Case Study - The Technical Proof */}
      <section className="stack">
        <SectionHeader
          index="03"
          label="Deep dive"
          title="How I think"
          accent="about trade-offs."
          lede="The interesting part isn&apos;t the tech — it&apos;s choosing the right tool for the constraint. Here&apos;s one decision that mattered."
        />

        <div className="proof">
          <AgentTrace
            title="Contract extraction · architecture decision"
            meta="Why PaddleOCR + small LLM, not GPT-4 Vision"
            steps={[
              { kind: "plan", label: "Requirement: Extract pricing from 200-page contracts", detail: "Nested tables, merged cells, multi-currency. Previous OCR had failed.", ms: 0 },
              { kind: "model", label: "Attempt 1: GPT-4 Vision", detail: "Good accuracy. $0.03/page × 200 pages × 1000 contracts = $6,000/batch. Budget rejected.", ms: 0 },
              { kind: "error", label: "Attempt 2: Commercial OCR vendors", detail: "Tested 3 platforms. All failed on nested tables with merged cells.", ms: 0 },
              { kind: "mcp", label: "Solution: PaddleOCR for table detection", detail: "Open source, handles complex layouts. Runs on GPU we already had.", ms: 0 },
              { kind: "model", label: "Solution: Qwen 7B for field extraction", detail: "Small enough to self-host. Accurate enough for structured fields. $0.002/page.", ms: 0 },
              { kind: "human", label: "Design choice: Confidence thresholds", detail: "Below 85% confidence → human review queue. 100% automation wasn&apos;t the goal.", ms: 0 },
              { kind: "result", label: "Outcome", detail: "15x cheaper than GPT-4 approach. Client owns infrastructure. Scales to any volume.", ms: 0 },
            ]}
            status="complete"
          />

          <Terminal
            title="What broke in production"
            shell="lessons-learned"
            lines={[
              { text: "# Things that didn't work the first time", tone: "warn" },
              "",
              "1. Multi-currency tables",
              "   → LLM hallucinated exchange rates",
              "   → Fix: Explicit currency detection step",
              "",
              "2. Handwritten annotations",
              "   → OCR confidence dropped to 40%",
              "   → Fix: Route to human queue, don't guess",
              "",
              "3. Scanned at angles",
              "   → Table detection failed completely",
              "   → Fix: Deskew preprocessing",
              "",
              "4. Nested sub-tables",
              "   → Structure flattened incorrectly",
              "   → Fix: Hierarchical parsing pass",
              "",
              { text: "# What I learned", tone: "ok" },
              "Production AI is 20% model, 80% edge cases.",
              "The fix that worked: treat low-confidence as",
              "a feature, not a failure. Route to humans.",
            ]}
          />
        </div>
      </section>

      {/* Internal Products Section */}
      <section id="products" className="stack">
        <SectionHeader
          index="04"
          label="Products I own"
          title="Internal AI"
          accent="platform."
          lede="I don&apos;t just build client projects. I own the AI products my company uses internally — the platform, the agents, the accelerators."
        />

        <div className="sg-grid-3">
          <ProjectCard
            index="/01"
            kind="ENTERPRISE AI PLATFORM"
            title="Enterprise AI Assistant"
            summary="Our internal ChatGPT alternative. Secure enterprise AI assistant connecting to SharePoint, Power BI, project data. Multi-model, multi-workspace. I&apos;m the product owner."
            tags={["React", "Azure OpenAI", "MCP", "PostgreSQL"]}
          />
          <ProjectCard
            index="/02"
            kind="AI BACKEND"
            title="AI Backend Platform"
            summary="The engine under our chat platform. Central AI platform with multi-LLM support, knowledge integration, document intelligence. I own the technical architecture."
            tags={["Azure", "Multi-model", "API platform"]}
          />
          <ProjectCard
            index="/03"
            kind="CONSULTING AGENT"
            title="Consulting Agent"
            summary="AI assistant for project teams. Connects to Teams, SharePoint, DevOps, HubSpot. Memory-driven, governance-first. I lead product and delivery."
            tags={["LangGraph", "FastAPI", "MCP", "Redis"]}
          />
        </div>

        <div className="sg-grid-3">
          <ProjectCard
            index="/04"
            kind="MCP SERVER"
            title="Fabric MCP"
            summary="Custom MCP server over Microsoft Fabric. Adds Excel export, dashboard generation beyond Fabric Data Agent&apos;s limits. I built the prototype."
            tags={["MCP", "Fabric", "Claude"]}
          />
          <ProjectCard
            index="/05"
            kind="ACCELERATOR"
            title="Power BI Semantic Assistant"
            summary="Makes Power BI models AI-queryable. Schema curation, descriptions, agent access. Used in client demos. I architected it."
            tags={["Copilot Studio", "Fabric", "MCP"]}
          />
          <ProjectCard
            index="/06"
            kind="KNOWLEDGE BASE"
            title="AI Playbook"
            summary="Developer-focused AI knowledge base. RAG, agents, MCP, prompt engineering, production case studies. I&apos;m the author and owner."
            tags={["MDX", "Architecture", "Best practices"]}
          />
        </div>

        <div style={{ marginTop: "var(--space-4)", display: "flex", gap: "var(--space-3)", flexWrap: "wrap" }}>
          <Tag tone="current">+ AI Proposal Writer</Tag>
          <Tag tone="current">+ Power BI Grading Tool</Tag>
          <Tag tone="current">+ MCP Integrations Accelerator</Tag>
          <Tag tone="current">+ AI Data Dictionary</Tag>
          <Tag tone="current">+ Work IQ Chatbot</Tag>
        </div>
      </section>

      {/* Path Section */}
      <section id="path" className="stack">
        <SectionHeader
          index="05"
          label="Path"
          title="How I"
          accent="got here."
        />

        <Timeline
          items={[
            {
              period: "2026",
              role: "AI Team Lead",
              org: "Consulting firm",
              current: true,
              summary:
                "Lead a cluster of 7 engineers. Own 15 internal AI products. Architect client solutions from pitch to production. Do pre-sales — if we win, I build it. 5 deals won this year from solutions I designed.",
            },
            {
              period: "2024–25",
              role: "AI Engineer → Product Owner",
              org: "Same firm",
              summary:
                "Stopped being a resource, started owning outcomes. Led the contract extraction project that became our biggest reference. Started building JLens and Tenali AI — internal products that now serve the whole company.",
            },
            {
              period: "2022–24",
              role: "Data Engineer",
              org: "Same firm",
              summary:
                "Built data foundations. ETL pipelines, warehouses, dbt models. Learned that AI without clean data is expensive guessing. First client delivery work: Survitec, upReach.",
            },
            {
              period: "2017–22",
              role: "Software Developer",
              org: "Various",
              summary:
                "Started with C# and .NET. Enterprise systems for retail and services. Learned that code exists to solve business problems, not to be clever.",
            },
          ]}
        />

        <div style={{ marginTop: "var(--space-6)" }}>
          <p style={{ 
            fontFamily: "var(--font-sans)", 
            fontSize: "16px", 
            lineHeight: "26px",
            color: "var(--ink-muted)",
            maxWidth: "var(--prose-max)"
          }}>
            <strong style={{ color: "var(--ink)" }}>What I&apos;m looking for:</strong> A remote role with a UK or US company 
            where I can keep doing what I do best — shipping AI systems that actually work. I&apos;m interested in 
            teams building AI products, not AI features. I want to own outcomes, not tickets.
          </p>
        </div>

        {/* Tech Stack - Organized */}
        <div style={{ marginTop: "var(--space-6)" }}>
          <div style={{ marginBottom: "var(--space-3)" }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "12px", color: "var(--ink-muted)", letterSpacing: "0.05em" }}>AI / LLM</span>
          </div>
          <div style={{ display: "flex", gap: "var(--space-2)", flexWrap: "wrap", marginBottom: "var(--space-4)" }}>
            <Tag tone="signal">LangChain</Tag>
            <Tag tone="signal">LangGraph</Tag>
            <Tag tone="signal">Azure OpenAI</Tag>
            <Tag tone="signal">Claude / Anthropic</Tag>
            <Tag tone="signal">MCP</Tag>
            <Tag tone="current">RAG</Tag>
            <Tag tone="current">Agents</Tag>
            <Tag tone="current">PaddleOCR</Tag>
          </div>

          <div style={{ marginBottom: "var(--space-3)" }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "12px", color: "var(--ink-muted)", letterSpacing: "0.05em" }}>PLATFORM / INFRA</span>
          </div>
          <div style={{ display: "flex", gap: "var(--space-2)", flexWrap: "wrap", marginBottom: "var(--space-4)" }}>
            <Tag>Azure AI Foundry</Tag>
            <Tag>Microsoft Fabric</Tag>
            <Tag>AWS Bedrock</Tag>
            <Tag>Docker</Tag>
            <Tag>Terraform</Tag>
            <Tag>GitHub Actions</Tag>
          </div>

          <div style={{ marginBottom: "var(--space-3)" }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "12px", color: "var(--ink-muted)", letterSpacing: "0.05em" }}>LANGUAGES / FRAMEWORKS</span>
          </div>
          <div style={{ display: "flex", gap: "var(--space-2)", flexWrap: "wrap", marginBottom: "var(--space-4)" }}>
            <Tag>Python</Tag>
            <Tag>TypeScript</Tag>
            <Tag>FastAPI</Tag>
            <Tag>React</Tag>
            <Tag>PostgreSQL</Tag>
            <Tag>Redis</Tag>
            <Tag>dbt</Tag>
          </div>

          <div style={{ marginBottom: "var(--space-3)" }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "12px", color: "var(--ink-muted)", letterSpacing: "0.05em" }}>ENTERPRISE</span>
          </div>
          <div style={{ display: "flex", gap: "var(--space-2)", flexWrap: "wrap" }}>
            <Tag>Power BI</Tag>
            <Tag>SharePoint</Tag>
            <Tag>Salesforce</Tag>
            <Tag>Azure DevOps</Tag>
            <Tag>Copilot Studio</Tag>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <div id="contact">
        <ContactBand
          eyebrow="06 — LET&apos;S TALK"
          title="Looking for someone who"
          accent="ships?"
          lede="I&apos;m exploring remote roles with UK or US companies. If you need someone who builds AI systems that run in production — not just demo well — let&apos;s talk."
          email="sathishkumar05@gmail.com"
          links={[
            { label: "LinkedIn", href: "https://www.linkedin.com/in/sathish-kumar-310976153/" },
            { label: "GitHub", href: "https://github.com/vpsathish05" },
            { label: "Medium", href: "https://medium.com/@vpsathish05" },
          ]}
        />
      </div>

      {/* Theme Toggle */}
      <div className="theme-toggle">
        <Button
          variant="secondary"
          size="sm"
          arrow={false}
          onClick={() => setTheme(theme === "night" ? "paper" : "night")}
        >
          {theme === "night" ? "Light" : "Dark"}
        </Button>
      </div>

      <style jsx global>{`
        html, body { margin: 0; background: var(--bg); }
        .shell { 
          max-width: var(--content-max); 
          margin: 0 auto; 
          padding: var(--space-3) var(--space-5) var(--space-9); 
          display: grid; 
          gap: var(--space-9); 
        }
        .shell > .sg-nav { position: sticky; top: var(--space-3); z-index: 10; }
        .stack { display: grid; gap: var(--space-6); }
        .proof { 
          display: grid; 
          grid-template-columns: repeat(auto-fit, minmax(340px, 1fr)); 
          gap: var(--space-5); 
          align-items: start; 
        }
        .sg-metrics-hero {
          padding: var(--space-5);
          background: var(--surface);
          border-radius: var(--radius-md);
          border: 1px solid var(--line);
        }
        .sg-grid-3 {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: var(--space-4);
        }
        .theme-toggle { 
          position: fixed; 
          right: var(--space-5); 
          bottom: var(--space-5); 
          z-index: 20; 
        }
        @media (max-width: 768px) {
          .shell { padding: var(--space-3); gap: var(--space-7); }
          .proof { grid-template-columns: 1fr; }
          .sg-grid-3 { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
}

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
  CapabilityGrid,
  ArchitectureStack,
  ProcessSteps,
  StackMatrix,
  CredentialList,
  WritingList,
  Testimonial,
} from "../../design-system/components/signal.js";

export default function Portfolio() {
  const [theme, setTheme] = useState<"obsidian" | "paper">("obsidian");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="shell">
      {/* 0. Navigation */}
      <NavBar
        name="Sathish Kumar V"
        initials="SK"
        homeHref="#"
        links={[
          { label: "Expertise", href: "#expertise" },
          { label: "Work", href: "#work", active: true },
          { label: "About", href: "#about" },
          { label: "Writing", href: "#writing" },
        ]}
        status="Open to UK/US remote"
        cta={{ label: "Résumé", href: "/sathish-portfolio/resume/Sathish_Kumar_V_Resume_v2.pdf" }}
      />

      {/* 1. Hero */}
      <Hero
        eyebrow="AI Solutions Architect · Team Lead · 7+ Years · Chennai → UK/US Remote"
        name="Sathish"
        accent="Kumar."
        statement={
          <>
            I architect <b>agentic AI for the enterprise</b> — MCP servers, RAG pipelines, 
            document intelligence, and the governance that makes them safe to ship. 
            Leading 7 engineers, owning 15 internal products, winning deals I then build.
          </>
        }
        actions={
          <>
            <Button size="lg" href="#work">
              See selected work
            </Button>
            <Button size="lg" variant="secondary" href="/sathish-portfolio/resume/Sathish_Kumar_V_Resume_v2.pdf">
              View résumé
            </Button>
          </>
        }
        graph={{
          core: "AGENT",
          nodes: ["LLM", "MCP", "DATA", "HUMAN", "TOOLS"],
          hot: [1, 2],
        }}
      />

      {/* 2. Proof Strip - Metrics */}
      <div className="sg-metrics">
        <Metric
          value="99"
          unit="%"
          label="Time reduction"
          note="Contract extraction: 260h → 26min"
        />
        <Metric
          value="15"
          label="AI products owned"
          note="Enterprise platform, agents, MCP tools"
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

      {/* 3. Expertise - What I architect */}
      <section id="expertise" className="stack">
        <SectionHeader
          index="01"
          label="Expertise"
          title="What I"
          accent="architect."
          lede="Six areas I design, build and own end to end."
        />
        <CapabilityGrid
          items={[
            {
              title: "Agentic systems",
              summary: "Multi-agent workflows with tool use, memory and human checkpoints — designed to fail safely.",
              points: ["LangGraph orchestration", "MCP tool calling", "Human-in-the-loop"],
            },
            {
              title: "RAG & knowledge",
              summary: "Retrieval that cites its sources and says 'I don't know' when it should.",
              points: ["Hybrid search", "Re-ranking", "Citation tracking"],
            },
            {
              title: "MCP & integration",
              summary: "Secure, scoped servers that let agents act on enterprise systems.",
              points: ["Custom MCP servers", "Fabric integration", "API design"],
            },
            {
              title: "Document intelligence",
              summary: "OCR pipelines that handle complex layouts — nested tables, merged cells, multi-page contracts.",
              points: ["PaddleOCR", "Table extraction", "Confidence routing"],
            },
            {
              title: "Data foundations",
              summary: "Semantic layers and governed access so AI answers match the numbers people trust.",
              points: ["dbt models", "Power BI semantic", "Data contracts"],
            },
            {
              title: "Governance & safety",
              summary: "Guardrails, audit trails and the architecture that risk teams can sign off.",
              points: ["RBAC", "Audit logging", "Enterprise compliance"],
            },
          ]}
        />
      </section>

      {/* 4. Selected Work */}
      <section id="work" className="stack">
        <SectionHeader
          index="02"
          label="Selected work"
          title="Systems that"
          accent="shipped."
          lede="Client delivery and open source — each with the architecture, the decisions, and what broke on the way to production."
        />

        <div className="sg-grid-2">
          {/* Featured Case Study */}
          <ProjectCard
            featured
            index="/01"
            kind="Document Intelligence"
            title="Contract Extraction at Scale"
            summary="A company drowning in 200-page contracts, pricing buried in nested tables. Their team spent 260 hours per batch. Previous OCR attempts failed on complex layouts. I built the pipeline that does it in 26 minutes."
            outcome="85% straight-through processing. $0.002/page vs $0.03 with GPT-4V. Started as 4-week PoC, became 6-month engagement."
            tags={["PaddleOCR", "Qwen 7B", "Human-in-loop", "Salesforce"]}
            href="https://medium.com/@vpsathish05/contract-intelligence-at-scale-how-ocr-llm-turned-260-hours-into-26-minutes-00dc6aab26a0"
          />

          <div style={{ display: "grid", gap: 24, alignContent: "start" }}>
            <ProjectCard
              index="/02"
              kind="MCP · Open Source"
              title="Custom Fabric MCP Server"
              summary="MCP server for AI-powered, governed access to Microsoft Fabric. Enables agents to query Warehouses and Lakehouses with validation, Excel export, and dashboard generation beyond native capabilities."
              tags={["MCP", "Python", "Microsoft Fabric", "Azure"]}
              href="https://github.com/vpsathish05/custom-fabric-mcp"
            />

            <ProjectCard
              index="/03"
              kind="Enterprise · Platform"
              title="Private AI for 200 Consultants"
              summary="Consultants using ChatGPT with client data — compliance nightmare. Built a governed platform connecting SharePoint, Power BI, CRM. Same capabilities, zero data leaving the perimeter."
              tags={["Azure OpenAI", "RBAC", "Knowledge graph"]}
            />
          </div>
        </div>

        {/* Additional projects */}
        <div className="sg-grid-2">
          <ProjectCard
            index="/04"
            kind="RAG · Knowledge"
            title="AI Context Layer for PE"
            summary="Investment team spent days preparing for committee meetings. Built an AI layer over deal rooms, models, reports — cites sources, challenges assumptions, tracks audit trail."
            tags={["Claude Enterprise", "MCP", "Citation tracking"]}
          />

          <ProjectCard
            index="/05"
            kind="AI · Open Source"
            title="RMG: Resource Management System"
            summary="Replaces manual email-based resource negotiation with AI-powered candidate recommendations. Semantic matching, weighted scoring, automated rationale generation."
            tags={["Python", "GPT-4o", "pgvector", "FastAPI"]}
            href="https://github.com/vpsathish05/rmg"
          />
        </div>

        <div className="sg-grid-2">
          <ProjectCard
            index="/06"
            kind="Data · Platform"
            title="Data Engine for PE"
            summary="High-performance data engineering platform for Private Equity portfolio companies. Centralized command center for managing full data lifecycle with medallion architecture."
            tags={["TypeScript", "dbt", "Redshift", "Power BI"]}
            href="https://github.com/vpsathish05/data-engine"
          />

          <ProjectCard
            index="/07"
            kind="Agents · Infrastructure"
            title="SK-Hermes: Always-On Agent Runtime"
            summary="Hermes Agent fork with documented AWS EC2 Docker Compose deployment. My personal always-on agent runtime for autonomous workflows."
            tags={["Python", "Docker", "AWS EC2", "Agents"]}
            href="https://github.com/vpsathish05/sk-hermes"
          />
        </div>
      </section>

      {/* 5. How It Runs - Architecture & Trace */}
      <section className="stack">
        <SectionHeader
          index="03"
          label="How it runs"
          title="Watch it"
          accent="think."
          lede="The reference architecture behind the work, and a real (redacted) decision trace."
        />

        <ArchitectureStack
          title="Reference architecture · enterprise AI platform"
          meta="production · v3"
          rail="Evaluation · Observability · Governance"
          layers={[
            { name: "Experience", items: ["Web chat", "Teams bot", "API"] },
            { name: "Orchestration", tone: "signal", items: ["Planner", "Agent router", "Memory", "Human approval"] },
            { name: "Tools · MCP", tone: "current", items: ["CRM server", "Fabric server", "Docs server", "SharePoint"] },
            { name: "Knowledge & data", items: ["Vector index", "Semantic models", "Document store"] },
            { name: "Models & platform", items: ["Azure OpenAI", "Claude", "PaddleOCR", "Embeddings"] },
          ]}
        />

        <div className="proof">
          <AgentTrace
            title="trace · contract-extraction"
            meta="architecture decision · why PaddleOCR + Qwen, not GPT-4V"
            steps={[
              { kind: "plan", label: "Requirement: Extract pricing from 200-page contracts", detail: "Nested tables, merged cells, multi-currency. Previous OCR had failed.", ms: 0 },
              { kind: "model", label: "Attempt 1: GPT-4 Vision", detail: "Good accuracy. $0.03/page × 200 pages × 1000 contracts = $6,000/batch. Rejected.", ms: 0 },
              { kind: "error", label: "Attempt 2: Commercial OCR vendors", detail: "Tested 3 platforms. All failed on nested tables with merged cells.", ms: 0 },
              { kind: "mcp", label: "Solution: PaddleOCR for table detection", detail: "Open source, handles complex layouts. Runs on GPU we already had.", ms: 0 },
              { kind: "model", label: "Solution: Qwen 7B for field extraction", detail: "Small enough to self-host. Accurate enough for structured fields. $0.002/page.", ms: 0 },
              { kind: "human", label: "Design: Confidence thresholds", detail: "Below 85% → human review queue. 100% automation wasn't the goal.", ms: 0 },
              { kind: "result", label: "Outcome", detail: "15x cheaper than GPT-4 approach. Client owns infra. Scales to any volume.", ms: 0 },
            ]}
            status="complete"
          />

          <Terminal
            title="~/lessons-learned"
            shell="production"
            lines={[
              { text: "# What broke in production", tone: "warn" },
              "",
              "1. Multi-currency tables",
              "   → LLM hallucinated exchange rates",
              "   → Fix: Explicit currency detection step",
              "",
              "2. Handwritten annotations",
              "   → OCR confidence dropped to 40%",
              "   → Fix: Route to human, don't guess",
              "",
              "3. Scanned at angles",
              "   → Table detection failed",
              "   → Fix: Deskew preprocessing",
              "",
              { text: "# Key insight", tone: "ok" },
              "Production AI is 20% model, 80% edge cases.",
              "Treat low-confidence as a feature, not failure.",
            ]}
          />
        </div>
      </section>

      {/* 6. Approach - How I Work */}
      <section className="stack">
        <SectionHeader
          index="04"
          label="Approach"
          title="How I"
          accent="work."
          lede="Every stage ends with something you can hold."
        />
        <ProcessSteps
          active={3}
          steps={[
            { title: "Discover", summary: "Map the decision, the users and the data.", output: "Problem brief + metrics" },
            { title: "Architect", summary: "Pick patterns and boundaries; design for failure.", output: "Reference architecture" },
            { title: "Prototype", summary: "Ship a thin, real slice end to end.", output: "Working slice" },
            { title: "Evaluate", summary: "Measure quality, safety, cost and latency.", output: "Eval report" },
            { title: "Productionise", summary: "Harden, secure and hand over.", output: "Runbook + guardrails" },
            { title: "Operate", summary: "Monitor drift; improve on a cadence.", output: "Dashboards + reviews" },
          ]}
        />
      </section>

      {/* 7. Stack - Tools I Reach For */}
      <section className="stack">
        <SectionHeader
          index="05"
          label="Stack"
          title="Tools I"
          accent="reach for."
        />
        <StackMatrix
          groups={[
            {
              label: "Models",
              items: [
                { name: "Azure OpenAI", level: "daily" },
                { name: "Claude / Anthropic", level: "daily" },
                { name: "AWS Bedrock", level: "proficient" },
                { name: "Open-weight (Qwen, Llama)", level: "proficient" },
              ],
            },
            {
              label: "Orchestration",
              items: [
                { name: "LangChain", level: "daily" },
                { name: "LangGraph", level: "daily" },
                { name: "MCP Protocol", level: "daily" },
                { name: "Copilot Studio", level: "proficient" },
              ],
            },
            {
              label: "Data & RAG",
              items: [
                { name: "pgvector", level: "daily" },
                { name: "Azure AI Search", level: "proficient" },
                { name: "Microsoft Fabric", level: "daily" },
                { name: "dbt", level: "proficient" },
              ],
            },
            {
              label: "Languages",
              items: [
                { name: "Python", level: "daily" },
                { name: "TypeScript", level: "daily" },
                { name: "SQL", level: "daily" },
                { name: "C#", level: "familiar" },
              ],
            },
            {
              label: "Infrastructure",
              items: [
                { name: "Docker", level: "daily" },
                { name: "Azure", level: "daily" },
                { name: "AWS", level: "proficient" },
                { name: "Terraform", level: "proficient" },
              ],
            },
          ]}
        />
      </section>

      {/* 8. Experience - Timeline */}
      <section id="about" className="stack">
        <SectionHeader
          index="06"
          label="About"
          title="The path"
          accent="so far."
        />
        <Timeline
          items={[
            {
              period: "Oct 2025 – Now",
              role: "AI Solutions Architect & Team Lead",
              org: "JMAN Group",
              current: true,
              summary: "Lead Cluster 5 (7 engineers) in AI Centre of Excellence. Own 15 internal AI products. Architect client solutions from pitch to production — if we win, I build it. 5 deals won this year.",
            },
            {
              period: "Apr 2024 – Oct 2025",
              role: "AI Engineer → Product Lead",
              org: "JMAN Group",
              summary: "Led the contract extraction project that became our biggest reference (260h → 26min). Started building enterprise AI platform — internal products now serving 200+ employees.",
            },
            {
              period: "Apr 2023 – Apr 2024",
              role: "Data Engineer",
              org: "JMAN Group",
              summary: "Built medallion architecture platform processing 5M+ records daily using dbt, Redshift, Azure Data Factory. SCD Type 2 across 20+ entities.",
            },
            {
              period: "Feb 2022 – Apr 2023",
              role: "Software Engineer",
              org: "JMAN Group",
              summary: "Built RESTful APIs using Node.js, NestJS, FastAPI serving 1M+ daily requests. Docker-based CI/CD reducing release cycle by 60%.",
            },
            {
              period: "2017 – 2022",
              role: "Full Stack Developer",
              org: "Elroi, Qserve, RmKV",
              summary: "Enterprise systems using C#, .NET, SQL Server. Retail management, accounting, inventory systems for multiple companies.",
            },
          ]}
        />

        {/* 9. Credentials */}
        <CredentialList
          items={[
            { kind: "cert", title: "Azure AI Engineer Associate (AI-102)", issuer: "Microsoft", year: "In Progress" },
            { kind: "cert", title: "AWS Solutions Architect Associate", issuer: "Amazon Web Services", year: "Planned 2026" },
            { kind: "degree", title: "MCA (Master of Computer Applications)", issuer: "University of Madras", year: "2020" },
            { kind: "degree", title: "BCA (Bachelor of Computer Applications)", issuer: "Jairam Arts and Science College", year: "2017" },
            { kind: "award", title: "Equity stakeholder", issuer: "JMAN Group — shares awarded for contribution", year: "2025" },
            { kind: "award", title: "Hackathon — 2× podium finishes", issuer: "Company-wide competitions", year: "2024" },
          ]}
        />
      </section>

      {/* 10. Writing */}
      <section id="writing" className="stack">
        <SectionHeader
          index="07"
          label="Writing & talks"
          title="Thinking"
          accent="out loud."
        />
        <WritingList
          items={[
            {
              type: "Article",
              title: "Contract Intelligence at Scale: How OCR-LLM Turned 260 Hours Into 26 Minutes",
              venue: "Medium · Technical case study",
              date: "2025",
              href: "https://medium.com/@vpsathish05/contract-intelligence-at-scale-how-ocr-llm-turned-260-hours-into-26-minutes-00dc6aab26a0",
            },
            {
              type: "Open Source",
              title: "Custom Fabric MCP Server",
              venue: "GitHub · AI-powered Fabric access with governance",
              date: "2026",
              href: "https://github.com/vpsathish05/custom-fabric-mcp",
            },
            {
              type: "Internal",
              title: "AI Playbook: RAG, Agents, MCP, Production Patterns",
              venue: "JMAN Group knowledge base · Author & owner",
              date: "Ongoing",
            },
          ]}
        />

        {/* 11. Endorsements / Testimonial */}
        <Testimonial
          quote="He turned a vague 'we need AI' into an architecture our engineers could build and our risk team could sign off. The contract extraction system he built became our biggest client reference."
          name="Delivery Director"
          role="JMAN Group · Enterprise AI practice"
          source="Internal review"
        />
      </section>

      {/* 13. Contact */}
      <ContactBand
        eyebrow="08 — Contact"
        title="Let's build something"
        accent="agentic."
        lede="Open to conversations about AI architecture, MCP, and taking agents from demo to production. Looking for remote roles with UK/US companies (60-90 day notice)."
        email="sathishkumar05@gmail.com"
        links={[
          { label: "LinkedIn", href: "https://www.linkedin.com/in/sathish-kumar-310976153/" },
          { label: "GitHub", href: "https://github.com/vpsathish05" },
          { label: "Medium", href: "https://medium.com/@vpsathish05" },
          { label: "Résumé", href: "/sathish-portfolio/resume/Sathish_Kumar_V_Resume_v2.pdf" },
        ]}
      />

      {/* Theme Toggle */}
      <div className="tools">
        <Button
          variant="secondary"
          size="sm"
          arrow={false}
          onClick={() => setTheme(theme === "obsidian" ? "paper" : "obsidian")}
        >
          {theme === "obsidian" ? "Paper theme" : "Obsidian theme"}
        </Button>
      </div>

      <style jsx global>{`
        html, body { 
          margin: 0; 
          background: var(--bg); 
        }
        .shell { 
          max-width: var(--content-max); 
          margin: 0 auto; 
          padding: var(--space-3) var(--space-5) var(--space-9); 
          display: grid; 
          gap: var(--space-9); 
        }
        .shell > .sg-nav { 
          position: sticky; 
          top: var(--space-3); 
          z-index: 10; 
        }
        .stack { 
          display: grid; 
          gap: var(--space-6); 
        }
        .proof { 
          display: grid; 
          grid-template-columns: repeat(auto-fit, minmax(340px, 1fr)); 
          gap: var(--space-5); 
          align-items: start; 
        }
        .tools { 
          position: fixed; 
          right: var(--space-5); 
          bottom: var(--space-5); 
          z-index: 20; 
          display: flex; 
          gap: var(--space-2); 
        }
        @media (max-width: 768px) {
          .shell { 
            padding: var(--space-3); 
            gap: var(--space-7); 
          }
          .proof { 
            grid-template-columns: 1fr; 
          }
        }
        @media print { 
          .tools { display: none; } 
          body { background: #fff; } 
        }
      `}</style>
    </div>
  );
}

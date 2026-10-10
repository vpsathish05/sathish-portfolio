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
            I architect <b>agentic AI for the enterprise</b> — autonomous systems with memory, 
            reasoning loops, tool orchestration, and the guardrails that make them safe to ship. 
            From MCP servers to RAG pipelines, I build AI that acts, not just responds.
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
          nodes: ["MEMORY", "TOOLS", "LOOP", "HARNESS", "OBSERVE", "GOVERN"],
          hot: [2, 3],
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
          lede="Six domains where I design, build, and ship production systems."
        />
        <CapabilityGrid
          items={[
            {
              title: "Agentic systems",
              summary: "Autonomous agents with reasoning loops, tool orchestration, and human checkpoints — architected to fail gracefully.",
              points: ["LangGraph orchestration", "MCP tool harness", "Memory & context management"],
            },
            {
              title: "RAG & knowledge",
              summary: "Retrieval systems that cite sources, surface uncertainty, and know when to escalate to humans.",
              points: ["Hybrid vector + keyword search", "Re-ranking pipelines", "Citation & provenance tracking"],
            },
            {
              title: "MCP & tool integration",
              summary: "Secure, scoped MCP servers that let agents act on enterprise systems with full audit trails.",
              points: ["Custom MCP protocol servers", "Microsoft Fabric integration", "Governed API access"],
            },
            {
              title: "Document intelligence",
              summary: "OCR pipelines handling complex layouts — nested tables, merged cells, multi-page contracts — with confidence-based routing.",
              points: ["PaddleOCR + LLM extraction", "Table structure detection", "Human-in-the-loop routing"],
            },
            {
              title: "Data foundations",
              summary: "Semantic layers and governed access so AI answers match the numbers business users trust.",
              points: ["dbt transformation models", "Power BI semantic layer", "Data contracts & lineage"],
            },
            {
              title: "Governance & observability",
              summary: "Guardrails, audit trails, and evaluation frameworks that risk teams can sign off on.",
              points: ["RBAC & access control", "LLMOps & Langfuse", "Compliance documentation"],
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
          lede="Client delivery and open source — each with the architecture decisions and production lessons learned."
        />

        <div className="sg-grid-2">
          {/* Featured Case Study */}
          <ProjectCard
            featured
            index="/01"
            kind="Document Intelligence"
            title="Contract Extraction at Scale"
            summary="Enterprise clients drowning in 200-page contracts with pricing buried in nested tables. Manual extraction took 260 hours per batch; commercial OCR failed on complex layouts. I architected a hybrid pipeline combining PaddleOCR for structure detection with Qwen 7B for field extraction."
            outcome="85% straight-through automation. Cost reduced from $0.03/page (GPT-4V) to $0.002/page. Four-week PoC became six-month production engagement."
            tags={["PaddleOCR", "Qwen 7B", "Human-in-loop", "Salesforce"]}
            href="https://medium.com/@vpsathish05/contract-intelligence-at-scale-how-ocr-llm-turned-260-hours-into-26-minutes-00dc6aab26a0"
          />

          <div style={{ display: "grid", gap: 24, alignContent: "start" }}>
            <ProjectCard
              index="/02"
              kind="MCP · Open Source"
              title="Custom Fabric MCP Server"
              summary="MCP server enabling AI agents to query Microsoft Fabric with validation, Excel export, and dashboard generation. Extends native capabilities with governed access patterns suitable for enterprise deployment."
              tags={["MCP Protocol", "Python", "Microsoft Fabric", "Azure"]}
              href="https://github.com/vpsathish05/custom-fabric-mcp"
            />

            <ProjectCard
              index="/03"
              kind="Enterprise · Platform"
              title="Private AI for 200 Consultants"
              summary="Consultants using public ChatGPT with client data created compliance risk. Built a governed internal platform connecting SharePoint, Power BI, and CRM with RBAC — same AI capabilities, zero data leaving the perimeter."
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
            summary="Investment teams spent days preparing for committee meetings. Built an AI layer over deal rooms, financial models, and reports with citation tracking, assumption challenging, and full audit trail."
            tags={["Claude Enterprise", "MCP Protocol", "Citation tracking"]}
          />

          <ProjectCard
            index="/05"
            kind="AI · Open Source"
            title="RMG: Resource Management System"
            summary="Replaced manual email-based resource allocation with AI-powered candidate ranking. Six-step pipeline: semantic matching, weighted scoring (skills 40%, competency 25%, availability 25%), GPT-4o enrichment."
            tags={["Python", "GPT-4o", "pgvector", "FastAPI"]}
            href="https://github.com/vpsathish05/rmg"
          />
        </div>

        <div className="sg-grid-2">
          <ProjectCard
            index="/06"
            kind="Data · Platform"
            title="Data Engine for PE"
            summary="High-performance data engineering platform for Private Equity portfolio companies. Centralized command center managing full data lifecycle with medallion architecture (Bronze → Silver → Gold)."
            tags={["TypeScript", "dbt", "Redshift", "Power BI"]}
            href="https://github.com/vpsathish05/data-engine"
          />

          <ProjectCard
            index="/07"
            kind="Agents · Infrastructure"
            title="SK-Hermes: Always-On Agent Runtime"
            summary="Hermes Agent fork with documented AWS EC2 Docker Compose deployment. Personal always-on runtime for autonomous agent workflows and experimentation."
            tags={["Python", "Docker", "AWS EC2", "Agentic AI"]}
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
          lede="The agentic architecture pattern I deploy, with a real decision trace from production."
        />

        <ArchitectureStack
          title="Reference architecture · agentic enterprise platform"
          meta="production · v3"
          rail="Observe · Evaluate · Govern"
          layers={[
            { name: "Experience", items: ["Web chat", "Teams bot", "API endpoints"] },
            { name: "Agent harness", tone: "signal", items: ["Planning loop", "Agent router", "Memory store", "Human checkpoints"] },
            { name: "Tool layer · MCP", tone: "current", items: ["CRM server", "Fabric server", "Docs server", "SharePoint connector"] },
            { name: "Knowledge & retrieval", items: ["Vector index", "Semantic models", "Document store", "Graph DB"] },
            { name: "Model layer", items: ["Azure OpenAI", "Claude", "PaddleOCR", "Embedding models"] },
          ]}
        />

        <div className="proof">
          <AgentTrace
            title="trace · contract-extraction"
            meta="architecture decision · why PaddleOCR + Qwen, not GPT-4V"
            steps={[
              { kind: "plan", label: "Requirement analysis", detail: "Extract pricing from 200-page contracts with nested tables, merged cells, multi-currency. Commercial OCR had failed.", ms: 0 },
              { kind: "model", label: "Evaluated: GPT-4 Vision", detail: "Excellent accuracy, prohibitive cost: $0.03/page × 200 pages × 1,000 contracts = $6,000/batch. Rejected.", ms: 0 },
              { kind: "error", label: "Evaluated: Commercial OCR vendors", detail: "Tested three platforms. All failed on nested tables with merged cells — critical requirement.", ms: 0 },
              { kind: "mcp", label: "Selected: PaddleOCR for table detection", detail: "Open source, handles complex layouts reliably. Runs on existing GPU infrastructure.", ms: 0 },
              { kind: "model", label: "Selected: Qwen 7B for field extraction", detail: "Small enough to self-host, accurate for structured fields. Reduces cost to $0.002/page.", ms: 0 },
              { kind: "human", label: "Designed: Confidence-based routing", detail: "Below 85% confidence → human review queue. Partial automation is the goal, not full automation.", ms: 0 },
              { kind: "result", label: "Production outcome", detail: "15× cheaper than GPT-4 approach. Client owns infrastructure. Scales linearly with volume.", ms: 0 },
            ]}
            status="complete"
          />

          <Terminal
            title="~/lessons-learned"
            shell="production"
            lines={[
              { text: "# Production edge cases", tone: "warn" },
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
              "   → Fix: Deskew preprocessing pipeline",
              "",
              { text: "# Key insight", tone: "ok" },
              "Production AI is 20% model, 80% edge cases.",
              "Low confidence is a feature, not a failure.",
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
          accent="deliver."
          lede="Every phase produces a tangible artifact. No stage ends without something you can hold."
        />
        <ProcessSteps
          active={3}
          steps={[
            { title: "Discover", summary: "Map the decision landscape, users, and data sources.", output: "Problem brief + success metrics" },
            { title: "Architect", summary: "Select patterns, define boundaries, design for failure modes.", output: "Reference architecture" },
            { title: "Prototype", summary: "Ship a thin, working slice end-to-end.", output: "Functional prototype" },
            { title: "Evaluate", summary: "Measure quality, safety, cost, and latency against baselines.", output: "Evaluation report" },
            { title: "Productionize", summary: "Harden security, add observability, document operations.", output: "Runbook + guardrails" },
            { title: "Operate", summary: "Monitor drift, run evals on cadence, iterate.", output: "Dashboards + review cycles" },
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
          lede="The technologies I use daily to build production agentic systems."
        />
        <StackMatrix
          groups={[
            {
              label: "Models & inference",
              items: [
                { name: "Azure OpenAI", level: "daily" },
                { name: "Claude / Anthropic", level: "daily" },
                { name: "AWS Bedrock", level: "proficient" },
                { name: "Open-weight (Qwen, Llama)", level: "proficient" },
              ],
            },
            {
              label: "Agent orchestration",
              items: [
                { name: "LangChain", level: "daily" },
                { name: "LangGraph", level: "daily" },
                { name: "MCP Protocol", level: "daily" },
                { name: "Copilot Studio", level: "proficient" },
              ],
            },
            {
              label: "RAG & data",
              items: [
                { name: "pgvector", level: "daily" },
                { name: "Azure AI Search", level: "proficient" },
                { name: "Microsoft Fabric", level: "daily" },
                { name: "dbt", level: "proficient" },
              ],
            },
            {
              label: "Languages & frameworks",
              items: [
                { name: "Python", level: "daily" },
                { name: "TypeScript", level: "daily" },
                { name: "SQL", level: "daily" },
                { name: "FastAPI / React", level: "daily" },
              ],
            },
            {
              label: "Infrastructure & ops",
              items: [
                { name: "Docker / Kubernetes", level: "daily" },
                { name: "Azure", level: "daily" },
                { name: "AWS", level: "proficient" },
                { name: "Terraform / IaC", level: "proficient" },
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
          lede="From full-stack development to leading AI engineering — seven years of building systems that ship."
        />
        
        {/* Profile with Photo */}
        <div className="about-intro">
          <div className="about-photo">
            <img 
              src="/sathish-portfolio/sathish-teams-img.png" 
              alt="Sathish Kumar V" 
              className="profile-img"
            />
          </div>
          <div className="about-text">
            <p className="about-statement">
              I believe production AI systems should be boring — predictable, observable, 
              and straightforward to debug at 3am. The interesting work is getting them there.
            </p>
            <p className="about-detail">
              Based in Chennai, serving UK and US clients remotely. I lead a team of seven engineers, 
              own technical direction for our AI practice, and still write code daily. Currently 
              seeking opportunities where I can continue shipping agentic AI that runs in production — 
              not just demos that impress in meetings.
            </p>
          </div>
        </div>

        <Timeline
          items={[
            {
              period: "Oct 2025 – Present",
              role: "AI Solutions Architect & Team Lead",
              org: "JMAN Group",
              current: true,
              summary: "Lead Cluster 5 (7 engineers) in AI Centre of Excellence. Own 15 internal AI products. Architect client solutions from pitch to production — solutions I win, I build. Five deals closed this year through technical pre-sales.",
            },
            {
              period: "Apr 2024 – Oct 2025",
              role: "AI Engineer → Product Lead",
              org: "JMAN Group",
              summary: "Delivered the contract extraction project that became our flagship reference (260 hours → 26 minutes). Built enterprise AI platform now serving 200+ employees across the organization.",
            },
            {
              period: "Apr 2023 – Apr 2024",
              role: "Data Engineer",
              org: "JMAN Group",
              summary: "Built medallion architecture platform processing 5M+ records daily. Implemented SCD Type 2 across 20+ entities using dbt, Redshift, and Azure Data Factory.",
            },
            {
              period: "Feb 2022 – Apr 2023",
              role: "Software Engineer",
              org: "JMAN Group",
              summary: "Developed RESTful APIs using Node.js, NestJS, and FastAPI serving 1M+ daily requests. Established Docker-based CI/CD reducing release cycles by 60%.",
            },
            {
              period: "2017 – 2022",
              role: "Full Stack Developer",
              org: "Elroi, Qserve, RmKV",
              summary: "Built enterprise systems using C#, .NET, and SQL Server. Delivered retail management, accounting, and inventory solutions across multiple organizations.",
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
          lede="Technical writing, open source contributions, and knowledge sharing."
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
              venue: "GitHub · AI-powered Microsoft Fabric access with governance",
              date: "2026",
              href: "https://github.com/vpsathish05/custom-fabric-mcp",
            },
            {
              type: "Internal",
              title: "AI Playbook: RAG, Agents, MCP, Production Patterns",
              venue: "JMAN Group knowledge base · Author and maintainer",
              date: "Ongoing",
            },
          ]}
        />

        {/* 11. Endorsements / Testimonial */}
        <Testimonial
          quote="He transformed a vague 'we need AI' brief into architecture our engineers could build and our risk team could approve. The contract extraction system he delivered became our flagship client reference."
          name="Delivery Director"
          role="JMAN Group · Enterprise AI Practice"
          source="Internal performance review"
        />
      </section>

      {/* 13. Contact */}
      <ContactBand
        eyebrow="08 — Contact"
        title="Let's build something"
        accent="agentic."
        lede="Open to conversations about AI architecture, MCP protocol, and taking autonomous agents from prototype to production. Seeking remote roles with UK/US companies — 60-90 day notice period, open to visa sponsorship."
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
        
        /* About section with photo */
        .about-intro {
          display: grid;
          grid-template-columns: 200px 1fr;
          gap: var(--space-6);
          align-items: start;
        }
        .about-photo {
          position: relative;
        }
        .profile-img {
          width: 200px;
          height: 200px;
          object-fit: cover;
          border-radius: var(--radius-md);
          border: 1px solid var(--line);
          filter: saturate(0.85) contrast(1.05);
        }
        .about-text {
          display: flex;
          flex-direction: column;
          gap: var(--space-4);
        }
        .about-statement {
          font-family: var(--font-display);
          font-size: 24px;
          line-height: 1.4;
          color: var(--ink);
          margin: 0;
        }
        .about-detail {
          font-size: 16px;
          line-height: 1.65;
          color: var(--ink-muted);
          margin: 0;
          max-width: 60ch;
        }
        @media (max-width: 640px) {
          .about-intro {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .about-photo {
            justify-self: center;
          }
          .profile-img {
            width: 160px;
            height: 160px;
          }
        }
      `}</style>
    </div>
  );
}

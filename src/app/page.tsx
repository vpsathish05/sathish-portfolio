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
          { label: "Work", href: "#work", active: true },
          { label: "How I think", href: "#approach" },
          { label: "Path", href: "#path" },
          { label: "Contact", href: "#contact" },
        ]}
        status="Open to remote roles"
        cta={{ label: "Let's talk", href: "#contact" }}
      />

      {/* Hero Section */}
      <Hero
        eyebrow="AI ENGINEER · CHENNAI → UK/US REMOTE"
        name="I build AI that"
        accent="actually ships."
        statement={
          <>
            Most AI projects die in notebooks. Mine run in production — processing 
            thousands of documents, answering real questions, saving real time. 
            I lead a team of 6 engineers at a consulting firm. We turn messy 
            enterprise problems into systems that work.
          </>
        }
        actions={
          <>
            <Button size="lg" href="#work">
              See the work
            </Button>
            <Button size="lg" variant="secondary" href="/sathish-portfolio/resume/output/Sathish_Kumar_V_Resume_v1.pdf">
              Resume (PDF)
            </Button>
          </>
        }
        graph={{
          core: "Ship",
          nodes: ["Docs", "Data", "LLMs", "Users", "Value"],
          hot: [0, 4],
        }}
      />

      {/* Selected Work Section */}
      <section id="work" className="stack">
        <SectionHeader
          index="01"
          label="Selected work"
          title="Three problems"
          accent="I actually solved."
          lede="Not demos. Not proofs of concept that got shelved. Real systems that real people use every day."
        />

        <div className="sg-grid-2">
          {/* Featured Case Study */}
          <ProjectCard
            featured
            index="/01"
            kind="DOCUMENT INTELLIGENCE"
            title="The 260-hour problem"
            summary="A company was drowning in contracts. 200-page documents with pricing buried in nested tables. Their team spent 260 hours manually extracting data from each batch. They'd tried OCR before — it failed on complex tables."
            outcome="Built a pipeline that does it in 26 minutes. 85% of documents now process without human touch. The legal team does strategy now, not data entry."
            tags={["PaddleOCR", "Small LLM", "Human-in-loop", "Salesforce"]}
            href="https://medium.com/@vpsathish05/contract-intelligence-at-scale-how-ocr-llm-turned-260-hours-into-26-minutes-00dc6aab26a0"
          />

          <div style={{ display: "grid", gap: 24, alignContent: "start" }}>
            <ProjectCard
              index="/02"
              kind="ENTERPRISE PLATFORM"
              title="The compliance nightmare"
              summary="200 consultants using ChatGPT with client data. Sensitive information going to public APIs. Built a private AI platform that connects to internal systems — SharePoint, Power BI, CRM. Now they have AI without the risk."
              tags={["Azure OpenAI", "Knowledge integration", "Governance"]}
            />

            <ProjectCard
              index="/03"
              kind="INVESTMENT INTELLIGENCE"
              title="The analyst bottleneck"
              summary="PE firm's investment team spent days preparing for committee meetings. Information scattered everywhere. Built an AI layer that knows their context, cites its sources, and challenges assumptions on demand."
              tags={["Claude Enterprise", "MCP", "Audit trail"]}
            />
          </div>
        </div>
      </section>

      {/* How I Think Section */}
      <section id="approach" className="stack">
        <SectionHeader
          index="02"
          label="How I think"
          title="What I chose"
          accent="and why."
          lede="The interesting part isn't the tech. It's the trade-offs."
        />

        <div className="proof">
          <AgentTrace
            title="Contract extraction · the decision"
            meta="Why PaddleOCR + small LLM, not GPT-4 Vision"
            steps={[
              { kind: "plan", label: "First attempt: GPT-4 Vision", detail: "Promising accuracy, but $0.03 per page × 200 pages × 1000 contracts = budget blown", ms: 0 },
              { kind: "error", label: "Commercial OCR tools", detail: "Tested 3 vendors. All failed on nested tables with merged cells.", ms: 0 },
              { kind: "mcp", label: "PaddleOCR for detection", detail: "Open source, handles complex layouts, runs on GPU we already had", ms: 0 },
              { kind: "model", label: "Qwen 7B for extraction", detail: "Small enough to self-host, accurate enough for structured fields", ms: 0 },
              { kind: "human", label: "Confidence threshold", detail: "Below 85%? Flag for human review. 100% automation wasn't the goal — accuracy was.", ms: 0 },
              { kind: "result", label: "The outcome", detail: "Costs $0.002/page, not $0.03. Scales to any volume. Client owns the infrastructure.", ms: 0 },
            ]}
            status="complete"
          />

          <Terminal
            title="What actually broke"
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
              "   → Table detection failed",
              "   → Fix: Deskew preprocessing",
              "",
              { text: "# The lesson", tone: "ok" },
              "Production AI is 20% model, 80% edge cases.",
            ]}
          />
        </div>

        <div className="sg-metrics">
          <Metric
            value="99%"
            label="Time reduction"
            note="260 hours → 26 minutes"
          />
          <Metric
            value="85%"
            label="Straight-through"
            note="No human intervention needed"
          />
          <Metric
            value="6"
            unit="mo"
            label="Engagement length"
            note="Started as 4-week PoC"
          />
          <Metric
            value="$0.002"
            label="Per page cost"
            note="vs $0.03 with GPT-4"
          />
        </div>
      </section>

      {/* Path Section */}
      <section id="path" className="stack">
        <SectionHeader
          index="03"
          label="The path"
          title="How I got"
          accent="here."
        />

        <Timeline
          items={[
            {
              period: "Now",
              role: "AI Team Lead",
              org: "Consulting firm",
              current: true,
              summary:
                "Running a team of 6-7 engineers. We build AI systems for enterprises — the kind that handle real documents, connect to real systems, and need real governance. I also do pre-sales: if we win the deal, I usually end up building it.",
            },
            {
              period: "2024–25",
              role: "AI Engineer → Product Lead",
              org: "Same firm",
              summary:
                "This is when I stopped being a 'resource' and started owning outcomes. Led the contract extraction project that became our biggest reference. Started building internal AI products, not just client work.",
            },
            {
              period: "2022–24",
              role: "Data Engineer",
              org: "Same firm",
              summary:
                "Built the data foundations that make AI possible. ETL pipelines, data warehouses, dbt models. Learned that AI without clean data is just expensive guessing.",
            },
            {
              period: "2017–22",
              role: "Software Developer",
              org: "Various companies",
              summary:
                "Started with C# and .NET. Built enterprise systems for retail and services. Learned that code exists to solve business problems, not to be clever.",
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
            <strong style={{ color: "var(--ink)" }}>The through-line:</strong> I&apos;ve always cared more about whether something works than whether it&apos;s technically impressive. 
            The contract extraction system uses a 7B parameter model — not because I couldn&apos;t use GPT-4, but because the smaller model was accurate enough and 15x cheaper. 
            That&apos;s the kind of decision I make every day.
          </p>
        </div>

        <div style={{ display: "flex", gap: "var(--space-2)", flexWrap: "wrap", marginTop: "var(--space-5)" }}>
          <Tag tone="signal">Python</Tag>
          <Tag tone="signal">TypeScript</Tag>
          <Tag tone="current">LangChain</Tag>
          <Tag tone="current">Azure AI</Tag>
          <Tag tone="current">AWS Bedrock</Tag>
          <Tag>FastAPI</Tag>
          <Tag>React</Tag>
          <Tag>PostgreSQL</Tag>
          <Tag>dbt</Tag>
          <Tag>Docker</Tag>
        </div>
      </section>

      {/* Contact Section */}
      <div id="contact">
        <ContactBand
          eyebrow="04 — LET'S TALK"
          title="Looking for AI that"
          accent="actually works?"
          lede="I'm exploring remote roles with UK or US companies. If you need someone who can build AI systems that ship — not just demo — let's talk."
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
        .theme-toggle { 
          position: fixed; 
          right: var(--space-5); 
          bottom: var(--space-5); 
          z-index: 20; 
        }
        @media (max-width: 768px) {
          .shell { padding: var(--space-3); gap: var(--space-7); }
          .proof { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
}

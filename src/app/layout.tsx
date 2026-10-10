import type { Metadata } from "next";
import { generatePersonSchema, generateWebsiteSchema } from "@/lib/structured-data";
import "../../design-system/tokens.css";
import "../../design-system/components/signal.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://vpsathish05.github.io'),
  title: "Sathish Kumar V — AI Architect & Team Lead",
  description: "AI COE Team Lead building agentic AI for the enterprise. MCP servers, multi-agent workflows, RAG architectures, and the guardrails that make them safe to ship.",
  keywords: "AI Architect, Team Lead, MCP, Agentic AI, LLMs, RAG, Azure AI Foundry, AWS Bedrock, LangChain, LangGraph",
  authors: [{ name: "Sathish Kumar V" }],
  icons: {
    icon: [
      { url: '/sathish-portfolio/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/sathish-portfolio/favicon-16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/sathish-portfolio/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/sathish-portfolio/manifest.json',
  openGraph: {
    title: "Sathish Kumar V — AI Architect & Team Lead",
    description: "AI COE Team Lead building agentic AI for the enterprise. MCP servers, multi-agent workflows, and RAG architectures.",
    url: "https://vpsathish05.github.io/sathish-portfolio",
    siteName: "Sathish Kumar Portfolio",
    images: [
      {
        url: "/sathish-portfolio/sathish-teams-img.png",
        width: 1200,
        height: 630,
        alt: "Sathish Kumar V — AI Architect",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sathish Kumar V — AI Architect & Team Lead",
    description: "AI COE Team Lead building agentic AI for the enterprise.",
    images: ["/sathish-portfolio/sathish-teams-img.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personSchema = generatePersonSchema();
  const websiteSchema = generateWebsiteSchema();

  return (
    <html lang="en" data-theme="obsidian" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </head>
      <body className="sg-page">
        {children}
      </body>
    </html>
  );
}

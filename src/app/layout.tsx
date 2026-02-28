import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { generatePersonSchema, generateWebsiteSchema } from "@/lib/structured-data";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Sathish Kumar V - AI Engineer | Data Engineer",
  description: "AI Engineer with 5+ years building production-grade intelligent systems. Expert in LLMs, RAG architectures, Azure AI Foundry, AWS Bedrock, and data engineering.",
  keywords: "AI Engineer, Data Engineer, LLMs, RAG, Azure AI Foundry, AWS Bedrock, Python, Next.js, Chennai",
  authors: [{ name: "Sathish Kumar V" }],
  icons: {
    icon: [
      { url: '/sathish-portfolio/favicon.svg', type: 'image/svg+xml' },
      { url: '/sathish-portfolio/favicon.ico', sizes: 'any' }
    ],
  },
  openGraph: {
    title: "Sathish Kumar V - AI Engineer | Data Engineer",
    description: "AI Engineer building production-grade intelligent systems with LLMs and RAG architectures",
    url: "https://vpsathish05.github.io/sathish-portfolio",
    siteName: "Sathish Kumar Portfolio",
    images: [
      {
        url: "/sathish-portfolio/sathish-teams-img.png",
        width: 1200,
        height: 630,
        alt: "Sathish Kumar V - AI Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sathish Kumar V - AI Engineer | Data Engineer",
    description: "AI Engineer building production-grade intelligent systems with LLMs and RAG architectures",
    images: ["/sathish-portfolio/sathish-teams-img.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
    <html lang="en" suppressHydrationWarning>
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

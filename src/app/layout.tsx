import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { generatePersonSchema, generateWebsiteSchema } from "@/lib/structured-data";

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
  title: "Sathish Kumar V - Full-Stack Developer & Data Engineer",
  description: "5+ years experienced Full-Stack Developer & Data Engineer specializing in Next.js, Node.js, Python, AI/ML, and data platforms. Available for hire.",
  keywords: "Full-Stack Developer, Data Engineer, Next.js, Node.js, Python, AI, Machine Learning, Chennai",
  authors: [{ name: "Sathish Kumar V" }],
  openGraph: {
    title: "Sathish Kumar V - Full-Stack Developer & Data Engineer",
    description: "5+ years experienced developer specializing in modern web technologies and data engineering",
    url: "https://sathishkumar.dev",
    siteName: "Sathish Kumar Portfolio",
    images: [
      {
        url: "/sathish-teams-img.png",
        width: 1200,
        height: 630,
        alt: "Sathish Kumar V - Full-Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sathish Kumar V - Full-Stack Developer & Data Engineer",
    description: "5+ years experienced developer specializing in modern web technologies and data engineering",
    images: ["/sathish-teams-img.png"],
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
    <html lang="en">
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
        {children}
      </body>
    </html>
  );
}

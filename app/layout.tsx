import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = "https://vitalsy.ai";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Vitalsy AI — Your Personal AI Health Companion",
    template: "%s | Vitalsy AI",
  },
  description:
    "Vitalsy AI helps you understand your health, track wellness goals, receive intelligent insights, and stay on top of your wellbeing — all from your smartphone.",
  keywords: [
    "AI health assistant",
    "wellness tracking",
    "health insights",
    "health app",
    "AI wellness",
    "goal tracking",
    "Vitalsy",
  ],
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Vitalsy AI",
    title: "Vitalsy AI — Your Personal AI Health Companion",
    description:
      "Understand your health, track wellness goals, and receive intelligent AI-powered insights — all from your smartphone.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vitalsy AI — Your Personal AI Health Companion",
    description:
      "Understand your health, track wellness goals, and receive intelligent AI-powered insights — all from your smartphone.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#020617" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

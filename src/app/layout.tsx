import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { PostHogProvider } from "@/components/posthog-provider";
import { DATA } from "@/data/site";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { Nunito } from "next/font/google";
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

// Import Nunito as Avenir Next alternative
const avenirNext = Nunito({
  subsets: ["latin"],
  variable: "--font-avenir",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
    shortcut: "/favicon.png",
  },
  title: {
    default: `${DATA.name}`,
    template: `%s | ${DATA.name}`,
  },
  description: `${DATA.description} | ${DATA.summary}`,
  keywords:
    "software engineer, web developer, full stack developer, frontend developer, React developer, TypeScript, Next.js, portfolio, software development, programming",
  authors: [
    {
      name: "Miguel Ochoa",
    },
  ],
  openGraph: {
    title: `${DATA.name}`,
    description: DATA.description,
    images: ["/pee.jpeg"],
    url: "https://idkmigueltbh.vercel.app",
    siteName: `${DATA.name}'s Portfolio`,
    locale: "en_US",
    type: "website",
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
  twitter: {
    title: `${DATA.name}`,
    card: "summary_large_image",
    images: [`${DATA.url}/pee.jpeg`],
  },
  alternates: {
    canonical: `${DATA.url}`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-[url('/bg.jpg')] bg-repeat bg-center bg-auto font-sans antialiased py-12 sm:py-24",
          fontSans.variable,
          avenirNext.variable,
        )}
      >
        <PostHogProvider>
          <ThemeProvider attribute="class" defaultTheme="dark">
            <TooltipProvider delayDuration={0}>
              {children}
              <Navbar />
              <Analytics />
            </TooltipProvider>
            <Toaster />
          </ThemeProvider>
        </PostHogProvider>
      </body>
    </html>
  );
}

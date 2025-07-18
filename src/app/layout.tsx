import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { ThemeProvider } from "@/components/theme-provider";
import { meta } from "@/data/site-metadata";
import { ENV } from "@/lib/env";
import { cn } from "@/lib/utils";
import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./global.css";
import Head from "./head";

const space_grotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
});

export const data: Metadata = {
  metadataBase: new URL(meta.siteUrl),
  title: {
    default: meta.title,
    template: `%s | ${meta.title}`,
  },
  description: meta.description,
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: "./",
    siteName: meta.title,
    images: [meta.socialBanner],
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
    title: meta.title,
    card: "summary_large_image",
    images: [meta.socialBanner],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head />
      <body
        className={cn(
          "mx-auto min-h-screen max-w-3xl antialiased dark:bg-zinc-950 dark:text-gray-100",
          space_grotesk.className,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <main className="mx-4 flex min-h-screen flex-col justify-between px-2 md:px-0 lg:mx-auto">
            <Header />
            {children}
            <Footer />
          </main>
          <TailwindIndicator />
        </ThemeProvider>
        <GoogleAnalytics gaId={ENV.GOOGLE_ANALYTICS_ID} />
      </body>
    </html>
  );
}

import "./global.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { TailwindIndicator } from "@/components/tailwind-indicator";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://adarshaacharya.com.np"),
  title: {
    default: "Aadarsha Acharya",
    template: "%s | Aadarsha Acharya",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "mx-auto min-h-screen max-w-3xl antialiased dark:bg-zinc-950 dark:text-gray-100",
          inter.className,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="mx-4 mt-10 px-2 md:px-0 lg:mx-auto">
            <Header />
            {children}
            <Footer />
          </main>
          <TailwindIndicator />
        </ThemeProvider>
      </body>
    </html>
  );
}

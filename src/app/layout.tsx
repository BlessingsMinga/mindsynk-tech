import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/providers/theme-provider";

export const metadata: Metadata = {
  title: "MindSynk Technologies — Powering Progress Through Technology",
  description:
    "MindSynk Technologies is a B2B tech partner delivering software development, cloud computing, IT consultancy, digital marketing, data analytics, and design services from Lilongwe, Malawi.",
  keywords: [
    "MindSynk Technologies",
    "software development Malawi",
    "cloud computing",
    "IT consultancy",
    "digital marketing",
    "data analytics",
    "UI UX design",
    "Lilongwe tech company",
    "B2B technology partner",
  ],
  authors: [{ name: "MindSynk Technologies" }],
  icons: {
    icon: "/MindSynk_Full.png",
    apple: "/MindSynk_Full.png",
  },
  openGraph: {
    title: "MindSynk Technologies — Powering Progress Through Technology",
    description:
      "A B2B technology partner delivering software, cloud, data, and design solutions that move your business forward.",
    url: "https://mindsynk.tech",
    siteName: "MindSynk Technologies",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MindSynk Technologies",
    description: "Powering Progress Through Technology",
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
        className="antialiased bg-background text-foreground"
      >
        <a
          href="#main-content"
          className="sr-only z-[100] rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}

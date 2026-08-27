import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/providers/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
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

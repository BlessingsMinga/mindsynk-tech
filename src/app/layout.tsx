import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { services, companyInfo } from "@/lib/data";

const SITE_URL = "https://mindsynk.tech";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#organization`,
      name: companyInfo.name,
      slogan: companyInfo.tagline,
      url: SITE_URL,
      logo: `${SITE_URL}/MindSynk_Full.png`,
      image: `${SITE_URL}/og.png`,
      description:
        "MindSynk Technologies is a Malawian technology partnership delivering software development, cloud computing, IT consultancy, digital marketing, data analytics, and design services remotely across Malawi and beyond.",
      email: companyInfo.email,
      priceRange: "$$",
      areaServed: ["Malawi", "Southern Africa"],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        email: companyInfo.email,
        availableLanguage: "English",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Services",
        itemListElement: services.map((service) => ({
          "@type": "Offer",
          name: service.title,
          description: service.short,
        })),
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: companyInfo.name,
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "MindSynk Technologies — Powering Progress Through Technology",
    template: "%s | MindSynk Technologies",
  },
  description:
    "MindSynk Technologies is a Malawian technology partnership delivering practical digital solutions remotely across Malawi and beyond.",
  keywords: [
    "MindSynk Technologies",
    "software development Malawi",
    "cloud computing",
    "IT consultancy",
    "digital marketing",
    "data analytics",
    "UI UX design",
    "Malawi technology partnership",
    "SME technology partner",
  ],
  authors: [{ name: "MindSynk Technologies" }],
  creator: "MindSynk Technologies",
  icons: {
    icon: "/MindSynk_Full.png",
    apple: "/MindSynk_Full.png",
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "MindSynk Technologies — Powering Progress Through Technology",
    description:
      "Practical software, cloud, data, design, and marketing solutions for organisations across Malawi and beyond.",
    url: SITE_URL,
    siteName: "MindSynk Technologies",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "MindSynk Technologies — Powering Progress Through Technology",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MindSynk Technologies",
    description: "Powering Progress Through Technology",
    images: ["/og.png"],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#14152a" },
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
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

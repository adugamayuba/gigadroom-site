import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const siteUrl = "https://www.gigadroom.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Gigadroom — AI Systems, Digital Products & Consulting",
    template: "%s | Gigadroom",
  },

  description:
    "Gigadroom is a full-service consulting firm specialising in AI systems, digital presence, product design, and end-to-end app & web development. From idea to reality — we build what ambitious businesses need to lead.",

  keywords: [
    "AI consulting firm",
    "AI systems for business",
    "digital transformation consulting",
    "product design agency",
    "app development company",
    "web development agency",
    "end-to-end product delivery",
    "digital presence strategy",
    "machine learning consulting",
    "SaaS development",
    "startup consulting",
    "business automation",
    "Gigadroom",
    "Softdroom Holdings",
    "technology consulting",
    "digital strategy",
    "MVP development",
    "cloud infrastructure",
    "UX design agency",
  ],

  authors: [{ name: "Gigadroom", url: siteUrl }],
  creator: "Gigadroom",
  publisher: "Gigadroom — A Softdroom Holdings Company",

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

  alternates: {
    canonical: siteUrl,
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Gigadroom",
    title: "Gigadroom — AI Systems, Digital Products & Consulting",
    description:
      "From idea to reality. We build AI systems, digital infrastructure, and end-to-end products for businesses ready to lead. Full-service consulting & delivery.",
    images: [
      {
        url: `${siteUrl}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "Gigadroom — From Idea to Reality",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Gigadroom — AI Systems, Digital Products & Consulting",
    description:
      "From idea to reality. We build AI systems, digital infrastructure, and end-to-end products for businesses ready to lead.",
    images: [`${siteUrl}/opengraph-image`],
    creator: "@gigadroom",
    site: "@gigadroom",
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },

  category: "technology",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Gigadroom",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/logo.png`,
      },
      description:
        "Gigadroom is a full-service consulting firm specialising in AI systems, digital presence, product design, and end-to-end app and web development.",
      email: "hi@gigadroom.com",
      telephone: "+12763000906",
      parentOrganization: {
        "@type": "Organization",
        name: "Softdroom Holdings",
        url: "https://www.softdroom.com",
      },
      sameAs: ["https://www.softdroom.com"],
      areaServed: "Worldwide",
      knowsAbout: [
        "Artificial Intelligence",
        "Machine Learning",
        "Web Development",
        "Mobile App Development",
        "Product Design",
        "Digital Transformation",
        "Cloud Infrastructure",
        "Business Automation",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Gigadroom",
      description:
        "From idea to reality. AI systems, digital products, and end-to-end consulting.",
      publisher: { "@id": `${siteUrl}/#organization` },
    },
    {
      "@type": "ProfessionalService",
      "@id": `${siteUrl}/#service`,
      name: "Gigadroom",
      url: siteUrl,
      telephone: "+12763000906",
      email: "hi@gigadroom.com",
      priceRange: "$$",
      serviceType: [
        "AI Consulting",
        "Digital Transformation",
        "Product Design",
        "App Development",
        "Web Development",
        "Growth Strategy",
      ],
      areaServed: {
        "@type": "Place",
        name: "Worldwide",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} scroll-smooth`}>
      <head>
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-white text-[#0F0F0F] antialiased">
        {children}
      </body>
    </html>
  );
}

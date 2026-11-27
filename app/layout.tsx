import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/site.config";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — Obscura Digital Atelier | Kaushal Sharma & Akhilesh Sharma`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Sharma Web Studio",
    "Kaushal Sharma",
    "Akhilesh Sharma",
    "Obscura Digital Atelier",
    "Creative Technology Agency",
    "Next.js Web Development",
    "Three.js 3D Web Design",
    "Local SEO Moradabad",
    "High Performance Websites India",
    "WhatsApp Lead Funnels",
    "Doctor Clinic Website",
    "Restaurant Digital Menu",
  ],
  authors: [
    { name: "Kaushal Sharma", url: "mailto:kaushal.sharma.aiml@gmail.com" },
    { name: "Akhilesh Sharma", url: "mailto:sh2005.akhilesh@gmail.com" },
  ],
  creator: "Sharma Web Studio",
  publisher: "Sharma Web Studio",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    title: `${siteConfig.name} — Obscura Digital Atelier`,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — Obscura Digital Atelier`,
    description: siteConfig.description,
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "name": siteConfig.name,
    "description": siteConfig.description,
    "url": siteConfig.url,
    "telephone": siteConfig.contact.phone,
    "email": siteConfig.contact.email,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Moradabad",
      "addressRegion": "Uttar Pradesh",
      "addressCountry": "IN",
    },
    "founder": siteConfig.founders.map((f) => ({
      "@type": "Person",
      "name": f.name,
      "jobTitle": f.role,
      "email": f.email,
      "telephone": f.phone,
    })),
    "priceRange": "₹₹",
    "openingHours": "Mo-Sa 09:00-20:00",
    "sameAs": [
      siteConfig.url,
    ],
  };

  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>✦</text></svg>" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&family=Sora:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased min-h-screen bg-[#F7F8F9] dark:bg-[#101112] text-[#101112] dark:text-[#F5F4F0] flex flex-col selection:bg-[#C5F36A] selection:text-[#101112] font-sans transition-colors duration-200">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/site.config";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Modern Websites for Local Businesses by Kaushal Sharma & Akhilesh Sharma`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Local Business Website Developer",
    "Kaushal Sharma",
    "Akhilesh Sharma",
    "Website for Local Shop",
    "Doctor Clinic Website",
    "Restaurant Online Menu Website",
    "Google Maps SEO for Business",
    "Affordable Website Development India",
    "Moradabad Web Design",
    "WhatsApp Business Integration",
    "Mobile Friendly Business Website",
  ],
  authors: [
    { name: "Kaushal Sharma" },
    { name: "Akhilesh Sharma" },
  ],
  creator: "Sharma Web Studio",
  publisher: "Sharma Web Studio",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    title: `${siteConfig.name} - We Build Websites for Local Businesses`,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | High-Converting Local Business Websites`,
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
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🚀</text></svg>" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased min-h-screen bg-[#070b14] text-slate-100 flex flex-col selection:bg-blue-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}

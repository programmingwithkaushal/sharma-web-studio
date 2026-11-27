export interface Founder {
  name: string;
  role: string;
  position: string;
  email: string;
  phone: string;
  bio: string;
  avatar: string;
  badge: string;
  specialties: string[];
}

export interface PricingPlan {
  id: string;
  name: string;
  badge?: string;
  price: string;
  priceNumber: number;
  description: string;
  features: string[];
  deliveryTime: string;
  popular?: boolean;
}

export const siteConfig = {
  name: "Sharma Web Studio",
  tagline: "We Don't Just Build Websites. We Build Digital Advantages.",
  description:
    "Founded by Kaushal Sharma & Akhilesh Sharma. High-performance websites, immersive experiences and intelligent digital solutions for businesses ready to grow.",
  url: "https://sharma-web-studio.vercel.app",
  contact: {
    phone: "+91 9389463924",
    phoneSecondary: "+91 7668614225",
    whatsapp: "+919389463924",
    email: "kaushal.sharma.aiml@gmail.com",
    emailSecondary: "sh2005.akhilesh@gmail.com",
    city: "Moradabad, Uttar Pradesh & Pan-India",
    address: "Moradabad, UP, India",
    workingHours: "Mon - Sat: 9:00 AM - 8:00 PM IST",
  },
  founders: [
    {
      name: "Kaushal Sharma",
      role: "Co-Founder & Technology / Engineering Lead",
      position: "Technology / Engineering Lead",
      email: "kaushal.sharma.aiml@gmail.com",
      phone: "+91 9389463924",
      badge: "Architecture & Systems",
      bio: "Software engineer specializing in high-performance web applications, Next.js App Router architecture, 3D WebGL experiences, and technical Local SEO.",
      avatar: "KS",
      specialties: ["Next.js 15 & React 19", "Three.js WebGL", "Core Web Vitals", "Schema.org Local SEO"],
    },
    {
      name: "Akhilesh Sharma",
      role: "Co-Founder & Strategy / Growth Lead",
      position: "Strategy / Growth Lead",
      email: "sh2005.akhilesh@gmail.com",
      phone: "+91 7668614225",
      badge: "Strategy & Conversion",
      bio: "Client growth strategist focused on business positioning, high-converting customer funnels, WhatsApp lead generation, and local market trust.",
      avatar: "AS",
      specialties: ["Client Strategy", "Conversion Funnels", "WhatsApp Lead Engines", "Local Brand Positioning"],
    },
  ] as Founder[],
  stats: [
    { value: "5-7 Days", label: "Average Delivery Window" },
    { value: "100%", label: "Mobile & Google Maps Optimized" },
    { value: "Direct", label: "Founder Access (No Intermediaries)" },
    { value: "Zero", label: "Generic Cookie-Cutter Templates" },
  ],
  services: [
    {
      id: "local-websites",
      title: "Custom Web Engineering",
      description: "Tailored high-performance web applications crafted with Next.js for clinics, fine dining, boutiques, academies, and service firms.",
      icon: "Globe",
    },
    {
      id: "google-presence",
      title: "Google Search & Local SEO",
      description: "Semantic Schema.org citation markup and Google Business Profile guidance so high-intent local buyers find you first.",
      icon: "MapPin",
    },
    {
      id: "whatsapp-funnels",
      title: "WhatsApp Lead & Booking Engines",
      description: "Frictionless 1-click consultation requests and booking pathways routing qualified customers directly to your phone.",
      icon: "MessageCircle",
    },
    {
      id: "speed-mobile",
      title: "Sub-Second Mobile Performance",
      description: "Lightweight, responsive architectures engineered for instantaneous rendering on mobile networks across India.",
      icon: "Zap",
    },
    {
      id: "digital-catalogs",
      title: "Interactive Catalogs & Lookbooks",
      description: "Showcase menus, product collections, or treatment catalogs with real-time WhatsApp inquiry links.",
      icon: "ShoppingBag",
    },
    {
      id: "maintenance",
      title: "Direct Founder Maintenance",
      description: "Ongoing cloud security, domain management, SSL updates, and code enhancements directly from Kaushal & Akhilesh.",
      icon: "ShieldCheck",
    },
  ],
  pricingPlans: [
    {
      id: "starter",
      name: "Starter Online Presence",
      price: "₹6,999",
      priceNumber: 6999,
      description: "Perfect for single-location shops, individual practitioners, or solo professionals wanting verified Google visibility.",
      deliveryTime: "3 to 4 Days",
      popular: false,
      features: [
        "1-Page Fast Landing Website",
        "100% Mobile & Tablet Friendly",
        "Direct Click-to-Call & WhatsApp Chat",
        "Google Maps Location Integration",
        "Social Media Links & Business Hours",
        "Free 1 Year SSL Security Certificate",
        "Basic Google Search Indexing Setup",
      ],
    },
    {
      id: "growth",
      name: "Complete Business Growth",
      badge: "MOST POPULAR FOR LOCAL BUSINESSES",
      price: "₹14,999",
      priceNumber: 14999,
      description: "The complete multi-page digital infrastructure engineered for local authority, leads, and customer bookings.",
      deliveryTime: "5 to 7 Days",
      popular: true,
      features: [
        "Up to 5 Custom Pages (Home, About, Services, Gallery, Contact)",
        "Advanced Local SEO & Schema.org Setup",
        "Interactive Appointment / Inquiry Form",
        "Online Menu / Service Catalog Display",
        "Customer Reviews & Testimonial Showcase",
        "Google Business Profile Guidance",
        "Blazing Fast Sub-Second Mobile Performance",
        "1 Month Free Founder Support & Updates",
      ],
    },
    {
      id: "premium",
      name: "Custom E-Commerce & Catalog",
      price: "₹24,999",
      priceNumber: 24999,
      description: "For boutiques, grocery stores, or expanding brands wanting product orders, payment gateways, and custom workflows.",
      deliveryTime: "10 to 14 Days",
      popular: false,
      features: [
        "Full Multi-Page Website + Dynamic Product Catalog",
        "Online Order Management via WhatsApp / Email",
        "Payment Gateway Integration (UPI / Razorpay / QR)",
        "Dynamic Filtering, Search, & Categories",
        "Full Speed & Search Engine Optimization",
        "Google Analytics & Visitor Traffic Dashboard",
        "Priority 3 Months Direct Founder Support",
      ],
    },
  ] as PricingPlan[],
  faqs: [
    {
      question: "Why does my local business need a website if I already have Instagram or WhatsApp?",
      answer:
        "When high-intent customers need a service urgently (like finding a doctor, an interior designer, a restaurant, or an electrician), they search on Google, not Instagram. A Google-indexed website puts your business at the very top of local search results with your phone number, map directions, and customer reviews. Plus, a website belongs 100% to you and never depends on algorithm changes.",
    },
    {
      question: "How long will it take for our website to be ready and live on Google?",
      answer:
        "Our standard starter website is ready in 3 to 4 business days. The Complete Growth package takes 5 to 7 business days. We handle domain configuration, hosting setup, SEO schema, and Google Search Console submission for you.",
    },
    {
      question: "Do I need technical skills or coding knowledge to manage the website?",
      answer:
        "None at all. Kaushal Sharma and Akhilesh Sharma build everything turnkey for you. When you need to update phone numbers, add photos, change prices, or post new festival offers, just shoot us a message on WhatsApp and we handle it directly for you.",
    },
    {
      question: "Will my website look good on mobile phones?",
      answer:
        "Over 85% of your local customers will visit your website using their smartphones. Every website we build is 100% mobile-first, ensuring super-fast loading, big touch-friendly buttons, and effortless 1-tap WhatsApp and phone call buttons.",
    },
    {
      question: "What happens after the website is launched? Is there any ongoing support?",
      answer:
        "Yes. Unlike freelance platforms where developers disappear after delivery, we are your long-term partners. You get direct access to founders Kaushal Sharma (+91 9389463924) and Akhilesh Sharma (+91 7668614225) via phone and WhatsApp for ongoing support and updates.",
    },
    {
      question: "How does the payment process work?",
      answer:
        "We operate on 100% transparent terms: 50% advance to initiate the project and configure cloud infrastructure, and the remaining 50% only after you review the interactive staging website and approve everything before final public Google launch.",
    },
  ],
  industries: [
    {
      id: "clinic",
      name: "Clinics & Doctors",
      icon: "Stethoscope",
      headline: "Let Patients Find You on Google & Book Appointments Instantly",
      features: ["Doctor profiles & clinic timings", "Direct WhatsApp appointment request", "List of treatments & consultation fees", "Google Maps location with parking info"],
      mockupPreview: {
        title: "City Health Clinic & Dental Care",
        subtitle: "Trusted by 5,000+ Families in Civil Lines",
        stats: "4.9 ★ (240+ Google Reviews)",
        ctaText: "Book Appointment via WhatsApp",
      },
    },
    {
      id: "restaurant",
      name: "Restaurants & Cafes",
      icon: "Utensils",
      headline: "A Mouth-Watering Digital Menu That Drives Dine-Ins & Direct Orders",
      features: ["Visual photo menu with prices", "Save 30% Swiggy/Zomato commission with direct WhatsApp orders", "Table reservation inquiry", "Party hall / catering booking"],
      mockupPreview: {
        title: "Royal Spice Kitchen & Cafe",
        subtitle: "Authentic North Indian & Tandoor Delicacies",
        stats: "Direct WhatsApp Delivery • 0% Commission",
        ctaText: "View Full Menu & Order Now",
      },
    },
    {
      id: "retail",
      name: "Retail & Boutiques",
      icon: "ShoppingBag",
      headline: "Turn Your Local Storefront into a 24/7 Digital Catalog",
      features: ["Showcase new seasonal arrivals", "Direct 'Check Availability' WhatsApp button", "Store location, photos, & festive offers", "Brand credibility beyond social media"],
      mockupPreview: {
        title: "Elegance Fashion & Sarees",
        subtitle: "Exclusive Festive & Bridal Wear Collection",
        stats: "New Collection Live • Visit Our Store",
        ctaText: "Inquire on WhatsApp",
      },
    },
    {
      id: "coaching",
      name: "Coaching & Academies",
      icon: "GraduationCap",
      headline: "Attract Serious Students & Parents with Verified Results",
      features: ["Batch schedules & fee structures", "Toppers gallery & parent testimonials", "Instant demo class registration form", "Download syllabus / notes preview"],
      mockupPreview: {
        title: "Target IIT-JEE & NEET Academy",
        subtitle: "10+ Years of Excellence • Proven Top Rankers",
        stats: "New Batches Starting Next Monday",
        ctaText: "Register for Free Demo Class",
      },
    },
    {
      id: "services",
      name: "Contractors & Home Services",
      icon: "Wrench",
      headline: "The First Name Homeowners Call for Repairs & Renovations",
      features: ["Verified before/after work gallery", "Emergency service call button", "Transparent pricing guide & estimates", "Customer trust badges & license details"],
      mockupPreview: {
        title: "Sharma Interiors & Home Renovations",
        subtitle: "Complete Modular Kitchens & Interior Solutions",
        stats: "150+ Projects Completed Across City",
        ctaText: "Get Free Site Inspection",
      },
    },
  ],
};

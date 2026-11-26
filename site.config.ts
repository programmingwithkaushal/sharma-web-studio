export interface Founder {
  name: string;
  role: string;
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
  tagline: "We Build High-Converting Websites for Local Businesses",
  description:
    "Founded by Kaushal Sharma & Akhilesh Sharma. We help local shops, clinics, restaurants, and service providers dominate Google, attract more walk-in customers, and grow sales through modern, lightning-fast websites.",
  url: "https://sharma-web-studio.vercel.app",
  contact: {
    phone: "+91 98765 43210", // Default placeholder, user can update
    whatsapp: "+919876543210",
    email: "contact@sharmawebstudio.com",
    city: "Moradabad, Uttar Pradesh & Pan-India",
    address: "Moradabad, UP, India",
    workingHours: "Mon - Sat: 9:00 AM - 8:00 PM IST",
  },
  founders: [
    {
      name: "Kaushal Sharma",
      role: "Co-Founder & Lead Tech Architect",
      badge: "Tech & Systems",
      bio: "Full-stack engineer passionate about ultra-fast web architectures, clean design, and technical SEO that puts businesses at the top of Google Search.",
      avatar: "KS",
      specialties: ["Next.js & React", "High-Performance Code", "Local SEO & Speed", "Custom Features & Automation"],
    },
    {
      name: "Akhilesh Sharma",
      role: "Co-Founder & Growth Strategist",
      badge: "Strategy & Client Success",
      bio: "Client growth specialist dedicated to turning local businesses into trusted neighborhood brands with high-converting layouts, customer psychology, and WhatsApp funnels.",
      avatar: "AS",
      specialties: ["Client Strategy", "Local Lead Funnels", "Brand Positioning", "24/7 Client Support"],
    },
  ] as Founder[],
  stats: [
    { value: "5-7 Days", label: "Average Delivery Time" },
    { value: "100%", label: "Mobile & Google Maps Optimized" },
    { value: "24/7", label: "Direct Founder Support" },
    { value: "0", label: "Technical Jargon - 100% Guided" },
  ],
  services: [
    {
      id: "local-websites",
      title: "Local Business Websites",
      description: "Custom, lightning-fast websites crafted specifically for retail shops, clinics, cafes, salons, and local agencies.",
      icon: "Globe",
    },
    {
      id: "google-presence",
      title: "Google Search & Maps (Local SEO)",
      description: "Structured Schema data and Google Business Profile setup so neighborhood customers find your phone number and directions immediately.",
      icon: "MapPin",
    },
    {
      id: "whatsapp-funnels",
      title: "1-Click WhatsApp Inquiries & Booking",
      description: "Instant chat buttons and pre-filled order/booking messages that turn casual website visitors into confirmed customers directly on your phone.",
      icon: "MessageCircle",
    },
    {
      id: "speed-mobile",
      title: "Mobile-First Ultra Fast Speed",
      description: "Over 85% of local customers browse on mobile. We build websites that load in under 1.5 seconds on any network.",
      icon: "Zap",
    },
    {
      id: "digital-catalogs",
      title: "Online Menus & Digital Catalogs",
      description: "Showcase your food menu, clinic services, or retail product catalog with prices, pictures, and instant order requests.",
      icon: "ShoppingBag",
    },
    {
      id: "maintenance",
      title: "Hassle-Free Maintenance & Support",
      description: "We take care of domain, hosting, updates, and backups so you can focus 100% on serving your customers.",
      icon: "ShieldCheck",
    },
  ],
  pricingPlans: [
    {
      id: "starter",
      name: "Starter Online Presence",
      price: "₹6,999",
      priceNumber: 6999,
      description: "Perfect for single-location shops, individual doctors, advocates, or salons wanting a professional presence on Google.",
      deliveryTime: "3 to 4 Days",
      popular: false,
      features: [
        "1-Page Fast Landing Website",
        "100% Mobile & Tablet Friendly",
        "Direct Click-to-Call & WhatsApp Chat",
        "Google Maps Location Integration",
        "Social Media Links & Business Hours",
        "Free 1 Year SSL Security Certificate",
        "Basic Google Search Indexing",
      ],
    },
    {
      id: "growth",
      name: "Complete Business Growth",
      badge: "MOST POPULAR FOR LOCAL BUSINESSES",
      price: "₹14,999",
      priceNumber: 14999,
      description: "The gold standard for clinics, restaurants, coaching centers, and contractors needing multiple pages and inquiries.",
      deliveryTime: "5 to 7 Days",
      popular: true,
      features: [
        "Up to 5 Custom Pages (Home, About, Services, Gallery, Contact)",
        "Advanced Local SEO & Schema.org Setup",
        "Interactive Appointment / Inquiry Form",
        "Online Menu / Service Catalog Display",
        "Customer Reviews & Testimonial Showcase",
        "Google My Business Profile Guidance",
        "Blazing Fast 95+ PageSpeed Score",
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
        "Full Multi-Page Website + Product Catalog",
        "Online Order Management via WhatsApp / Email",
        "Payment Gateway Integration (UPI / Razorpay / QR)",
        "Dynamic Filtering, Search, & Categories",
        "Full Speed & SEO Optimization",
        "Google Analytics & Visitor Traffic Dashboard",
        "Priority 3 Months Direct Founder Support",
      ],
    },
  ] as PricingPlan[],
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
  faqs: [
    {
      question: "Why does my local business need a website if I already have Instagram or WhatsApp?",
      answer:
        "When high-intent customers need a service urgently (like finding a doctor, an interior designer, a restaurant, or an electrician), they search on Google, not Instagram. A Google-indexed website puts your business at the very top of local search results with your phone number, map directions, and customer reviews. Plus, a website belongs 100% to you and never depends on algorithm changes.",
    },
    {
      question: "How long will it take for our website to be ready and live on Google?",
      answer:
        "Our standard starter website is ready in just 3 to 5 business days! Multi-page business packages take 5 to 7 days. We handle domain registration, hosting configuration, SEO setup, and Google indexing submission for you.",
    },
    {
      question: "Do I need technical skills or coding knowledge to run the website?",
      answer:
        "None at all! Kaushal Sharma and Akhilesh Sharma build everything turnkey for you. When you need to update phone numbers, add photos, change prices, or post new festival offers, just shoot us a message on WhatsApp and we handle it directly for you.",
    },
    {
      question: "Will my website look good on mobile phones?",
      answer:
        "Over 85% of your local customers will visit your website using their smartphones. Every website we build is 100% mobile-first, ensuring super-fast loading, big touch-friendly buttons, and effortless 1-tap WhatsApp and phone call buttons.",
    },
    {
      question: "What happens after the website is launched? Is there any ongoing support?",
      answer:
        "Yes! Unlike freelance platforms where developers disappear after delivery, we are your local partners. You get direct access to founders Kaushal Sharma and Akhilesh Sharma via phone and WhatsApp for ongoing support, security updates, and performance checks.",
    },
    {
      question: "How does the payment process work?",
      answer:
        "We believe in 100% transparency: 50% advance to start the project and secure domain/hosting, and the remaining 50% only after you review the demo website and approve everything before final Google launch.",
    },
  ],
};

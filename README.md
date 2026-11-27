# 🚀 Sharma Web Studio — Official Startup Agency Website
**Founded by Kaushal Sharma & Akhilesh Sharma**

> Modern, high-performance web agency website built specifically to help local businesses (clinics, restaurants, shops, coaching academies, contractors) get discovered on Google, attract walk-in clients, and receive direct WhatsApp leads.

---

## 🌟 Key Highlights & Features

1. **Founders Spotlight**:
   - Dedicated trust section featuring **Kaushal Sharma** (Lead Tech Architect) and **Akhilesh Sharma** (Growth & Client Success Strategist).
   - Personal founder pledge: Direct communication, 100% price transparency, and satisfaction guarantee.

2. **Interactive Local Business Industry Demos**:
   - Instant switcher showcasing tailored mockups for:
     - 🏥 **Doctors & Clinics**: Appointment requests, doctor profiles, treatments list.
     - 🍽️ **Restaurants & Cafes**: 0% commission digital menu with direct WhatsApp delivery orders.
     - 🛍️ **Retail & Boutiques**: Digital product showcase and seasonal arrivals catalog.
     - 📚 **Coaching & Academies**: Course batches, toppers list, and demo class registrations.
     - 🔧 **Services & Contractors**: Before/after work portfolio and free estimate requests.

3. **Interactive Website Cost & ROI Estimator**:
   - Prospective clients choose their website tier and add-ons (Google Maps SEO, WhatsApp booking, domain + hosting, fast-track delivery).
   - Generates a live price quote in ₹ (INR) and automatically pre-formats a 1-click WhatsApp message to Kaushal & Akhilesh.

4. **Engineered for Google Publishing & Local SEO**:
   - Pre-configured with **Schema.org** (`LocalBusiness` & `ProfessionalService` JSON-LD) for rich search snippets.
   - Dynamic `sitemap.xml` and `robots.txt` ready for Google Search Console submission.
   - Full OpenGraph and Twitter card metadata for crisp social media previews.
   - 100% Mobile-first responsive layout with sub-second page load speeds.

5. **Direct Lead Capture**:
   - Multi-channel inquiry options: Interactive contact form, 1-tap WhatsApp consultation, direct phone call, and email.

---

## 💻 Tech Stack
- **Framework**: Next.js 15 (React 19, App Router)
- **Styling**: Tailwind CSS, Modern Glassmorphism & Ambient Gradients
- **Icons**: Lucide React
- **Language**: TypeScript

---

## 🛠️ Quick Start Guide

### 1. Run Development Server locally
```bash
cd /home/kaushal-sharma/sharma-web-studio
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 2. Build for Production
```bash
npm run build
```

### 3. Run Production Server
```bash
npm run start
```

---

## 🌐 How to Publish on Google (Step-by-Step)

### Step 1: Deploy the Website (Free & Fast)
You can deploy this site in under 3 minutes with zero server costs:
- **Option A (Vercel - Recommended)**:
  1. Push this folder to GitHub.
  2. Go to [vercel.com](https://vercel.com) and import your repository.
  3. Click **Deploy**. Vercel will give you a live HTTPS URL instantly.
- **Option B (Netlify / Firebase / Cloudflare Pages)**:
  Compatible with all modern web hosts.

### Step 2: Connect Your Custom Domain
1. Buy your domain (e.g., `sharmawebstudio.com` or `sharmaweb.in`) on GoDaddy, Namecheap, or Hostinger.
2. In Vercel or your host settings, add your custom domain and update DNS A/CNAME records as guided.

### Step 3: Submit to Google Search Console
1. Go to [Google Search Console](https://search.google.com/search-console).
2. Add your website property (e.g., `https://sharmawebstudio.com`).
3. Under **Sitemaps**, submit:
   ```
   https://sharmawebstudio.com/sitemap.xml
   ```
4. Googlebot will crawl your site within 24-48 hours and begin indexing your agency for local search queries!

### Step 4: Create a Google Business Profile
1. Go to [Google Business Profile](https://business.google.com).
2. Register **Sharma Web Studio** with your address, phone number, and website link.
3. Once verified, you will appear directly on Google Maps when clients search for *"Website developer near me"*.

---

## ⚙️ How to Update Your Phone Number & Email
All phone numbers, WhatsApp links, email addresses, and services are managed in a single file:
👉 **`site.config.ts`**

Simply open `site.config.ts` and change:
```ts
contact: {
  phone: "+91 9389463924",       // Your actual calling number
  phoneSecondary: "+91 7668614225",
  whatsapp: "+919389463924",       // Your WhatsApp number (with country code)
  email: "kaushal.sharma.aiml@gmail.com",
  city: "Moradabad, Uttar Pradesh & Pan-India",
}
```
All buttons and links on the entire website will update automatically!

---
© Sharma Web Studio • Co-Founded by **Kaushal Sharma** & **Akhilesh Sharma**

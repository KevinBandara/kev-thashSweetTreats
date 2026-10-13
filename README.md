# 🎂 Kev & Thash Sweet Treats — Official Website

> **Crafted with Love, Baked to Perfection**  
> Premium custom cakes, cupcakes, brownies & sweet treats handcrafted in **Malamulla, Panadura, Sri Lanka**.

---

## 🌟 Features

- **🍰 Brand Aligned Design**: Pastel pink & chocolate brown theme crafted around the official brand logo.
- **🇱🇰 Localized for Sri Lanka**:
  - Located in **Malamulla, Panadura**.
  - **Self-Pickup Only** (fresh cake pickup directly coordinated).
  - All prices displayed in **Sri Lankan Rupees (LKR / Rs. / රු.)**.
  - Verified social proof: **10+ Happy Customers**, **5.0★ Rating**.
- **🌐 Bilingual Support (English & Sinhala)**:
  - Instant toggle between **English** and polite, natural **සිංහල**.
  - Persisted user language preference across visits.
- **💬 Direct WhatsApp Integration**:
  - Interactive order enquiry form that validates details and instantly opens `wa.me/94718511165` with pre-filled order specs.
  - Quick order buttons on each menu item and celebration package.
  - Floating WhatsApp action button with pulse animation.
- **🔍 Advanced SEO & OpenGraph**:
  - Next.js dynamic OpenGraph banner (`/opengraph-image`).
  - Google Schema.org `LocalBusiness / Bakery` JSON-LD with geo-coordinates for Panadura.
  - Auto-generated `sitemap.xml` and `robots.txt`.
- **⚙️ 100% Configurable via `.env.local`**:
  - Change phone number, email, address, pickup policy, or stats anytime without editing code.

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment Variables
Copy `.env.example` to `.env.local` (already configured for Sri Lanka):
```bash
cp .env.example .env.local
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production
```bash
npm run build
npm run start
```

---

## ⚙️ Environment Variables (`.env.local`)

| Variable | Description | Default |
|---|---|---|
| `NEXT_PUBLIC_BUSINESS_NAME` | Business name | `Kev & Thash Sweet Treats` |
| `NEXT_PUBLIC_PHONE` | Phone for calls | `0718511165` |
| `NEXT_PUBLIC_PHONE_DISPLAY` | Phone formatted | `+94 71 851 1165` |
| `NEXT_PUBLIC_WHATSAPP_NUMBER`| WhatsApp link number (with 94) | `94718511165` |
| `NEXT_PUBLIC_EMAIL` | Contact email | `kevandthash@gmail.com` |
| `NEXT_PUBLIC_ADDRESS` | Address (EN) | `Malamulla, Panadura, Sri Lanka` |
| `NEXT_PUBLIC_ADDRESS_SI` | Address (SI) | `මලමුල්ල, පානදුර, ශ්‍රී ලංකාව` |
| `NEXT_PUBLIC_HAPPY_CUSTOMERS`| Social proof stat | `10+` |
| `NEXT_PUBLIC_CURRENCY` | Currency code | `LKR` |
| `NEXT_PUBLIC_CURRENCY_SYMBOL`| Currency symbol | `Rs.` |
| `NEXT_PUBLIC_SITE_URL` | Live production URL | `https://kevandthashsweets.vercel.app` |

---

## 🌐 Deploy to Vercel

1. Push this repository to GitHub:
   ```bash
   git remote add origin https://github.com/KevinBandara/kev-thashSweetTreats.git
   git branch -M main
   git push -u origin main
   ```
2. Import the repository in [Vercel](https://vercel.com).
3. Set the project name to `kevandthashsweets` (domain: `https://kevandthashsweets.vercel.app`).
4. Add the environment variables from `.env.example`.
5. Click **Deploy**!

import type { Metadata, Viewport } from 'next';
import { Playfair_Display, Lato } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/lib/LanguageContext';

/* ============================================================
   GOOGLE FONTS
   ============================================================ */
const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
  preload: true,
});

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
  style: ['normal', 'italic'],
  variable: '--font-lato',
  display: 'swap',
  preload: true,
});

/* ============================================================
   SITE METADATA & SEO
   ============================================================ */
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://kevandthashsweets.vercel.app';
const phone = process.env.NEXT_PUBLIC_PHONE ?? '0718511165';
const email = process.env.NEXT_PUBLIC_EMAIL ?? 'kevandthash@gmail.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: 'Kev & Thash Sweet Treats | Custom Cakes & Desserts in Panadura, Sri Lanka',
    template: '%s | Kev & Thash Sweet Treats',
  },

  description:
    'Kev & Thash Sweet Treats crafts premium custom cakes, cupcakes, brownies, and dessert jars for birthdays, weddings, and special events. Handcrafted with love in Malamulla, Panadura, Sri Lanka. Order via WhatsApp (Self-pickup).',

  keywords: [
    'custom cakes Panadura',
    'birthday cake Sri Lanka',
    'wedding cake Panadura',
    'cake shops in Panadura',
    'cupcakes Panadura Sri Lanka',
    'Malamulla Panadura cake',
    'Kev and Thash Sweet Treats',
    'cake order WhatsApp Sri Lanka',
    'brownies Panadura',
    'custom cake baker Sri Lanka',
    'LKR cake prices',
    'කේක් පානදුර',
    'උපන්දින කේක් ශ්‍රී ලංකා',
  ],

  authors: [{ name: 'Kev & Thash Sweet Treats', url: siteUrl }],
  creator: 'Kev & Thash Sweet Treats',
  publisher: 'Kev & Thash Sweet Treats',

  /* --- Open Graph --- */
  openGraph: {
    type: 'website',
    locale: 'en_LK',
    url: siteUrl,
    siteName: 'Kev & Thash Sweet Treats',
    title: 'Kev & Thash Sweet Treats | Custom Cakes & Desserts in Panadura',
    description:
      'Handcrafted custom cakes, cupcakes & treats made with love in Malamulla, Panadura, Sri Lanka. 10+ happy customers. Order via WhatsApp for self-pickup.',
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Kev & Thash Sweet Treats — Malamulla, Panadura, Sri Lanka',
        type: 'image/png',
      },
      {
        url: `${siteUrl}/KevAndThashSweetTreatsLogo.png`,
        width: 800,
        height: 800,
        alt: 'Kev & Thash Sweet Treats Logo',
        type: 'image/png',
      },
    ],
  },

  /* --- Twitter / X Card --- */
  twitter: {
    card: 'summary_large_image',
    title: 'Kev & Thash Sweet Treats | Custom Cakes in Panadura',
    description:
      'Handcrafted custom cakes & desserts made with love in Malamulla, Panadura, Sri Lanka. Order via WhatsApp!',
    images: [`${siteUrl}/og-image.png`],
  },

  /* --- Robots --- */
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  /* --- Canonical & Alternates --- */
  alternates: {
    canonical: siteUrl,
    languages: {
      'en-LK': siteUrl,
      'si-LK': siteUrl,
    },
  },

  /* --- Icons --- */
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
      { url: '/KevAndThashSweetTreatsLogo.png', sizes: 'any' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    shortcut: '/favicon.ico',
  },

  /* --- App-specific --- */
  applicationName: 'Kev & Thash Sweet Treats',
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },

  category: 'food',
};

/* ============================================================
   VIEWPORT
   ============================================================ */
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FFF5F7' },
    { media: '(prefers-color-scheme: dark)', color: '#3D1A0A' },
  ],
  colorScheme: 'light',
};

/* ============================================================
   STRUCTURED DATA — JSON-LD (LocalBusiness / Bakery in Sri Lanka)
   ============================================================ */
const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['LocalBusiness', 'Bakery', 'FoodEstablishment'],
      '@id': `${siteUrl}/#business`,
      name: 'Kev & Thash Sweet Treats',
      alternateName: 'Kev & Thash Cakes',
      description:
        'Home-based cake and confectionery business crafting custom cakes, cupcakes, brownies, and dessert jars in Malamulla, Panadura, Sri Lanka.',
      url: siteUrl,
      telephone: `+94${phone.replace(/^0/, '')}`,
      email: email,
      image: `${siteUrl}/KevAndThashSweetTreatsLogo.png`,
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/KevAndThashSweetTreatsLogo.png`,
        width: 400,
        height: 400,
      },
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Malamulla',
        addressLocality: 'Panadura',
        postalCode: '12500',
        addressRegion: 'Western Province',
        addressCountry: 'LK',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 6.7132,
        longitude: 79.9074,
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          opens: '09:00',
          closes: '19:00',
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Sunday'],
          opens: '10:00',
          closes: '17:00',
        },
      ],
      priceRange: 'LKR 1,800 – LKR 30,000',
      currenciesAccepted: 'LKR',
      paymentAccepted: 'Cash, Bank Transfer',
      areaServed: [
        {
          '@type': 'City',
          name: 'Panadura',
        },
        {
          '@type': 'AdministrativeArea',
          name: 'Western Province, Sri Lanka',
        },
      ],
      hasMap: 'https://maps.google.com/?q=Malamulla+Panadura+Sri+Lanka',
      sameAs: [
        'https://instagram.com/kevandthashsweettreats',
        'https://facebook.com/kevandthashsweettreats',
        `https://wa.me/94${phone.replace(/^0/, '')}`,
      ],
      servesCuisine: ['Cakes', 'Desserts', 'Pastries', 'Cupcakes', 'Brownies'],
      menu: `${siteUrl}/#menu`,
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5.0',
        reviewCount: '12',
        bestRating: '5',
        worstRating: '1',
      },
      keywords:
        'custom cakes, birthday cake, wedding cake, cupcakes, brownies, Panadura, Malamulla, Sri Lanka, LKR',
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: 'Kev & Thash Sweet Treats',
      description: 'Custom cakes and sweet treats handcrafted with love in Panadura, Sri Lanka.',
      publisher: { '@id': `${siteUrl}/#business` },
      inLanguage: ['en-LK', 'si-LK'],
    },
  ],
};

/* ============================================================
   ROOT LAYOUT
   ============================================================ */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${lato.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* DNS-prefetch for WhatsApp */}
        <link rel="dns-prefetch" href="https://wa.me" />
        <link rel="dns-prefetch" href="https://maps.google.com" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>

      <body
        className={`
          ${lato.className}
          antialiased
          bg-[#FFF5F7]
          text-[#3D1A0A]
          overflow-x-hidden
        `}
      >
        {/* Skip to main content — Accessibility */}
        <a
          href="#main-content"
          className="
            sr-only focus:not-sr-only
            fixed top-4 left-4 z-[9999]
            bg-pink-600 text-white font-bold rounded-full text-sm px-4 py-2 shadow-lg
          "
        >
          Skip to main content
        </a>

        {/* Language Provider wrapping whole app */}
        <LanguageProvider>
          <main id="main-content">{children}</main>
        </LanguageProvider>
      </body>
    </html>
  );
}

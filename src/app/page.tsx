import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import MenuSection from '@/components/MenuSection';
import EventsSection from '@/components/EventsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export const metadata: Metadata = {
  title: 'Kev & Thash Sweet Treats | Custom Cakes & Desserts in Panadura, Sri Lanka',
  description:
    'Handcrafted custom cakes, cupcakes, brownies & sweet treats made with love in Malamulla, Panadura, Sri Lanka. Order via WhatsApp for birthdays, weddings, & celebrations. Convenient self-pickup.',
  keywords: [
    'custom cakes Panadura',
    'birthday cake Sri Lanka',
    'wedding cake Panadura',
    'cupcakes Panadura',
    'Malamulla Panadura cake',
    'Kev and Thash Sweet Treats',
    'cake order WhatsApp Sri Lanka',
    'brownies Panadura',
    'LKR cake prices',
    'කේක් පානදුර',
    'උපන්දින කේක් ශ්‍රී ලංකා',
  ],
  openGraph: {
    title: 'Kev & Thash Sweet Treats | Custom Cakes & Desserts in Panadura',
    description:
      'Handcrafted custom cakes & sweet treats for every occasion. Made with love in Malamulla, Panadura, Sri Lanka. Order via WhatsApp!',
    url: 'https://kevandthashsweets.vercel.app',
    siteName: 'Kev & Thash Sweet Treats',
    images: [
      {
        url: '/KevAndThashSweetTreatsLogo.png',
        width: 800,
        height: 800,
        alt: 'Kev & Thash Sweet Treats Logo',
      },
    ],
    locale: 'en_LK',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kev & Thash Sweet Treats | Panadura, Sri Lanka',
    description:
      'Custom cakes & sweet treats for every occasion in Malamulla, Panadura. Order via WhatsApp!',
    images: ['/KevAndThashSweetTreatsLogo.png'],
  },
};

export default function Home() {
  return (
    <div className="overflow-x-hidden min-h-screen flex flex-col">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <MenuSection />
      <EventsSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Kev & Thash Sweet Treats',
    short_name: 'Kev & Thash',
    description:
      'Handcrafted custom cakes, cupcakes & sweet treats made with love in Malamulla, Panadura, Sri Lanka.',
    start_url: '/',
    display: 'standalone',
    background_color: '#FFF5F7',
    theme_color: '#EC4899',
    icons: [
      {
        src: '/KevAndThashSweetTreatsLogo.png',
        sizes: 'any',
        type: 'image/png',
      },
      {
        src: '/icon.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/apple-icon.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}

/* ============================================================
   BUSINESS CONSTANTS
   Kev & Thash Sweet Treats — Malamulla, Panadura, Sri Lanka
   ============================================================ */

/* ------------------------------------------------------------
   CORE BUSINESS INFO (Configurable via environment variables)
   ------------------------------------------------------------ */
export const BUSINESS_NAME =
  process.env.NEXT_PUBLIC_BUSINESS_NAME ?? 'Kev & Thash Sweet Treats';

export const BUSINESS_TAGLINE =
  process.env.NEXT_PUBLIC_TAGLINE ?? 'Crafted with Love, Baked to Perfection';

export const BUSINESS_TAGLINE_SI =
  process.env.NEXT_PUBLIC_TAGLINE_SI ?? 'ආදරයෙන් නිමවා, රසයෙන් පිරිපුන්';

export const BUSINESS_SHORT_DESCRIPTION =
  'Handcrafted custom cakes, cupcakes & sweet treats made with love in Malamulla, Panadura, Sri Lanka. Freshly baked for birthdays, weddings & celebrations.';

export const PHONE = process.env.NEXT_PUBLIC_PHONE ?? '0718511165';
export const PHONE_DISPLAY =
  process.env.NEXT_PUBLIC_PHONE_DISPLAY ?? '+94 71 851 1165';
export const WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '94718511165';
export const EMAIL =
  process.env.NEXT_PUBLIC_EMAIL ?? 'kevandthash@gmail.com';

export const ADDRESS =
  process.env.NEXT_PUBLIC_ADDRESS ?? 'Malamulla, Panadura, Sri Lanka';
export const ADDRESS_SI =
  process.env.NEXT_PUBLIC_ADDRESS_SI ?? 'මලමුල්ල, පානදුර, ශ්‍රී ලංකාව';
export const LOCATION_CITY =
  process.env.NEXT_PUBLIC_LOCATION_CITY ?? 'Panadura';
export const LOCATION_AREA =
  process.env.NEXT_PUBLIC_LOCATION_AREA ?? 'Malamulla, Panadura';

// Precise Geo Location: 6°43'29.9"N 79°56'25.6"E
export const GEO_COORDINATES = {
  latitude: 6.724972,
  longitude: 79.940444,
} as const;

export const PICKUP_ONLY = true;
export const DELIVERY_NOTE =
  process.env.NEXT_PUBLIC_DELIVERY_NOTE ??
  'Self-pickup at Malamulla, Panadura (Orders within Sri Lanka)';
export const DELIVERY_NOTE_SI =
  process.env.NEXT_PUBLIC_DELIVERY_NOTE_SI ??
  'මලමුල්ල, පානදුරින් ඇවිත් රැගෙන යා හැක (Self-Pickup)';

export const HAPPY_CUSTOMERS =
  process.env.NEXT_PUBLIC_HAPPY_CUSTOMERS ?? '10+';
export const RATING = process.env.NEXT_PUBLIC_RATING ?? '5.0';

export const CURRENCY = process.env.NEXT_PUBLIC_CURRENCY ?? 'LKR';
export const CURRENCY_SYMBOL =
  process.env.NEXT_PUBLIC_CURRENCY_SYMBOL ?? 'Rs.';
export const CURRENCY_SYMBOL_SI =
  process.env.NEXT_PUBLIC_CURRENCY_SYMBOL_SI ?? 'රු.';

export const FACEBOOK =
  process.env.NEXT_PUBLIC_FACEBOOK ??
  'https://facebook.com/kevandthashsweettreats';
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}` as const;

export const GOOGLE_MAPS_URL =
  'https://www.google.com/maps?q=6.724972,79.940444' as const;

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://kevandthashsweets.vercel.app';

/* ------------------------------------------------------------
   OPERATING HOURS
   ------------------------------------------------------------ */
export const OPERATING_HOURS = {
  weekdays: { label: 'Mon – Sat', hours: '9:00 AM – 7:00 PM' },
  weekends: { label: 'Sunday', hours: '10:00 AM – 5:00 PM' },
  note: 'Orders prepared fresh on request. Please order 2–3 days in advance for custom cakes.',
  noteSi: 'නැවුම්ව සකස් කරන බැවින්, දින 2-3කට පෙර ඇණවුම් කිරීම සුදුසුය.',
} as const;

/* ------------------------------------------------------------
   NAVIGATION LINKS
   ------------------------------------------------------------ */
export interface NavLink {
  label: string;
  labelSi: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', labelSi: 'මුල් පිටුව', href: '#home' },
  { label: 'Menu', labelSi: 'මෙනුව', href: '#menu' },
  { label: 'Events', labelSi: 'විශේෂ අවස්ථා', href: '#events' },
  { label: 'About', labelSi: 'අප ගැන', href: '#about' },
  { label: 'Reviews', labelSi: 'ඇගයීම්', href: '#testimonials' },
  { label: 'Contact', labelSi: 'අප අමතන්න', href: '#contact' },
];

/* ------------------------------------------------------------
   MENU CATEGORIES
   ------------------------------------------------------------ */
export type MenuCategory =
  | 'All'
  | 'Cakes'
  | 'Combos & Bento'
  | 'Cupcakes'
  | 'Brownies & Jars';

/* ------------------------------------------------------------
   MENU ITEMS (In Sri Lankan Rupees - LKR)
   ------------------------------------------------------------ */
export interface MenuItem {
  id: number;
  name: string;
  nameSi: string;
  description: string;
  descriptionSi: string;
  price: number;
  priceLabel: string;
  priceLabelSi: string;
  category: MenuCategory;
  emoji: string;
  badge?: string;
  badgeSi?: string;
  circleColor: string;
  gradientFrom: string;
  gradientTo: string;
}

export const MENU_ITEMS: MenuItem[] = [
  // 1. Basic Cakes (from screenshot #1)
  {
    id: 1,
    name: 'Butter Cake - අපේ No. 1',
    nameSi: 'අපේ No. 1 බටර් කේක් (Butter Cake)',
    description:
      'The beloved Sri Lankan classic! Rich, golden, buttery sponge baked with genuine butter — moist, fragrant, and melts in your mouth.',
    descriptionSi:
      'නියම බටර් සුවඳින් සහ රසයෙන් පිරිපුන්, අපේ අංක 1 විශේෂ බටර් කේක් එක. තේ වේලාවට මෙන්ම ඕනෑම අවස්ථාවකට සුපිරි.',
    price: 1600,
    priceLabel: 'From Rs. 1,600',
    priceLabelSi: 'රු. 1,600 සිට',
    category: 'Cakes',
    emoji: '🧈',
    badge: 'අපේ No. 1',
    badgeSi: 'අපේ No. 1',
    circleColor: '#FEF3C7',
    gradientFrom: '#FFF5F7',
    gradientTo: '#FEF3C7',
  },
  {
    id: 2,
    name: 'Classic Chocolate Cake',
    nameSi: 'ක්ලැසික් චොක්ලට් කේක් (Chocolate Cake)',
    description:
      'Deep, velvety chocolate sponge coated in smooth chocolate ganache and chocolate curls. Pure chocolate indulgence.',
    descriptionSi:
      'උසස් තත්ත්වයේ කොකෝවා සහ චොක්ලට් ගානාශ් සෝස් පිරි තෙතමනය සහිත නියම චොක්ලට් කේක්.',
    price: 2200,
    priceLabel: 'From Rs. 2,200',
    priceLabelSi: 'රු. 2,200 සිට',
    category: 'Cakes',
    emoji: '🍫',
    badge: 'Classic',
    badgeSi: 'ක්ලැසික්',
    circleColor: '#FED7AA',
    gradientFrom: '#FFF5F7',
    gradientTo: '#FED7AA',
  },
  {
    id: 3,
    name: 'Vanilla Cake / Marble Cake',
    nameSi: 'වැනිලා කේක් / මාබල් කේක් (Marble Cake)',
    description:
      'Tender vanilla sponge or artfully swirled chocolate & vanilla marble cake baked fresh to sweet perfection.',
    descriptionSi:
      'සුවඳැති වැනිලා රසය හෝ චොක්ලට් සහ වැනිලා මුසු වූ සුන්දර මාබල් මෝස්තර සහිත ස්පොන්ජ් කේක්.',
    price: 1800,
    priceLabel: 'From Rs. 1,800',
    priceLabelSi: 'රු. 1,800 සිට',
    category: 'Cakes',
    emoji: '🍰',
    badge: 'Soft & Moist',
    badgeSi: 'මෘදු & රසැති',
    circleColor: '#FDE68A',
    gradientFrom: '#FFF5F7',
    gradientTo: '#FDE68A',
  },
  {
    id: 4,
    name: 'Traditional Ribbon Cake',
    nameSi: 'සාම්ප්‍රදායික රිබන් කේක් (Ribbon Cake)',
    description:
      'Colorful vibrant layers of moist vanilla cake filled with smooth buttercream frosting. A beloved Sri Lankan party classic.',
    descriptionSi:
      'විවිධ පැහැති තට්ටු සහ සියුම් බටර්ක්‍රීම් රසය පිරි සාද සඳහා නිතරම ඉල්ලුම ඇති සාම්ප්‍රදායික රිබන් කේක්.',
    price: 2400,
    priceLabel: 'From Rs. 2,400',
    priceLabelSi: 'රු. 2,400 සිට',
    category: 'Cakes',
    emoji: '🌈',
    badge: 'Party Classic',
    badgeSi: 'සාද සඳහා',
    circleColor: '#E0E7FF',
    gradientFrom: '#FFF5F7',
    gradientTo: '#E0E7FF',
  },

  // 2. Modern / Shop Cakes (from screenshot #2)
  {
    id: 5,
    name: 'Red Velvet Cake',
    nameSi: 'රෙඩ් වෙල්වට් කේක් (Red Velvet)',
    description:
      'Velvety scarlet sponge with a subtle cocoa finish, generously layered with rich, tangy cream cheese frosting.',
    descriptionSi:
      'සියුම් කොකෝවා රසයක් සහිත රතු පැහැති ස්පොන්ජ් සහ ක්‍රීම් චීස් ෆ්‍රොස්ටින් පිරි ප්‍රභූ පෙනුමැති රෙඩ් වෙල්වට්.',
    price: 3600,
    priceLabel: 'From Rs. 3,600',
    priceLabelSi: 'රු. 3,600 සිට',
    category: 'Cakes',
    emoji: '❤️',
    badge: 'Modern',
    badgeSi: 'නවීන',
    circleColor: '#FEE2E2',
    gradientFrom: '#FFF5F7',
    gradientTo: '#FEE2E2',
  },
  {
    id: 6,
    name: 'Black Forest / White Forest Gateau',
    nameSi: 'බ්ලැක් ෆොරස්ට් / වයිට් ෆොරස්ට් ගැටෝ',
    description:
      'Traditional gateau layered with moist sponge, fresh whipped cream, sweet-tart cherries, and fine chocolate shavings.',
    descriptionSi:
      'නැවුම් විප්ඩ් ක්‍රීම්, චෙරි සහ චොක්ලට් කැබලි පිරි සුපිරි බ්ලැක් ෆොරස්ට් සහ වයිට් ෆොරස්ට් ගැටෝ කේක්.',
    price: 3400,
    priceLabel: 'From Rs. 3,400',
    priceLabelSi: 'රු. 3,400 සිට',
    category: 'Cakes',
    emoji: '🍒',
    badge: 'Gateau',
    badgeSi: 'ගැටෝ කේක්',
    circleColor: '#FCE7F3',
    gradientFrom: '#FFF5F7',
    gradientTo: '#FCE7F3',
  },
  {
    id: 7,
    name: 'Cheesecake (Blueberry & Strawberry)',
    nameSi: 'චීස්කේක් - බ්ලූබෙරි, ස්ට්‍රෝබෙරි (Cheesecake)',
    description:
      'Creamy rich chilled cheesecake on a crunchy buttery biscuit base, generously topped with luscious blueberry or strawberry fruit compote.',
    descriptionSi:
      'බටර් බිස්කට් ක්‍රම්බ් සහ ප්‍රණීත ක්‍රීම් චීස් මත ස්ට්‍රෝබෙරි හෝ බ්ලූබෙරි ටොපිං සහිත සුපිරි චීස්කේක්.',
    price: 3800,
    priceLabel: 'From Rs. 3,800',
    priceLabelSi: 'රු. 3,800 සිට',
    category: 'Cakes',
    emoji: '🫐',
    badge: 'Must Try',
    badgeSi: 'චීස්කේක්',
    circleColor: '#DDD6FE',
    gradientFrom: '#FFF5F7',
    gradientTo: '#DDD6FE',
  },
  {
    id: 8,
    name: 'Carrot Cake',
    nameSi: 'කැරට් කේක් (Carrot Cake)',
    description:
      'Moist, richly spiced sponge loaded with freshly grated carrots, crunchy walnuts, and topped with silky cream cheese frosting.',
    descriptionSi:
      'නැවුම් කැරට්, වල්නට්ස් සහ කුරුඳු සුවඳ මුසු වූ මෘදු ස්පොන්ජ් මත ක්‍රීම් චීස් තැවරූ ප්‍රණීත කැරට් කේක්.',
    price: 2800,
    priceLabel: 'From Rs. 2,800',
    priceLabelSi: 'රු. 2,800 සිට',
    category: 'Cakes',
    emoji: '🥕',
    badge: 'Specialty',
    badgeSi: 'සුවිශේෂී',
    circleColor: '#FFEDD5',
    gradientFrom: '#FFF5F7',
    gradientTo: '#FFEDD5',
  },
  {
    id: 9,
    name: 'Coffee Cake',
    nameSi: 'කෝපි කේක් (Coffee Cake)',
    description:
      'Infused with aromatic roasted Ceylon espresso and covered in a velvety mocha buttercream. A true coffee lover’s dream.',
    descriptionSi:
      'සුවඳැති එස්ප්‍රෙසෝ කෝපි සාරය සහ මොකා බටර්ක්‍රීම් මුසු වූ කෝපි ලෝලීන්ටම වෙන්වූ රසවත් කේක් නිර්මාණයක්.',
    price: 2600,
    priceLabel: 'From Rs. 2,600',
    priceLabelSi: 'රු. 2,600 සිට',
    category: 'Cakes',
    emoji: '☕',
    badge: 'Aromatic',
    badgeSi: 'කෝපි සුවඳැති',
    circleColor: '#FEF3C7',
    gradientFrom: '#FFF5F7',
    gradientTo: '#FEF3C7',
  },
  {
    id: 10,
    name: 'Banana Cake',
    nameSi: 'බනානා කේක් (Banana Cake)',
    description:
      'Naturally sweet and exceptionally tender cake made with ripe bananas, hints of cinnamon, and a delicate caramel glaze.',
    descriptionSi:
      'ඉදුණු කෙසෙල් පලතුරු සහ කැරමල් රස මුසු කර නැවුම්ව පිළිස්සූ ඉතා මෘදු ප්‍රණීත බනානා කේක්.',
    price: 2000,
    priceLabel: 'From Rs. 2,000',
    priceLabelSi: 'රු. 2,000 සිට',
    category: 'Cakes',
    emoji: '🍌',
    badge: 'Moist & Sweet',
    badgeSi: 'නැවුම් පලතුරු',
    circleColor: '#FEF9C3',
    gradientFrom: '#FFF5F7',
    gradientTo: '#FEF9C3',
  },

  // 3. Combos & Bento (from owner WhatsApp & screenshot #3)
  {
    id: 11,
    name: 'White Cake + 4 Cupcakes Combo Box',
    nameSi: 'සුදු කේක් + කප්කේක් 4 කොම්බෝ බොක්ස්',
    description:
      'A beautiful 4" mini celebration cake paired with 4 matching rosette cupcakes in a luxury gift box. Perfect for birthday surprises!',
    descriptionSi:
      'සුදු පුංචි කේක් එකක් සමඟ ගැලපෙන කප්කේක් 4ක් අඩංගු අලංකාර තෑගි පෙට්ටිය. උපන්දින සහ සප්‍රයිස් තෑගි සඳහා වඩාත් ජනප්‍රියයි.',
    price: 3200,
    priceLabel: 'Rs. 3,200 / box',
    priceLabelSi: 'රු. 3,200 / බොක්ස්',
    category: 'Combos & Bento',
    emoji: '🎁',
    badge: 'Hot Combo',
    badgeSi: 'විශේෂ තේරීම',
    circleColor: '#FBCFE8',
    gradientFrom: '#FFF5F7',
    gradientTo: '#FBCFE8',
  },
  {
    id: 12,
    name: 'Bento Cakes (පොඩි lunch box cake)',
    nameSi: 'මිනි බෙන්ටෝ කේක් (Bento Lunchbox)',
    description:
      'Cute 4-inch mini cake packaged in an eco-friendly bento box with a wooden spoon and candle. Perfect for intimate surprises.',
    descriptionSi:
      'ලස්සන බෙන්ටෝ පෙට්ටියක සකසන ලද කුඩා අඟල් 4 කේක් නිර්මාණය. පුංචි සප්‍රයිස් එකකට කියාපු තේරීම.',
    price: 1800,
    priceLabel: 'Rs. 1,800',
    priceLabelSi: 'රු. 1,800',
    category: 'Combos & Bento',
    emoji: '🎀',
    badge: 'Trending',
    badgeSi: 'ට්‍රෙන්ඩින්',
    circleColor: '#FCE7F3',
    gradientFrom: '#FFF5F7',
    gradientTo: '#FCE7F3',
  },

  // 4. Cupcakes, Brownies & Jars (from screenshot #3)
  {
    id: 13,
    name: 'Assorted Cupcakes (Box of 6 / 12)',
    nameSi: 'කප්කේක් පෙට්ටිය (Box of 6 / 12)',
    description:
      'Fluffy cupcakes crowned with silky rosette buttercream in chocolate, vanilla, and strawberry flavors. Available in boxes of 6 or 12.',
    descriptionSi:
      'වැනිලා, චොක්ලට් සහ ස්ට්‍රෝබෙරි රසයන්ගෙන් සමන්විත අලංකාර බටර්ක්‍රීම් මල් මෝස්තර කප්කේක් 6 හෝ 12 පෙට්ටිය.',
    price: 1500,
    priceLabel: 'From Rs. 1,500',
    priceLabelSi: 'රු. 1,500 සිට',
    category: 'Cupcakes',
    emoji: '🧁',
    badge: 'Gift Box',
    badgeSi: 'තෑග්ගක් ලෙස',
    circleColor: '#FEF3C7',
    gradientFrom: '#FFF5F7',
    gradientTo: '#FEF3C7',
  },
  {
    id: 14,
    name: 'Brownies / Blondies',
    nameSi: 'බ්‍රවුනීස් / බ්ලොන්ඩීස් (Brownies & Blondies)',
    description:
      'Ultra-fudgy Belgian dark chocolate brownies with crinkle tops, alongside buttery brown sugar golden blondies.',
    descriptionSi:
      'නියම චොක්ලට් රසයෙන් යුතු සොෆ්ට් ෆජී බ්‍රවුනීස් සහ රන්වන් බ්ලොන්ඩීස් (Brownies & Blondies).',
    price: 2500,
    priceLabel: 'Rs. 2,500 / box of 9',
    priceLabelSi: 'රු. 2,500 (9 පෙට්ටිය)',
    category: 'Brownies & Jars',
    emoji: '🍪',
    badge: 'Rich & Fudgy',
    badgeSi: 'නියම චොක්ලට්',
    circleColor: '#FED7AA',
    gradientFrom: '#FFF5F7',
    gradientTo: '#FED7AA',
  },
  {
    id: 15,
    name: 'Dessert Jar Cakes',
    nameSi: 'ඩෙසර්ට් ජාර් කේක් (Jar Cakes)',
    description:
      'Layers of soft cake, chocolate ganache, silky mousse, and creamy goodness layered inside cute glass jars. Spoon included.',
    descriptionSi:
      'වීදුරු බෝතල් තුළ තට්ටු වශයෙන් සකස් කළ චොක්ලට්, මූස් සහ ක්‍රීම් පිරි රසවත් අතුරුපස කේක් ජාර්ස්.',
    price: 2200,
    priceLabel: 'Rs. 2,200 / set of 4',
    priceLabelSi: 'රු. 2,200 (4 කට්ටලය)',
    category: 'Brownies & Jars',
    emoji: '🫙',
    badge: 'Dessert Jars',
    badgeSi: 'කේක් ජාර්ස්',
    circleColor: '#D1FAE5',
    gradientFrom: '#FFF5F7',
    gradientTo: '#D1FAE5',
  },

  // 5. Special Celebration & Occasion Cakes (from owner WhatsApp)
  {
    id: 16,
    name: 'Custom White Birthday & Surprise Cake',
    nameSi: 'සුදු උපන්දින & සප්‍රයිස් කේක් (Surprise Cake)',
    description:
      'Customized white-frosted celebration cake tailored with personalized birthday messages, toppers, floral accents, or surprise themes.',
    descriptionSi:
      'ඔබ කැමතිම තේමාවට සහ වර්ණයට අනුව, අලංකාර ටොපර්ස් සහ සප්‍රයිස් ඩිසයින් සමඟින් නිමවන සුදු උපන්දින කේක්.',
    price: 3500,
    priceLabel: 'From Rs. 3,500',
    priceLabelSi: 'රු. 3,500 සිට',
    category: 'Cakes',
    emoji: '🎂',
    badge: 'Surprise Favorite',
    badgeSi: 'ජනප්‍රියයි',
    circleColor: '#FCE7F3',
    gradientFrom: '#FFF5F7',
    gradientTo: '#FCE7F3',
  },
  {
    id: 17,
    name: 'Traditional Rich Fruit Cake',
    nameSi: 'සාම්ප්‍රදායික රිච් ෆෘට් කේක් (Fruit Cake)',
    description:
      'Traditional Sri Lankan rich fruit cake packed with slow-soaked fruits, cashew nuts, and aromatic spices. Perfect for milestones.',
    descriptionSi:
      'වියළි පලතුරු, කජු සහ කුළුබඩු මිශ්‍ර කර සාම්ප්‍රදායිකව සකස් කරන ලද රසවත් රිච් ෆෘට් කේක්.',
    price: 3800,
    priceLabel: 'From Rs. 3,800',
    priceLabelSi: 'රු. 3,800 සිට',
    category: 'Cakes',
    emoji: '🍇',
    badge: 'Traditional',
    badgeSi: 'උත්සව සඳහා',
    circleColor: '#FEF08A',
    gradientFrom: '#FFF5F7',
    gradientTo: '#FEF08A',
  },
  {
    id: 18,
    name: 'Tiered Wedding & Celebration Cake',
    nameSi: 'විශේෂ උත්සව & වෙඩින් කේක් (Wedding Cake)',
    description:
      'Multi-tiered centerpiece cake tailored for weddings, engagements, and grand milestone celebrations.',
    descriptionSi:
      'විවාහ මංගල්‍ය හා විශේෂ උත්සව සඳහා ඔබේ තේමාවට ගැලපෙන අලංකාර තට්ටු කේක් නිර්මාණ.',
    price: 15000,
    priceLabel: 'From Rs. 15,000',
    priceLabelSi: 'රු. 15,000 සිට',
    category: 'Cakes',
    emoji: '💍',
    badge: 'Grand',
    badgeSi: 'විශේෂිත',
    circleColor: '#F3E8FF',
    gradientFrom: '#FFF5F7',
    gradientTo: '#F3E8FF',
  },
];

/* ------------------------------------------------------------
   EVENT PACKAGES (LKR Pricing & Panadura Pickup)
   ------------------------------------------------------------ */
export interface EventPackage {
  id: string;
  name: string;
  nameSi: string;
  price: string;
  priceSi: string;
  tagline: string;
  taglineSi: string;
  accentColor: string;
  bgColor: string;
  recommended?: boolean;
  features: { text: string; textSi: string; included: boolean }[];
}

export const EVENT_PACKAGES: EventPackage[] = [
  {
    id: 'sweet-delight',
    name: 'Sweet Delight Package',
    nameSi: 'Sweet Delight (ස්වීට් ඩිලයිට්)',
    price: 'From Rs. 5,500',
    priceSi: 'රු. 5,500 සිට',
    tagline: 'Ideal for intimate family birthdays & milestones',
    taglineSi: 'පවුලේ කුඩා උපන්දින සහ සුහද හමු සඳහා වඩාත් සුදුසුයි',
    accentColor: '#EC4899',
    bgColor: '#ffffff',
    features: [
      { text: '1× Custom Birthday Cake (1 kg)', textSi: 'කිලෝ 1ක උපන්දින කේක් 1ක්', included: true },
      { text: '6× Rosette Buttercream Cupcakes', textSi: 'මල් මෝස්තර බටර්ක්‍රීම් කප්කේක් 6ක්', included: true },
      { text: 'Free Candles & Personalized Topper', textSi: 'ඉටිපන්දම් සහ නම සහිත ටොපරය නොමිලේ', included: true },
      { text: 'Fresh Self-Pickup in Malamulla, Panadura', textSi: 'මලමුල්ල, පානදුරින් ඇවිත් ලබාගැනීම', included: true },
      { text: 'Fudgy Brownies Box', textSi: 'චොක්ලට් බ්‍රවුනීස් පෙට්ටිය', included: false },
      { text: 'Dessert Cake Jars', textSi: 'කේක් ජාර්ස් කට්ටලය', included: false },
    ],
  },
  {
    id: 'celebration-party',
    name: 'Party Celebration Package',
    nameSi: 'Party Celebration (පාටි සැමරුම්)',
    price: 'From Rs. 12,500',
    priceSi: 'රු. 12,500 සිට',
    tagline: 'Our most popular choice for parties & special events',
    taglineSi: 'සාද සහ උත්සව සඳහා වැඩිපුරම තෝරාගන්නා කට්ටලය',
    accentColor: '#E91E8C',
    bgColor: '#FFF5F7',
    recommended: true,
    features: [
      { text: '1× 2-Tier / Large Theme Cake (2 kg)', textSi: 'කිලෝ 2ක තට්ටු හෝ තේමා කේක් 1ක්', included: true },
      { text: '12× Assorted Buttercream Cupcakes', textSi: 'විවිධ රසැති බටර්ක්‍රීම් කප්කේක් 12ක්', included: true },
      { text: '1× Box of 9 Belgian Chocolate Brownies', textSi: 'චොක්ලට් බ්‍රවුනීස් 9ක පෙට්ටියක්', included: true },
      { text: 'Custom Color & Theme Matching', textSi: 'ඔබේ උත්සව තේමාවට ගැලපෙන වර්ණ', included: true },
      { text: 'Gift-Ready Packaging & Greeting Note', textSi: 'ආකර්ෂණීය තෑගි ඇසුරුම සහ සුභපැතුම් පත', included: true },
      { text: 'Fresh Self-Pickup in Malamulla, Panadura', textSi: 'මලමුල්ල, පානදුරින් ඇවිත් ලබාගැනීම', included: true },
    ],
  },
  {
    id: 'grand-occasion',
    name: 'Grand Occasion Package',
    nameSi: 'Grand Occasion (ග්‍රෑන්ඩ් උත්සව)',
    price: 'From Rs. 25,000',
    priceSi: 'රු. 25,000 සිට',
    tagline: 'Complete dessert spread for weddings & grand celebrations',
    taglineSi: 'විවාහ සහ විශාල උත්සව සඳහා සම්පූර්ණ අතුරුපස එකතුව',
    accentColor: '#3D1A0A',
    bgColor: '#ffffff',
    features: [
      { text: '1× Grand Multi-Tiered Cake (3–4 kg)', textSi: 'කිලෝ 3-4ක මහා තට්ටු කේක් නිර්මාණයක්', included: true },
      { text: '24× Individually Styled Cupcakes', textSi: 'සුවිශේෂී මෝස්තර සහිත කප්කේක් 24ක්', included: true },
      { text: '1× Box of 16 Assorted Brownie Bites', textSi: 'විවිධ රසැති බ්‍රවුනීස් 16ක තෑගි පෙට්ටියක්', included: true },
      { text: '4× Artisan Dessert Cake Jars', textSi: 'ප්‍රණීත අතුරුපස කේක් ජාර්ස් 4ක්', included: true },
      { text: 'Deluxe Cake Topper & Sparklers', textSi: 'ඩිලක්ස් ටොපරය සහ ස්පාක්ලර්ස්', included: true },
      { text: 'Direct WhatsApp Planning & Panadura Pickup', textSi: 'WhatsApp හරහා සැලසුම් කිරීම සහ පානදුරින් ලබාගැනීම', included: true },
    ],
  },
];

/* ------------------------------------------------------------
   AUTHENTIC SRI LANKAN TESTIMONIALS (Natural, warm Sinhala)
   ------------------------------------------------------------ */
export interface Testimonial {
  id: number;
  name: string;
  nameSi: string;
  location: string;
  locationSi: string;
  stars: number;
  review: string;
  reviewSi: string;
  occasion: string;
  occasionSi: string;
  initial: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Nimasha Perera',
    nameSi: 'නිමාෂා පෙරේරා',
    location: 'Panadura',
    locationSi: 'පානදුර',
    stars: 5,
    review:
      'We ordered a custom birthday cake for my daughter and it was beyond amazing! The buttercream was so soft and not overly sweet. Picking it up in Malamulla was super easy. Thank you Kev & Thash!',
    reviewSi:
      'දුවගේ බර්ත්ඩේ එකට කේක් එකක් ගත්තේ. බටර්ක්‍රීම් එක හරිම සොෆ්ට්, පැණිරසත් නියම ගානට තිබ්බා. කිව්ව වෙලාවටම මලමුල්ලෙන් ලෑස්ති කරලා දුන්නා. තෑන්ක් යූ Kev & Thash!',
    occasion: "Daughter's Birthday",
    occasionSi: 'දුවගේ උපන්දිනය',
    initial: 'N',
  },
  {
    id: 2,
    name: 'Kasun & Rashmi',
    nameSi: 'කසුන් සහ රශ්මි',
    location: 'Malamulla, Panadura',
    locationSi: 'මලමුල්ල, පානදුර',
    stars: 5,
    review:
      'Ordered the chocolate drip cake for our anniversary. The moist layers and rich Belgian chocolate flavor were top notch! WhatsApp ordering was so fast and courteous. 10/10 recommend!',
    reviewSi:
      'අපේ ඇනිවසරි එකට චොක්ලට් ඩ්‍රිප් කේක් එකක් හැදුවේ. චොක්ලට් රස පිරිලා, කේක් එකත් හොඳටම තෙතමනයට තිබ්බා. WhatsApp මැසේජ් එකක් දාපු ගමන් ඉක්මනටම විස්තර එවලා උදව් කළා. ඇත්තටම සුපිරි!',
    occasion: 'Anniversary Cake',
    occasionSi: 'විවාහ සංවත්සරය',
    initial: 'K',
  },
  {
    id: 3,
    name: 'Dilani Silva',
    nameSi: 'දිලානි සිල්වා',
    location: 'Moratuwa',
    locationSi: 'මොරටුව',
    stars: 5,
    review:
      'The cupcakes box of 12 was such a delight! The designs looked like real flower bouquets. Came all the way from Moratuwa to pick it up and it was totally worth every rupee.',
    reviewSi:
      'කප්කේක් සෙට් එකක් ගත්තේ, මල් ඩිසයින් එක ඇත්ත මල් වගේම හරිම ලස්සනට කරලා තිබ්බා. මොරටුවේ ඉඳන් ඇවිත් ගත්තට කිසිම පාඩුවක් නෑ, ගෙදර හැමෝම ගොඩක් ආසාවෙන් කෑවා.',
    occasion: 'Family Gathering',
    occasionSi: 'පවුලේ සුහද හමුව',
    initial: 'D',
  },
  {
    id: 4,
    name: 'Sachith De Silva',
    nameSi: 'සචිත් ද සිල්වා',
    location: 'Wadduwa',
    locationSi: 'වාද්දුව',
    stars: 5,
    review:
      'Fudgy brownies were extraordinary! Rich chocolate flavor and soft gooey center. Everyone at our office party loved it. We will definitely be regular customers now.',
    reviewSi:
      'චොක්ලට් බ්‍රවුනීස් පෙට්ටිය නම් නියමයි! චොක්ලට් රස උපරිමයි, නියම සොෆ්ට් ෆජී ගතියට තිබ්බා. ඔෆිස් එකේ සෙට් එකම කිව්වා ආයෙත් මේකෙන්ම ගන්න කියලා.',
    occasion: 'Office Celebration',
    occasionSi: 'කාර්යාල සැමරුම',
    initial: 'S',
  },
];

/* ------------------------------------------------------------
   SOCIAL PROOF STATS
   ------------------------------------------------------------ */
export const STATS = [
  { value: '10+', label: 'Happy Customers', labelSi: 'තෘප්තිමත් පාරිභෝගිකයින්', emoji: '😊' },
  { value: '5.0★', label: 'Customer Rating', labelSi: 'ඉහළම ඇගයීම', emoji: '⭐' },
  { value: '100%', label: 'Made with Love', labelSi: 'ආදරයෙන් නිමවූ', emoji: '💝' },
  { value: 'Panadura', label: 'Self-Pickup Location', labelSi: 'ස්ථානයෙන් ලබාගැනීම', emoji: '🛍️' },
] as const;

/* ------------------------------------------------------------
   CAKE FLAVOURS
   ------------------------------------------------------------ */
export const CAKE_FLAVOURS = [
  'Vanilla Buttercream',
  'Rich Chocolate Fudge',
  'Ribbon Cake',
  'Red Velvet',
  'Coffee Caramel',
  'Strawberry Cream',
] as const;

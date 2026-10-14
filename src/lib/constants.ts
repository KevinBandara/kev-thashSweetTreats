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
  | 'Cupcakes'
  | 'Brownies'
  | 'Special';

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
  {
    id: 1,
    name: 'Custom Birthday Cake',
    nameSi: 'උපන්දින කේක් (Custom Design)',
    description:
      'Personalized sponge layered with silky buttercream, customized toppers, and themes. Available in vanilla, chocolate, or ribbon.',
    descriptionSi:
      'ඔබ කැමතිම මෝස්තරයෙන් සහ රසයෙන් (වැනිලා, චොකලට් හෝ රිබන්) නිමවන සුවිශේෂී උපන්දින කේක්.',
    price: 3500,
    priceLabel: 'From Rs. 3,500',
    priceLabelSi: 'රු. 3,500 සිට',
    category: 'Cakes',
    emoji: '🎂',
    badge: 'Bestseller',
    badgeSi: 'ජනප්‍රියයි',
    circleColor: '#FCE7F3',
    gradientFrom: '#FFF5F7',
    gradientTo: '#FCE7F3',
  },
  {
    id: 2,
    name: 'Chocolate Drip Cake',
    nameSi: 'චොක්ලට් ඩ්‍රිප් කේක්',
    description:
      'Decadent chocolate drip cascading over moist chocolate fudge cake, topped with chocolates and sweet treats.',
    descriptionSi:
      'චොක්ලට් ගානාශ් ඩ්‍රිප් සහිත රසවත්, තෙතමනය පිරි චොක්ලට් ෆජ් කේක් නිර්මාණය.',
    price: 4200,
    priceLabel: 'From Rs. 4,200',
    priceLabelSi: 'රු. 4,200 සිට',
    category: 'Cakes',
    emoji: '🍫',
    badge: 'Popular',
    badgeSi: 'විශේෂිතයි',
    circleColor: '#FDE68A',
    gradientFrom: '#FFF5F7',
    gradientTo: '#FDE68A',
  },
  {
    id: 3,
    name: 'Floral Buttercream Cake',
    nameSi: 'මල් මෝස්තර බටර්ක්‍රීම් කේක්',
    description:
      'Hand-piped delicate buttercream flowers in soft pastel tones. Elegance in every single slice.',
    descriptionSi:
      'මනරම් පැස්ටල් වර්ණ මල් මෝස්තර වලින් අතින්ම හැඩගැන්වූ අලංකාර බටර්ක්‍රීම් කේක්.',
    price: 4500,
    priceLabel: 'From Rs. 4,500',
    priceLabelSi: 'රු. 4,500 සිට',
    category: 'Cakes',
    emoji: '🌸',
    circleColor: '#FEE2E2',
    gradientFrom: '#FFF5F7',
    gradientTo: '#FEE2E2',
  },
  {
    id: 4,
    name: 'Celebration Tiered Cake',
    nameSi: 'විශේෂ උත්සව තට්ටු කේක්',
    description:
      'Multi-tiered centerpiece cake tailored for weddings, engagements, and milestone celebrations.',
    descriptionSi:
      'විවාහ මංගල්‍ය හා උත්සව සඳහා ඔබේ තේමාවට ගැලපෙන අලංකාර තට්ටු කේක් නිර්මාණ.',
    price: 15000,
    priceLabel: 'From Rs. 15,000',
    priceLabelSi: 'රු. 15,000 සිට',
    category: 'Cakes',
    emoji: '💍',
    badge: 'Grand',
    badgeSi: 'විශේෂ',
    circleColor: '#F3E8FF',
    gradientFrom: '#FFF5F7',
    gradientTo: '#F3E8FF',
  },
  {
    id: 5,
    name: 'Signature Cupcakes (Box of 12)',
    nameSi: 'කප්කේක් (12 පෙට්ටිය)',
    description:
      'Twelve fluffy cupcakes with swirling rosette buttercream in vanilla, chocolate, and strawberry.',
    descriptionSi:
      'වැනිලා, චොක්ලට් සහ ස්ට්‍රෝබෙරි රසයන්ගෙන් සමන්විත අලංකාර බටර්ක්‍රීම් මල් මෝස්තර කප්කේක් 12ක්.',
    price: 2400,
    priceLabel: 'Rs. 2,400 / box',
    priceLabelSi: 'රු. 2,400 / පෙට්ටිය',
    category: 'Cupcakes',
    emoji: '🧁',
    badge: 'Must Try',
    badgeSi: 'රසවිඳින්න',
    circleColor: '#FEF3C7',
    gradientFrom: '#FFF5F7',
    gradientTo: '#FEF3C7',
  },
  {
    id: 6,
    name: 'Mini Bento Cake',
    nameSi: 'මිනි බෙන්ටෝ කේක්',
    description:
      'Cute 4-inch mini cake packaged in an eco-friendly bento box with a wooden spoon and candle.',
    descriptionSi:
      'පුංචි සතුටක් සමරන්න ලස්සන බෙන්ටෝ පෙට්ටියක සකසන ලද කුඩා අඟල් 4 කේක් නිර්මාණය.',
    price: 1800,
    priceLabel: 'Rs. 1,800',
    priceLabelSi: 'රු. 1,800',
    category: 'Cakes',
    emoji: '🎀',
    circleColor: '#FCE7F3',
    gradientFrom: '#FFF5F7',
    gradientTo: '#FCE7F3',
  },
  {
    id: 7,
    name: 'Fudgy Brownies Box (9 pcs)',
    nameSi: 'චොක්ලට් ෆජී බ්‍රවුනීස් (9 පෙට්ටිය)',
    description:
      'Dense, ultra-fudgy Belgian chocolate brownies with crisp crinkle tops and rich gooey centers.',
    descriptionSi:
      'නියම චොක්ලට් රසයෙන් යුතු, ඇතුළත සොෆ්ට් ෆජී ගතිය පිරි ප්‍රණීත බ්‍රවුනීස් 9ක්.',
    price: 2500,
    priceLabel: 'Rs. 2,500 / box',
    priceLabelSi: 'රු. 2,500 / පෙට්ටිය',
    category: 'Brownies',
    emoji: '🍫',
    badge: 'Rich & Gooey',
    badgeSi: 'නියම චොක්ලට්',
    circleColor: '#FED7AA',
    gradientFrom: '#FFF5F7',
    gradientTo: '#FED7AA',
  },
  {
    id: 8,
    name: 'Dessert Cake Jars (Set of 4)',
    nameSi: 'ඩෙසර්ට් කේක් ජාර්ස් (4 කට්ටලය)',
    description:
      'Layers of soft cake, chocolate ganache, and creamy goodness layered inside cute glass jars.',
    descriptionSi:
      'වීදුරු බෝතල් තුළ තට්ටු වශයෙන් සකස් කළ චොක්ලට් සහ ක්‍රීම් පිරි අතුරුපස කේක් ජාර් 4ක්.',
    price: 2200,
    priceLabel: 'Rs. 2,200 / set',
    priceLabelSi: 'රු. 2,200 / කට්ටලය',
    category: 'Special',
    emoji: '🫙',
    badge: 'Great Gift',
    badgeSi: 'තෑග්ගක් ලෙස',
    circleColor: '#D1FAE5',
    gradientFrom: '#FFF5F7',
    gradientTo: '#D1FAE5',
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

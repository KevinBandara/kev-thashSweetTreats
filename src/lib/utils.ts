import { WHATSAPP_NUMBER } from './constants';

/**
 * Generates a WhatsApp URL with a pre-filled message for ordering a menu item
 */
export function getWhatsAppOrderUrl(itemName: string, priceLabel?: string): string {
  const message = [
    `Hi Kev & Thash Sweet Treats! 🎂`,
    ``,
    `I would like to order: *${itemName}*${priceLabel ? ` (${priceLabel})` : ''}.`,
    `Could you please let me know availability for pickup in Malamulla, Panadura?`,
  ].join('\n');
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/**
 * Generates a WhatsApp URL for an event package enquiry
 */
export function getWhatsAppPackageUrl(packageName: string, priceLabel?: string): string {
  const message = [
    `Hi Kev & Thash Sweet Treats! 🎉`,
    ``,
    `I'm interested in booking the *${packageName}* package${priceLabel ? ` (${priceLabel})` : ''}.`,
    `Could you please share more details and available pickup dates in Panadura?`,
  ].join('\n');
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/**
 * Generates a WhatsApp URL for an event category enquiry
 */
export function getWhatsAppEventUrl(eventName: string): string {
  const message = [
    `Hi Kev & Thash Sweet Treats! ✨`,
    ``,
    `I'm planning a *${eventName}* celebration and would like to order custom sweet treats.`,
    `Could you help me with design options and pricing?`,
  ].join('\n');
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/**
 * Generates a WhatsApp URL from the contact form
 */
export function getWhatsAppFromFormUrl(data: {
  name: string;
  email?: string;
  phone: string;
  occasion: string;
  message: string;
}): string {
  const lines = [
    `*🎂 New Order Enquiry — Kev & Thash Sweet Treats*`,
    ``,
    `• *Name:* ${data.name.trim()}`,
    data.email?.trim() ? `• *Email:* ${data.email.trim()}` : null,
    `• *Phone:* ${data.phone.trim()}`,
    `• *Occasion:* ${data.occasion.trim()}`,
    `• *Location:* Self-Pickup at Malamulla, Panadura`,
    ``,
    `*📝 Cake Details & Vision:*`,
    data.message.trim(),
  ].filter(Boolean) as string[];

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join('\n'))}`;
}

/**
 * General direct WhatsApp enquiry URL
 */
export function getWhatsAppGeneralUrl(): string {
  const message =
    "Hello Kev & Thash Sweet Treats! 👋 I'm contacting you from your website and would like to order sweet treats.";
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/**
 * Format Sri Lankan phone number for display
 */
export function formatPhone(phone: string): string {
  const cleaned = phone.replace(/\D/g, '');
  if (cleaned.startsWith('94') && cleaned.length === 11) {
    return `+94 ${cleaned.slice(2, 4)} ${cleaned.slice(4, 7)} ${cleaned.slice(7)}`;
  }
  if (cleaned.startsWith('0') && cleaned.length === 10) {
    return `${cleaned.slice(0, 3)} ${cleaned.slice(3, 6)} ${cleaned.slice(6)}`;
  }
  return phone;
}

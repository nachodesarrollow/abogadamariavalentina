export function buildWhatsAppLink(phoneE164NoPlus: string, message: string) {
  const phone = phoneE164NoPlus.replace(/[^\d]/g, "");
  const text = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${text}`;
}


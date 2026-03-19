import Link from "next/link";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

export function WhatsAppButton({
  phoneE164NoPlus,
  message,
  label = "WhatsApp",
  size = "md",
}: {
  phoneE164NoPlus: string;
  message: string;
  label?: string;
  size?: "md" | "lg";
}) {
  const href = buildWhatsAppLink(phoneE164NoPlus, message);

  const sizing =
    size === "lg"
      ? "h-12 px-6 text-base"
      : "h-11 px-5 text-sm";

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={[
        "inline-flex items-center justify-center gap-2 rounded-full",
        sizing,
        "bg-[var(--gold)] text-black font-semibold",
        "shadow-sm shadow-black/20",
        "transition-transform duration-200 ease-out",
        "hover:-translate-y-0.5 hover:shadow-md hover:shadow-black/15",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]",
      ].join(" ")}
      aria-label={`Abrir WhatsApp: ${label}`}
    >
      <WhatsAppIcon className="h-5 w-5" />
      {label}
    </Link>
  );
}


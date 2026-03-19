import { Section } from "@/components/Section";
import { Check, MapPin, Phone, Video } from "lucide-react";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export function Contact() {
  return (
    <Section
      id="contacto"
      eyebrow="CONTACTO"
      title="Haceme tu consulta por WhatsApp"
      description="Contame brevemente tu situación y coordinamos una consulta virtual o presencial."
      size="compact"
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="p-6 card sm:p-8">
          <h3 className="text-base font-semibold text-white">Atención</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/80">
            <li className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white ring-1 ring-white/15">
                <Phone className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="flex flex-col">
                <span className="text-white/70">Teléfono / WhatsApp</span>
                <a
                  href="tel:+542664205949"
                  className="w-fit font-semibold text-white hover:text-[var(--gold)] hover:underline underline-offset-4"
                >
                  266 420-5949
                </a>
              </span>
            </li>
            <li className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white ring-1 ring-white/15">
                <MapPin className="h-5 w-5" aria-hidden="true" />
              </span>
              <span>San Luis · Atención en toda la provincia</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white ring-1 ring-white/15">
                <Video className="h-5 w-5" aria-hidden="true" />
              </span>
              <span>Consultas virtuales y presenciales</span>
            </li>
          </ul>

          <div className="mt-6">
            <WhatsAppButton
              size="lg"
              phoneE164NoPlus="5492664205949"
              message="Hola María Valentina, quiero hacer una consulta. ¿Cómo podemos coordinar?"
              label="Abrir WhatsApp y consultar"
            />
            <p className="mt-3 text-xs leading-5 text-white/60">
              Al tocar el botón se abre el chat directamente con el número.
            </p>
            <p className="mt-2 text-xs leading-5 text-white/55">
              Respondemos en horario de atención: lunes a viernes de 9 a 18 hs.
            </p>
          </div>
        </div>

        <div className="border border-white/12 bg-white/5 p-6 sm:p-8 rounded-[var(--radius)]">
          <h3 className="text-base font-semibold text-white">
            Qué conviene enviar en el primer mensaje
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-white/80">
            {[
              "Tu nombre y localidad.",
              "Tema (penal / ART / divorcio / daños / sucesión).",
              "Un resumen breve de lo ocurrido y en qué etapa estás.",
              "Si preferís consulta virtual o presencial.",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-[var(--radius)] border border-white/12 bg-white/5 p-4"
              >
                <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[var(--gold)]/15 ring-1 ring-[var(--gold)]/30">
                  <Check className="h-4 w-4 text-[var(--gold)]" aria-hidden="true" />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}


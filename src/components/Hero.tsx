import Image from "next/image";
import { MapPin, ShieldCheck } from "lucide-react";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      <div className="container-page py-16 sm:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="animate-float-in">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold text-white/85">
              <ShieldCheck className="h-4 w-4 text-[var(--gold)]" aria-hidden="true" />
              Abogada matriculada · San Luis, Argentina
            </p>

            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-6xl [font-family:var(--font-title)]">
              <span className="text-[var(--gold)]">Abogada</span>{" "}
              María Valentina Rothe
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-white/75 sm:text-lg">
              Defensa y asesoramiento legal con criterio y compromiso real. Atención
              directa, sin intermediarios, para que entiendas cada paso de tu
              situación.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <WhatsAppButton
                size="lg"
                phoneE164NoPlus="5492664311864"
                message="Hola María Valentina, quisiera hacer una consulta. ¿Podemos coordinar?"
                label="Contactar por WhatsApp"
              />
              <a
                href="#servicios"
                className="inline-flex h-12 items-center justify-center rounded-full border-2 border-white/60 bg-white/5 px-6 text-base font-semibold text-white hover:bg-white/10"
              >
                Ver servicios
              </a>
            </div>

            <div className="mt-6 flex items-center gap-2 text-sm text-white/70">
              <MapPin className="h-4 w-4 text-[var(--gold)]" aria-hidden="true" />
              San Luis · Atención en toda la provincia
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden border border-white/15 bg-white/5 shadow-sm rounded-[var(--radius)]">
              <div className="relative h-[520px] w-full">
                <Image
                  src="/maria-valentina-rothe.png"
                  alt="Abogada María Valentina Rothe"
                  fill
                  priority
                  className="object-cover"
                  sizes="(min-width: 1024px) 520px, 100vw"
                  style={{ objectPosition: "center 18%" }}
                />
                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(6,20,39,0.92),rgba(6,20,39,0.55)_35%,rgba(6,20,39,0.15)_70%,rgba(6,20,39,0.05))]" />
                <div className="absolute inset-0 ring-1 ring-white/10" />
              </div>
            </div>

            <div className="mt-4 max-w-lg text-sm leading-6 text-white/70">
              <span className="text-white/85">
                Consultas virtuales y presenciales en San Luis.
              </span>{" "}
              Si preferís, coordinamos una primera charla para entender el caso y
              definir los próximos pasos.
            </div>

            <div className="pointer-events-none absolute -bottom-8 -right-10 hidden h-40 w-40 rounded-full blur-2xl opacity-60 lg:block"
              style={{
                background:
                  "radial-gradient(closest-side, rgba(187,143,56,0.22), rgba(187,143,56,0.0))",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}


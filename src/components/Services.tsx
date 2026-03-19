import { Section } from "@/components/Section";
import {
  HeartCrack,
  Scale,
  Shield,
  BriefcaseMedical,
  ScrollText,
} from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "Derecho penal",
    description:
      "Asistencia y defensa en instancias penales, con estrategia y acompañamiento.",
    note: "Primera consulta sin costo",
  },
  {
    icon: BriefcaseMedical,
    title: "ART",
    description:
      "Reclamos por accidentes de trabajo y enfermedades laborales. Evaluación y seguimiento.",
    note: "Gestionamos desde el inicio",
  },
  {
    icon: HeartCrack,
    title: "Divorcios",
    description:
      "Orientación clara para acuerdos, presentaciones y resolución de conflictos familiares.",
    note: "Acuerdos y litigios",
  },
  {
    icon: Scale,
    title: "Daños y perjuicios",
    description:
      "Reclamos por responsabilidad civil. Análisis del caso y armado del reclamo.",
    note: "Evaluación del caso",
  },
  {
    icon: ScrollText,
    title: "Sucesiones",
    description:
      "Tramitación sucesoria, asesoramiento y organización de documentación.",
    note: "Proceso completo",
  },
];

export function Services() {
  return (
    <Section
      id="servicios"
      eyebrow="SERVICIOS"
      title="Áreas de práctica"
      description="Atención integral, con enfoque en casos concretos y comunicación clara durante todo el proceso."
      size="airy"
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <div
            key={s.title}
            className="group p-6 card transition-transform duration-200 ease-out hover:-translate-y-0.5"
          >
            <div className="flex items-center gap-3">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-[10px] border border-white/15 bg-white/5">
                <s.icon className="h-8 w-8 text-[var(--gold)]" aria-hidden="true" />
              </span>
              <h3 className="text-base font-semibold text-white">{s.title}</h3>
            </div>
            <p className="mt-3 text-sm leading-6 text-white/70">{s.description}</p>
            <div className="mt-5 h-px w-full bg-white/10" />
            <p className="mt-4 text-xs font-semibold tracking-[0.16em] uppercase text-[var(--gold)]">
              {s.note}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}


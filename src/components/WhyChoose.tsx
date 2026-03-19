import { Section } from "@/components/Section";
import { Clock, Lock, MessagesSquare, Target, ThumbsUp } from "lucide-react";

const values = [
  {
    icon: ThumbsUp,
    title: "Confianza y seriedad",
    description:
      "Un abordaje profesional, con información clara y decisiones bien fundamentadas.",
  },
  {
    icon: MessagesSquare,
    title: "Comunicación directa",
    description:
      "Canales simples, seguimiento real y respuestas con tiempos razonables.",
  },
  {
    icon: Target,
    title: "Estrategia por objetivos",
    description:
      "Plan de acción realista y ordenado para cada etapa del proceso.",
  },
  {
    icon: Lock,
    title: "Discreción",
    description:
      "Trato respetuoso y confidencialidad en todo momento.",
  },
  {
    icon: Clock,
    title: "Acompañamiento",
    description:
      "Presencia y contención: no estás solo/a durante el trámite.",
  },
];

export function WhyChoose() {
  return (
    <Section
      id="por-que-elegirme"
      eyebrow="POR QUÉ ELEGIRME"
      title="Cómo trabajo con cada cliente"
      description="Mi diferencial es la atención personalizada: tu caso se trabaja con dedicación, criterio y comunicación clara."
      size="normal"
    >
      <div className="border border-white/12 bg-white/5 p-6 text-white sm:p-8 rounded-[var(--radius)]">
        <div className="grid gap-4 lg:grid-cols-3">
          {values.slice(0, 3).map((v) => (
            <div key={v.title} className="border border-white/12 bg-white/5 p-5 rounded-[var(--radius)]">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-[10px] bg-white/10 ring-1 ring-white/10">
                <v.icon className="h-8 w-8 text-[var(--gold)]" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-sm font-semibold">{v.title}</h3>
              <p className="mt-2 text-sm leading-6 text-white/70">{v.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-4 grid gap-4 lg:grid-cols-2 lg:justify-center">
          {values.slice(3).map((v) => (
            <div
              key={v.title}
              className="border border-white/12 bg-white/5 p-5 rounded-[var(--radius)] lg:max-w-[420px] lg:justify-self-center"
            >
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-[10px] bg-white/10 ring-1 ring-white/10">
                <v.icon className="h-8 w-8 text-[var(--gold)]" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-sm font-semibold">{v.title}</h3>
              <p className="mt-2 text-sm leading-6 text-white/70">{v.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}


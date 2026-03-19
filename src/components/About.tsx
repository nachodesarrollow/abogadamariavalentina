import { Section } from "@/components/Section";

const points = [
  {
    number: "01",
    title: "Cercanía y claridad",
    description:
      "Te explico el escenario legal y los pasos a seguir con lenguaje simple y honesto.",
  },
  {
    number: "02",
    title: "Atención personalizada",
    description:
      "Trabajo con seguimiento directo. Tu caso no es un número: es una situación concreta que merece dedicación.",
  },
  {
    number: "03",
    title: "Criterio profesional",
    description:
      "Estrategia y enfoque práctico para tomar decisiones seguras, con respaldo jurídico.",
  },
];

export function About() {
  return (
    <Section
      id="sobre-mi"
      eyebrow="Sobre mí"
      title="Por qué trabajo de esta manera"
      description="Elegí ejercer de forma independiente para poder dedicarle a cada cliente el tiempo y la atención que su caso merece. Sin estructuras grandes, sin delegaciones."
      size="compact"
    >
      <div className="grid gap-6 md:grid-cols-3">
        {points.map((p) => (
          <div
            key={p.title}
            className="relative p-6 card"
          >
            <div className="absolute right-5 top-5 text-[var(--gold)] text-3xl font-semibold tracking-tight tabular-nums [font-family:var(--font-title)]">
              {p.number}
            </div>
            <div className="h-1 w-10 bg-[var(--gold)]/80 rounded-sm" aria-hidden="true" />
            <h3 className="mt-4 text-base font-semibold text-white">{p.title}</h3>
            <p className="mt-2 text-sm leading-6 text-white/70">{p.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}


import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  description,
  size = "normal",
  children,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  size?: "compact" | "normal" | "airy";
  children?: ReactNode;
}) {
  const spacing =
    size === "compact"
      ? "py-12 sm:py-14"
      : size === "airy"
        ? "py-20 sm:py-28"
        : "py-16 sm:py-20";

  return (
    <section id={id} className={`${spacing} scroll-mt-20`}>
      <div className="container-page">
        <div className="max-w-2xl">
          {eyebrow ? (
            <p className="text-xs font-semibold tracking-[0.22em] uppercase text-[var(--text-muted)]">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="mt-2 font-semibold tracking-tight text-white text-3xl sm:text-4xl [font-family:var(--font-title)]">
            {title}
          </h2>
          {description ? (
            <p className="mt-3 text-base leading-7 text-white/70">{description}</p>
          ) : null}
        </div>
        {children ? <div className="mt-10">{children}</div> : null}
      </div>
    </section>
  );
}


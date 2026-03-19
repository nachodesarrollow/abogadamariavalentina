import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[rgba(6,20,39,0.55)]">
      <div className="container-page py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <Link
              href="#"
              className="text-[30px] leading-none text-[var(--gold)] [font-family:var(--font-title)] font-semibold tracking-tight hover:opacity-90"
              aria-label="Ir al inicio"
            >
              MVR
            </Link>
            <div>
              <p className="text-sm font-semibold text-white">
                Abogada María Valentina Rothe
              </p>
              <p className="text-xs text-white/65">San Luis · Argentina</p>
            </div>
          </div>

          <div className="text-xs text-white/60">
            © {new Date().getFullYear()} · Atención personalizada · Consultas virtuales
            y presenciales
          </div>
        </div>
      </div>
    </footer>
  );
}


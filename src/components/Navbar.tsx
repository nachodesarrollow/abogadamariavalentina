import Link from "next/link";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[rgba(6,20,39,0.72)] backdrop-blur">
      <div className="container-page">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="#"
            className="text-[30px] leading-none text-[var(--gold)] [font-family:var(--font-title)] font-semibold tracking-tight hover:opacity-90"
            aria-label="Ir al inicio"
          >
            MVR
          </Link>

          <nav className="hidden items-center gap-6 text-sm text-white/80 md:flex">
            <Link
              href="#sobre-mi"
              className="border-b border-transparent pb-1 hover:text-[var(--gold)] hover:border-b hover:border-current"
            >
              Sobre mí
            </Link>
            <Link
              href="#servicios"
              className="border-b border-transparent pb-1 hover:text-[var(--gold)] hover:border-b hover:border-current"
            >
              Servicios
            </Link>
            <Link
              href="#por-que-elegirme"
              className="border-b border-transparent pb-1 hover:text-[var(--gold)] hover:border-b hover:border-current"
            >
              Por qué elegirme
            </Link>
            <Link
              href="#contacto"
              className="border-b border-transparent pb-1 hover:text-[var(--gold)] hover:border-b hover:border-current"
            >
              Contacto
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden sm:block">
              <WhatsAppButton
                phoneE164NoPlus="5492664205949"
                message="Hola María Valentina, quisiera hacer una consulta legal. ¿Tenés disponibilidad?"
                label="Consultar"
              />
            </div>
            <Link
              href="#contacto"
              className="inline-flex h-11 items-center justify-center rounded-full border border-white/15 bg-white/5 px-4 text-sm font-semibold text-white hover:bg-white/10 md:hidden"
            >
              Menú
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}


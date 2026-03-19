import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[rgba(6,20,39,0.55)]">
      <div className="container-page py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="relative inline-flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl bg-white/10 ring-1 ring-white/15">
              <Image
                src="/logo-valentina.png"
                alt="Logo de María Valentina Rothe"
                fill
                sizes="48px"
                className="object-contain p-2.5"
              />
            </span>
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


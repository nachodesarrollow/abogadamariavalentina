import type { Metadata } from "next";
import { Cormorant_Garamond, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-title",
  subsets: ["latin"],
  weight: ["600"],
});

export const metadata: Metadata = {
  title: "Abogada María Valentina Rothe | San Luis",
  description:
    "Abogada en San Luis. Consultas virtuales y presenciales. Derecho penal, ART, divorcios, daños y perjuicios, sucesiones. Atención personalizada.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-transparent tracking-[0.01em] font-normal">
        {/* Fondo global fijo para evitar “cortes” entre secciones */}
        <div
          className="fixed inset-0 -z-10"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(1000px 520px at 18% -10%, rgba(26, 78, 151, 0.26), transparent 60%), radial-gradient(900px 520px at 82% 0%, rgba(187, 143, 56, 0.16), transparent 55%), linear-gradient(180deg, #061427 0%, #0a2142 100%)",
          }}
        />
        {/* Textura sutil (reduce banding del degradado) */}
        <div
          className="fixed inset-0 -z-10 opacity-[0.035] mix-blend-overlay"
          aria-hidden="true"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)' opacity='.55'/%3E%3C/svg%3E\")",
          }}
        />
        {children}
      </body>
    </html>
  );
}

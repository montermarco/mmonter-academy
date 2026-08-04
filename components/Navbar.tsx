"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X, ArrowUpRight } from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const whatsappUrl =
    "https://wa.me/5215586777778?text=Hola%20Marco,%20tengo%20dudas%20sobre%20el%20cohorte%20LangGraph%20con%20TypeScript";

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800/80 bg-zinc-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
        {/* Studio Branding */}
        <a
          href="#"
          className="flex items-center gap-2.5 group transition-opacity hover:opacity-90"
        >
          <div className="flex h-8 w-8 items-center justify-center shadow-inner group-hover:border-zinc-500 transition-colors overflow-hidden p-1">
            <Image
              src="/mmonter_logo_clear.png"
              alt="MMonter Studio Logo"
              sizes="24px"
              width={24}
              height={24}
              className="h-full w-full object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-mono text-sm font-semibold tracking-tight text-zinc-100 flex items-center gap-1.5">
              MMonter<span className="text-zinc-600"></span>{" "}
              <span className="text-zinc-400">Academy</span>
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
          <a
            href="#manifesto"
            className="transition-colors hover:text-zinc-100"
          >
            Filosofía
          </a>
          <a
            href="#syllabus"
            className="transition-colors hover:text-zinc-100"
          >
            Temario
          </a>
          <a
            href="#logistics"
            className="transition-colors hover:text-zinc-100"
          >
            Requisitos
          </a>
          <a
            href="#instructor"
            className="transition-colors hover:text-zinc-100"
          >
            Instructor
          </a>
        </nav>

        {/* Right CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono text-zinc-400 hover:text-zinc-200 transition-colors flex items-center gap-1"
          >
            WhatsApp <ArrowUpRight className="h-3 w-3" />
          </a>
          <a
            href="#pricing"
            className="inline-flex items-center justify-center rounded-md bg-zinc-100 px-4 py-2 text-xs font-semibold text-zinc-950 shadow-sm transition-all hover:bg-white hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-zinc-400"
          >
            Reservar Lugar
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden rounded-md p-2 text-zinc-400 hover:bg-zinc-900 hover:text-zinc-100"
          aria-label="Abrir menú"
        >
          {mobileMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-zinc-800 bg-zinc-950 px-4 pt-3 pb-6 space-y-4">
          <div className="flex flex-col space-y-3 font-medium text-sm text-zinc-300">
            <a
              href="#manifesto"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-white"
            >
              Filosofía
            </a>
            <a
              href="#syllabus"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-white"
            >
              Temario (8 Sesiones)
            </a>
            <a
              href="#logistics"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-white"
            >
              Requisitos & Logística
            </a>
            <a
              href="#instructor"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-white"
            >
              Instructor
            </a>
          </div>
          <div className="pt-3 border-t border-zinc-800 flex flex-col gap-2.5">
            <a
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center rounded-md bg-zinc-100 px-4 py-2.5 text-xs font-semibold text-zinc-950"
            >
              Reservar Lugar
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center rounded-md border border-zinc-800 bg-zinc-900 px-4 py-2.5 text-xs font-medium text-zinc-300 flex items-center justify-center gap-1.5"
            >
              Hablar por WhatsApp <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

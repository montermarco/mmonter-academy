import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-zinc-800/80 bg-transparent py-12 font-sans text-xs text-zinc-500">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Studio Branding */}
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center p-0.5 overflow-hidden">
              <Image
                src="/mmonter_logo_clear.png"
                alt="MMonter Studio Logo"
                width={32}
                height={32}
                className="h-full w-full object-contain"
              />
            </div>
            <span className="font-mono text-sm font-bold text-zinc-200">
              MMonter <span className="text-zinc-400 font-normal">Academy</span>
            </span>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center gap-6 font-mono text-zinc-400">
            <a href="#manifesto" className="hover:text-zinc-200 transition-colors">
              Filosofía
            </a>
            <a href="#syllabus" className="hover:text-zinc-200 transition-colors">
              Temario
            </a>
            <a href="#logistics" className="hover:text-zinc-200 transition-colors">
              Requisitos
            </a>
            <a href="#instructor" className="hover:text-zinc-200 transition-colors">
              Instructor
            </a>
            <a href="#pricing" className="hover:text-zinc-200 transition-colors">
              Cohorte 1
            </a>
          </div>

          {/* System status indicator */}
          <div className="flex items-center gap-2 font-mono text-[11px] text-zinc-500">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            <span>LangGraph Engine: Production Ready</span>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-zinc-900/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-zinc-600">
          <p>© {new Date().getFullYear()} MMonter Studio. Todos los derechos reservados.</p>
          <p>LangGraph con TypeScript · Agentes de IA Deterministas en Producción</p>
        </div>
      </div>
    </footer>
  );
}

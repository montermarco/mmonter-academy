import Image from "next/image";
import { CheckCircle2, MessageCircle, Terminal } from "lucide-react";

export function Instructor() {
  const whatsappUrl =
    "https://wa.me/5215586777778?text=Hola%20Marco,%20tengo%20una%20consulta%20técnica%20sobre%20el%20cohorte";

  return (
    <section id="instructor" className="py-20 border-t border-zinc-800/80 bg-transparent">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto rounded-2xl border border-zinc-800/80 bg-zinc-900/20 backdrop-blur-xs p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          {/* Accent glow line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-zinc-400 to-emerald-600" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Avatar / Badge Column */}
            <div className="md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left">
              <div className="relative mb-4">
                <div className="h-24 w-24 sm:h-28 sm:w-28 rounded-2xl border-2 border-zinc-700 bg-zinc-800/80 flex items-center justify-center shadow-xl overflow-hidden relative">
                  <Image
                    src="/profile_pic.png"
                    alt="Marco Monter"
                    sizes=""
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 rounded-full border border-zinc-800 bg-zinc-900/90 px-2 py-0.5 font-mono text-[10px] text-emerald-400 font-semibold shadow">
                  Founder
                </div>
              </div>

              <h3 className="text-xl font-bold text-zinc-100">Marco Monter</h3>
              <p className="font-mono text-xs text-zinc-400 mt-0.5">
                Founder @ MMonter Studio
              </p>

              <div className="mt-4 flex items-center gap-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  <MessageCircle className="h-3.5 w-3.5" /> Direct Chat
                </a>
              </div>
            </div>

            {/* Content Column */}
            <div className="md:col-span-8 space-y-4">
              <div className="font-mono text-xs text-emerald-400 uppercase tracking-widest flex items-center gap-1.5">
                <Terminal className="h-3.5 w-3.5" />
                Mensaje del Instructor
              </div>

              <blockquote className="text-sm sm:text-base text-zinc-300 leading-relaxed font-sans border-l-2 border-zinc-700 pl-4 py-1 italic">
                &ldquo;Diseñé este cohorte porque estoy cansado de ver tutoriales que enseñan demos genéricas de chat que se rompen al primer caso de borde en producción. En MMonter Studio construimos sistemas multi-agente deterministas para clientes reales. Este curso es la destilación directa de nuestra arquitectura de producción en TypeScript.&rdquo;
              </blockquote>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-mono text-zinc-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>Casos reales de producción</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>Código de cliente adaptado</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>Soporte directo 1-a-1</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>0% magia, 100% rigor TS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

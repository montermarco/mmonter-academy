import { ArrowRight, Check, Users, MessageCircle } from "lucide-react";

export function PricingCTA() {
  const whatsappUrl =
    "https://wa.me/5215586777778?text=Hola%20Marco,%20quiero%20reservar%20mi%20lugar%20para%20el%20Cohorte%20LangGraph%20con%20TypeScript";

  return (
    <section id="pricing" className="py-20 border-t border-zinc-800/80 bg-transparent relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Header */}
          <div className="inline-flex items-center gap-2 font-mono text-xs text-emerald-400 uppercase tracking-widest mb-3 bg-zinc-900/60 border border-zinc-800 px-3.5 py-1.5 rounded-full backdrop-blur-xs shadow-inner">
            <Users className="h-3.5 w-3.5" />
            Cupos Ultra-Limitados para Calidad de Enseñanza
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-100">
            Asegura tu lugar en el Cohorte 1
          </h2>

          <p className="mt-4 text-zinc-400 text-base sm:text-lg max-w-2xl mx-auto">
            Limitado estrictamente a <strong className="text-zinc-200">15 desarrolladores</strong> para garantizar revisión personalizada de código y atención directa en cada sesión.
          </p>

          {/* Pricing Card */}
          <div className="mt-12 rounded-2xl border border-zinc-700/80 bg-zinc-900/50 backdrop-blur-xs p-8 sm:p-12 shadow-2xl text-left relative overflow-hidden max-w-2xl mx-auto">
            {/* Spot Counter Bar */}
            <div className="mb-8 p-4 rounded-xl border border-emerald-900/50 bg-emerald-950/30">
              <div className="flex items-center justify-between text-xs font-mono mb-2">
                <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  Estado de Inscripciones:
                </span>
                <span className="text-zinc-300 font-bold">11 / 15 LUGARES OCUPADOS</span>
              </div>
              <div className="w-full h-2.5 rounded-full bg-zinc-800/80 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full transition-all duration-500"
                  style={{ width: "73%" }}
                />
              </div>
              <p className="text-[11px] font-mono text-zinc-400 mt-2 text-right">
                Solo restan <span className="text-emerald-400 font-bold">4 cupos disponibles</span>
              </p>
            </div>

            {/* Course Title & Price */}
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between border-b border-zinc-800/80 pb-6 mb-6">
              <div>
                <span className="font-mono text-xs text-zinc-400 uppercase">
                  Acceso Total al Cohorte
                </span>
                <h3 className="text-2xl font-bold text-zinc-100 mt-1">
                  LangGraph con TypeScript
                </h3>
              </div>
              <div className="mt-4 sm:mt-0 text-left sm:text-right">
                <span className="text-3xl font-extrabold text-zinc-100 font-mono">
                  $399 USD
                </span>
                <span className="block text-xs font-mono text-zinc-400">
                  Pago único // Acceso de por vida
                </span>
              </div>
            </div>

            {/* Features Included List */}
            <ul className="space-y-3.5 mb-8">
              {[
                "4 semanas de instrucción intensiva (8 sesiones en vivo en Zoom)",
                "Acceso al Monorepo base listo para producción (pnpm workspaces)",
                "Grabaciones en HD de por vida con índice por minuto",
                "Canal privado de Discord para soporte y code reviews de por vida",
                "Certificado técnico de aprovechamiento firmado por MMonter Studio",
                "Garantía de satisfacción: 100% de devolución antes de la Sesión 2",
              ].map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-zinc-300">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-zinc-800/80 text-emerald-400 mt-0.5 border border-zinc-700/80">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-zinc-100 px-6 py-4 text-sm font-semibold text-zinc-950 shadow-xl hover:bg-white hover:shadow-[0_0_25px_rgba(255,255,255,0.3)] transition-all"
              >
                Inscribirme al Cohorte
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 rounded-lg border border-zinc-700 bg-zinc-800/80 px-6 py-4 text-sm font-medium text-zinc-200 hover:border-zinc-500 hover:bg-zinc-800 transition-all"
              >
                <MessageCircle className="h-4 w-4 text-emerald-400" />
                Hablar por WhatsApp
              </a>
            </div>

            <p className="mt-4 text-center font-mono text-xs text-zinc-500">
              ¿Dudas sobre facturación o pago en moneda local? Contacta por WhatsApp.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

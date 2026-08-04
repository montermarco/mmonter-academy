import { ArrowRight, Check, Users, MessageCircle, Flame, Tag } from "lucide-react";

export function PricingCTA() {
  const whatsappUrl =
    "https://wa.me/5215586777778?text=Hola%20Marco,%20quiero%20aprovechar%20el%20descuento%20Early%20Bird%20($4,999%20MXN)%20para%20el%20Cohorte%20LangGraph%20con%20TypeScript";

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
          <div className="mt-12 rounded-2xl border border-emerald-500/30 bg-zinc-900/60 backdrop-blur-xs p-8 sm:p-12 shadow-2xl text-left relative overflow-hidden max-w-2xl mx-auto ring-1 ring-emerald-500/20">
            
            {/* Early Bird Promo Banner */}
            <div className="mb-6 rounded-xl border border-emerald-500/40 bg-gradient-to-r from-emerald-950/80 via-zinc-900/90 to-emerald-950/80 p-4 relative overflow-hidden shadow-lg">
              <div className="flex items-center justify-between gap-3 flex-wrap">
                <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-bold uppercase tracking-wider">
                  <Flame className="h-4 w-4 text-amber-400 animate-bounce" />
                  <span>Descuento Early Bird — 30% OFF</span>
                </div>
                <span className="text-[11px] font-mono font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2.5 py-0.5 rounded-full">
                  Primeros 5 Suscriptores
                </span>
              </div>
              <p className="text-xs text-zinc-300 mt-2 font-sans">
                Aprovecha la tarifa especial de <strong className="text-white">$4,999 MXN</strong> (sobre el precio regular de $7,199 MXN) para los primeros 5 inscritos en la lista de reserva.
              </p>
            </div>

            {/* Spot Counter Bar */}
            <div className="mb-8 p-4 rounded-xl border border-zinc-800 bg-zinc-900/80">
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
              <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400 mt-2">
                <span className="text-amber-400 font-semibold flex items-center gap-1">
                  <Tag className="h-3 w-3" /> Cupos Early Bird ($4,999 MXN) disponibles
                </span>
                <span className="text-emerald-400 font-bold">4 cupos restantes</span>
              </div>
            </div>

            {/* Course Title & Price */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-zinc-800/80 pb-6 mb-6 gap-4">
              <div>
                <span className="font-mono text-xs text-zinc-400 uppercase tracking-wide">
                  Acceso Total al Cohorte
                </span>
                <h3 className="text-2xl font-bold text-zinc-100 mt-1">
                  LangGraph con TypeScript
                </h3>
              </div>
              <div className="text-left sm:text-right">
                {/* Regular Price (More Visible) */}
                <div className="flex items-center gap-2 sm:justify-end mb-1">
                  <span className="text-xs font-mono text-zinc-400 uppercase">Precio regular:</span>
                  <span className="text-base font-bold font-mono text-zinc-200 line-through decoration-rose-500 decoration-2">
                    $7,199 MXN
                  </span>
                </div>

                {/* Promo Price */}
                <div className="flex items-baseline gap-1.5 sm:justify-end">
                  <span className="text-xs font-mono text-emerald-400 font-bold uppercase">Early Bird:</span>
                  <span className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono tracking-tight">
                    $4,999
                  </span>
                  <span className="text-sm font-bold text-emerald-400 font-mono">
                    MXN
                  </span>
                </div>

                <span className="block text-xs font-mono text-emerald-400/90 font-medium mt-1">
                  Ahorras $2,200 MXN (30% OFF)
                </span>
                <span className="block text-[11px] font-mono text-zinc-400 mt-0.5">
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
                className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-400 px-6 py-4 text-sm font-bold text-zinc-950 shadow-xl hover:bg-emerald-300 hover:shadow-[0_0_25px_rgba(52,211,153,0.4)] transition-all"
              >
                Inscribirme por $4,999 MXN
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
              ¿Dudas sobre facturación, transferencias SPEI o tarjeta? Contacta por WhatsApp.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

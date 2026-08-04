import { Layers, Code2, Workflow } from "lucide-react";

export function Manifesto() {
  const pillars = [
    {
      number: "01",
      icon: Workflow,
      title: "Mini-grafos desechables",
      subtitle: "Aislamiento granular por concepto",
      description:
        "Cada concepto (reductores, checkpointing, condicionales, interrupts) se aísla en un script ejecutable de 10 minutos antes de integrarlo al sistema principal. Cero confusión, cero cajas negras.",
      highlight: "Script de 10 min por lección",
    },
    {
      number: "02",
      icon: Layers,
      title: "Un solo proyecto real",
      subtitle: "Construcción incremental acumulativa",
      description:
        "No perdemos tiempo en 8 ejercicios sueltos de 'hola mundo'. Construimos capa sobre capa un agente de conocimiento completo sobre tu propio dominio técnico o negocio desde la Sesión 1 a la 8.",
      highlight: "Arquitectura acumulativa",
    },
    {
      number: "03",
      icon: Code2,
      title: "TypeScript Nativo",
      subtitle: "Patrones de backend que ya dominas",
      description:
        "Sin wrappers extraños traducidos de Python ni abstracciones opacas. Código en TypeScript idiomatic con async/await, reducers puramente tipados, Node.js y máquinas de estado deterministas.",
      highlight: "Strict Typing & Reducers",
    },
  ];

  return (
    <section id="manifesto" className="py-20 border-t border-b border-zinc-800/80 bg-transparent">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-3xl mb-14">
          <div className="flex items-center gap-2 font-mono text-xs text-emerald-400 uppercase tracking-widest mb-3">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Metodología & Rigor Técnico
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-zinc-100">
            Cero Hype. 100% Arquitectura de Software.
          </h2>
          <p className="mt-4 text-zinc-400 leading-relaxed text-sm sm:text-base">
            La mayoría de tutoriales de IA fallan porque tratan a los LLMs como varitas mágicas.
            En este cohorte los abordamos como lo que son: componentes estocásticos dentro de un flujo determinista de TypeScript.
          </p>
        </div>

        {/* 3 Columns / Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.number}
                className="group relative rounded-xl border border-zinc-800/80 bg-zinc-900/50 p-6 sm:p-8 hover:border-zinc-700 hover:bg-zinc-900/40 transition-all flex flex-col justify-between backdrop-blur-xs"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-700 bg-zinc-800/80 text-zinc-100 group-hover:border-emerald-500/50 group-hover:text-emerald-400 transition-colors">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="font-mono text-xs text-zinc-600 font-bold">
                      {pillar.number}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-zinc-100 group-hover:text-white transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="font-mono text-xs text-emerald-400 mt-1 mb-3">
                    {pillar.subtitle}
                  </p>

                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs font-mono text-zinc-500">
                  <span>Enfoque:</span>
                  <span className="text-zinc-300 bg-zinc-800/40 px-2 py-0.5 rounded border border-zinc-700/50">
                    {pillar.highlight}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

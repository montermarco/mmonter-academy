import { ShieldCheck, FolderGit2, Video, MessageSquare, Code2, Wrench } from "lucide-react";

export function Logistics() {
  const prerequisites = [
    "TypeScript Intermedio / Avanzado (generics, async/await, interfaces, types).",
    "Node.js y manejo de paquetes de backend (pnpm / npm / yarn).",
    "Familiaridad básica con APIs de LLMs (OpenAI, Anthropic o Ollama).",
    "Compromiso de 4 hrs/semana (2h sesión en vivo + 2h desarrollo del proyecto).",
  ];

  const includes = [
    {
      icon: FolderGit2,
      title: "Monorepo Base Listo para Producción",
      description:
        "Acceso inmediato al repositorio pnpm workspaces pre-configurado con TypeScript strict, ESLint, vitest, scripts de automatización y plantillas de agentes.",
    },
    {
      icon: Video,
      title: "Grabaciones de Por Vida en HD",
      description:
        "Todas las sesiones en vivo se graban en alta definición (1080p) y se suben al portal privado el mismo día con índice interactivo por minuto y código visto.",
    },
    {
      icon: MessageSquare,
      title: "Canal Privado de Soporte & Code Reviews",
      description:
        "Acceso al Discord exclusivo de desarrolladores del cohorte para dudas asíncronas, soporte en tu stack y revisión de PRs de tu proyecto final.",
    },
  ];

  const techStack = [
    "LangGraph JS / TS",
    "pnpm Workspaces",
    "LangSmith Tracing",
    "SQLite / Postgres Checkpointing",
    "Next.js 15 App Router",
    "Zod Structured Outputs",
  ];

  return (
    <section id="logistics" className="py-20 border-t border-zinc-800/80 bg-transparent">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Requirements & Includes */}
          <div className="lg:col-span-7 space-y-10">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs text-emerald-400 uppercase tracking-widest mb-3">
                <ShieldCheck className="h-4 w-4" />
                Perfil & Garantías
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-zinc-100">
                Requisitos y Qué Incluye
              </h2>
              <p className="mt-3 text-zinc-400 text-sm sm:text-base leading-relaxed">
                Este cohorte está diseñado exclusivamente para desarrolladores activos que buscan integrar agentes de IA reales a su stack diario de desarrollo.
              </p>
            </div>

            {/* Prerequisites card */}
            <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/50 backdrop-blur-xs p-6">
              <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-zinc-300 mb-4 flex items-center gap-2">
                <Code2 className="h-4 w-4 text-emerald-400" />
                Prerrequisitos Técnicos
              </h3>
              <ul className="space-y-3">
                {prerequisites.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm text-zinc-300">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-zinc-800/80 border border-zinc-700 text-emerald-400 font-mono text-xs mt-0.5">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Included features */}
            <div className="space-y-4">
              <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-zinc-300 mb-2">
                Entregables del Cohorte
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {includes.map((inc, i) => {
                  const Icon = inc.icon;
                  return (
                    <div
                      key={i}
                      className="rounded-xl border border-zinc-800/80 bg-zinc-900/50 backdrop-blur-xs p-5 hover:border-zinc-700 hover:bg-zinc-900/40 transition-colors flex items-start gap-4"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-zinc-700 bg-zinc-800/80 text-emerald-400">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-zinc-100">
                          {inc.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-zinc-400 mt-1 leading-relaxed">
                          {inc.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Stack & Ecosystem */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/50 backdrop-blur-xs p-6 sm:p-8">
              <div className="flex items-center gap-2 font-mono text-xs text-zinc-400 mb-4">
                <Wrench className="h-4 w-4 text-emerald-400" />
                <span>Stack Tecnológico de Grado de Producción</span>
              </div>

              <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                Aprenderás a orquestar el ecosistema moderno de TypeScript utilizado por empresas tecnológicas para agentes deterministas.
              </p>

              <div className="space-y-2">
                {techStack.map((tech, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between font-mono text-xs border border-zinc-800/80 bg-zinc-950/40 px-3.5 py-2.5 rounded-md text-zinc-200"
                  >
                    <span>{tech}</span>
                    <span className="text-[10px] text-emerald-400 bg-emerald-950/60 border border-emerald-800/50 px-2 py-0.5 rounded">
                      Nativo TS
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-zinc-800/80">
                <div className="flex items-center justify-between text-xs text-zinc-400 font-mono mb-2">
                  <span>Modalidad:</span>
                  <span className="text-zinc-200 font-semibold">Live via Zoom // Discord</span>
                </div>
                <div className="flex items-center justify-between text-xs text-zinc-400 font-mono">
                  <span>Horario:</span>
                  <span className="text-zinc-200 font-semibold">2 sesiones / semana (7:00 PM CST)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

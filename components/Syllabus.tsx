"use client";

import { useState } from "react";
import {
  ChevronDown,
  Terminal,
  Clock,
  CheckCircle2,
} from "lucide-react";

interface Session {
  number: number;
  title: string;
  description: string;
  topics: string[];
  deliverable: string;
}

interface Week {
  number: number;
  title: string;
  subtitle: string;
  sessions: Session[];
}

const SYLLABUS_DATA: Week[] = [
  {
    number: 1,
    title: "Semana 1: Fundamentos y Primer Agente",
    subtitle: "De control de flujo imperativo frágil a StateGraph determinista",
    sessions: [
      {
        number: 1,
        title: "Warmup sin grafo vs. Primer StateGraph",
        description:
          "Evidenciamos la fragilidad del control de flujo con if/else imperativos en LLMs. Construimos el primer StateGraph con LangGraph JS, definiendo nodos, bordes y el Agent loop nativo con ToolNode.",
        topics: [
          "if/else frágil vs StateGraph",
          "LangGraph Core in TS",
          "ToolNode & Executions",
          "Ciclo de Vida del Grafo",
        ],
        deliverable: "Script ejecutable: Agent Loop básico en TS con 2 tools nativas.",
      },
      {
        number: 2,
        title: "State a fondo, Reducers y Structured Outputs",
        description:
          "Modelado riguroso del estado del agente usando Annotation.Root, funciones reductoras personalizadas para la acumulación de mensajes y formateo determinista de structured outputs con Zod.",
        topics: [
          "Annotation.Root & Reducers",
          "Message State Management",
          "Structured Output con Zod",
          "Handling Tool Errors",
        ],
        deliverable: "Mini-grafo con estado complejo y validación de esquemas Zod.",
      },
    ],
  },
  {
    number: 2,
    title: "Semana 2: Memoria y Conocimiento",
    subtitle: "Persistencia contextual entre sesiones y RAG avanzado",
    sessions: [
      {
        number: 3,
        title: "Checkpointing, MemorySaver y Threads",
        description:
          "Entendemos cómo funciona la máquina de estados persistente de LangGraph. Implementamos MemorySaver para pruebas y SqliteSaver para persistir hilos de conversación y estados históricos.",
        topics: [
          "Checkpointing Architecture",
          "MemorySaver vs SqliteSaver",
          "Thread ID Indexing",
          "Time-travel (Rewind State)",
        ],
        deliverable: "Grafo con almacenamiento persistente en SQLite e inspección de historial.",
      },
      {
        number: 4,
        title: "RAG Determinista dentro del Grafo",
        description:
          "Integración de Vector Stores, sintaxis de chunking eficiente y generación de respuestas fundamentadas con citas directas. Flujo RAG adaptativo dentro de nodos dedicados.",
        topics: [
          "Graph-native RAG",
          "Vector Stores & Embeddings",
          "Source Citations Engine",
          "Query Rewriting Node",
        ],
        deliverable: "Módulo de búsqueda semántica con citas integradas al estado.",
      },
    ],
  },
  {
    number: 3,
    title: "Semana 3: Producción y Experiencia",
    subtitle: "Interrupción humana en el flujo y entrega de baja latencia",
    sessions: [
      {
        number: 5,
        title: "Human-in-the-Loop (Interrupts & Aprobaciones)",
        description:
          "Patrones de interrupción sincrónica y asincrónica. Cómo pausar el grafo antes de ejecutar acciones de alto riesgo (p. ej. cobros, envíos de correo) y reanudar tras la aprobación humana.",
        topics: [
          "interrupt() Function",
          "Human Validation Nodes",
          "Sync & Async Approvals",
          "State Resumption API",
        ],
        deliverable: "Grafo interactivo que requiere autorización humana antes de mutar datos.",
      },
      {
        number: 6,
        title: "Streaming Token-a-Token & Integración Next.js",
        description:
          "Consumo de eventos en tiempo real con streamEvents y streamMode ('values', 'updates'). Exposición de endpoints SSE (Server-Sent Events) en Next.js App Router para UIs ultra-fluidas.",
        topics: [
          "streamEvents API",
          "Server-Sent Events (SSE)",
          "Next.js App Router Handlers",
          "UI Consumption in React",
        ],
        deliverable: "Endpoint Next.js que transmite tokens y eventos de herramientas en tiempo real.",
      },
    ],
  },
  {
    number: 4,
    title: "Semana 4: Escala, Despliegue y Cierre",
    subtitle: "Arquitecturas multi-agente y despliegue en infraestructura de producción",
    sessions: [
      {
        number: 7,
        title: "Patrón Multi-agente Supervisor & Cross-thread Store",
        description:
          "Orquestación de subgrafos especializados bajo la dirección de un nodo Supervisor. Uso del LangGraph Store para compartir memoria de largo plazo entre diferentes hilos y usuarios.",
        topics: [
          "Supervisor Architecture",
          "Subgraphs & Hierarchies",
          "LangGraph Store (Cross-thread)",
          "Long-term Memory Engine",
        ],
        deliverable: "Sistema multi-agente con 2 subgrafos especializados y memoria persistente.",
      },
      {
        number: 8,
        title: "Deployment, Observabilidad con LangSmith & Deep Agents",
        description:
          "Despliegue en LangGraph Cloud / Platform, monitoreo de métricas, tracing de latencia y costos en LangSmith. Comparativa técnica entre LangGraph vs. Deep Agents / Custom Stacks.",
        topics: [
          "LangGraph Cloud / Platform",
          "LangSmith Tracing & Evaluation",
          "Cost & Latency Auditing",
          "Deep Agents vs LangGraph",
        ],
        deliverable: "Proyecto final desplegado en producción con observabilidad completa activa.",
      },
    ],
  },
];

export function Syllabus() {
  const [openWeek, setOpenWeek] = useState<number>(1);

  const toggleWeek = (weekNumber: number) => {
    setOpenWeek(openWeek === weekNumber ? 0 : weekNumber);
  };

  return (
    <section id="syllabus" className="py-2 backdrop-blur-xs">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-emerald-400 uppercase tracking-widest mb-3 bg-zinc-900/80 border border-zinc-800 px-3 py-1 rounded-full backdrop-blur-md">
            <Terminal className="h-3.5 w-3.5" />
            Curriculum Oficial · 8 Sesiones en Vivo
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-100">
            Temario del Cohorte
          </h2>
          <p className="mt-4 text-zinc-400 text-base sm:text-lg leading-relaxed">
            Diseñado para ingenieros senior. Sin rellenos teóricos. 
            Cada sesión combina arquitectura conceptual con implementación en vivo en TypeScript.
          </p>
        </div>

        {/* Weeks Accordion Container */}
        <div className="max-w-4xl mx-auto space-y-4">
          {SYLLABUS_DATA.map((week) => {
            const isOpen = openWeek === week.number;
            return (
              <div
                key={week.number}
                className="rounded-xl border border-zinc-800 bg-zinc-900/60 backdrop-blur-md overflow-hidden transition-all duration-200"
              >
                {/* Week Header Toggle */}
                <button
                  type="button"
                  onClick={() => toggleWeek(week.number)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left hover:bg-zinc-900/80 transition-colors focus:outline-none"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border font-mono text-sm font-bold transition-colors ${
                        isOpen
                          ? "border-emerald-500/50 bg-emerald-950/40 text-emerald-400"
                          : "border-zinc-700 bg-zinc-800 text-zinc-400"
                      }`}
                    >
                      W0{week.number}
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-zinc-100">
                        {week.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-zinc-400 font-sans mt-0.5">
                        {week.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="hidden sm:inline-block font-mono text-xs text-zinc-500">
                      2 Sesiones
                    </span>
                    <div
                      className={`h-7 w-7 rounded-full border border-zinc-800 bg-zinc-900 flex items-center justify-center text-zinc-400 transition-transform ${
                        isOpen ? "rotate-180 text-zinc-100" : ""
                      }`}
                    >
                      <ChevronDown className="h-4 w-4" />
                    </div>
                  </div>
                </button>

                {/* Week Sessions Breakdown */}
                {isOpen && (
                  <div className="border-t border-zinc-800/80 bg-zinc-950/80 p-5 sm:p-7 space-y-6">
                    {week.sessions.map((session) => (
                      <div
                        key={session.number}
                        className="rounded-lg border border-zinc-800/80 bg-zinc-900/40 p-5 hover:border-zinc-700 transition-colors"
                      >
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-xs font-bold text-emerald-400 bg-emerald-950/50 border border-emerald-800/50 px-2 py-0.5 rounded">
                              Sesión 0{session.number}
                            </span>
                            <h4 className="text-base font-bold text-zinc-100">
                              {session.title}
                            </h4>
                          </div>
                          <span className="font-mono text-[11px] text-zinc-500 flex items-center gap-1">
                            <Clock className="h-3 w-3" /> 2h En Vivo + Q&A
                          </span>
                        </div>

                        <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                          {session.description}
                        </p>

                        {/* Topics tags */}
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {session.topics.map((topic, i) => (
                            <span
                              key={i}
                              className="font-mono text-[11px] bg-zinc-800 text-zinc-300 px-2 py-0.5 rounded border border-zinc-700/60"
                            >
                              #{topic}
                            </span>
                          ))}
                        </div>

                        {/* Deliverable badge */}
                        <div className="flex items-start gap-2 pt-3 border-t border-zinc-800/60 text-xs font-mono text-zinc-300">
                          <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>
                            <strong className="text-zinc-200">Entregable técnico:</strong>{" "}
                            {session.deliverable}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

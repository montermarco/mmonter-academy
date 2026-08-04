"use client";

import { ArrowRight, MessageCircle, ShieldCheck, Terminal, Users } from "lucide-react";
import { CodeSnippet } from "./CodeSnippet";

export function Hero() {
  const whatsappUrl =
    "https://wa.me/5215586777778?text=Hola%20Marco,%20quiero%20más%20información%20sobre%20el%20Cohorte%20LangGraph%20con%20TypeScript";

  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-32 bg-transparent">
      {/* Ambient lighting backdrop */}
      <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 -z-10 h-[500px] w-full max-w-7xl opacity-20 blur-3xl">
        <div className="h-full w-full bg-gradient-to-tr from-emerald-950 via-zinc-900 to-emerald-900" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-700/80 bg-zinc-900/90 px-3.5 py-1.5 text-xs font-mono text-zinc-300 shadow-inner mb-8">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Cohorte 1</span>
            <span className="text-zinc-600">·</span>
            <span className="text-zinc-200">En Vivo</span>
            <span className="text-zinc-600">·</span>
            <span className="text-emerald-400 font-semibold">
              Cupos Limitados (15 devs)
            </span>
          </div>

          {/* Headline */}
          <h1 className="max-w-4xl text-3xl font-extrabold tracking-tight text-zinc-100 sm:text-5xl lg:text-6xl leading-[1.15]">
            LangGraph con TypeScript:{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 via-zinc-300 to-zinc-500">
              Agentes de IA Deterministas en Producción
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 max-w-2xl text-base sm:text-lg text-zinc-400 leading-relaxed font-sans">
            <strong className="text-zinc-200 font-semibold">4 semanas. 8 sesiones en vivo.</strong>{" "}
            Construye y despliega un sistema multi-agente con arquitectura de producción sobre tus propios datos.{" "}
            <span className="font-mono text-zinc-300 bg-zinc-900/80 border border-zinc-800 px-1.5 py-0.5 rounded">
              100% código en TS
            </span>
            ,{" "}
            <span className="font-mono text-zinc-300 bg-zinc-900/80 border border-zinc-800 px-1.5 py-0.5 rounded">
              0% magia negra
            </span>
            .
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <a
              href="#pricing"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-zinc-100 px-6 py-3.5 text-sm font-semibold text-zinc-950 shadow-lg hover:bg-white hover:shadow-[0_0_25px_rgba(255,255,255,0.25)] transition-all"
            >
              Inscribirme al Cohorte
              <ArrowRight className="h-4 w-4" />
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900/80 px-6 py-3.5 text-sm font-medium text-zinc-200 hover:border-zinc-700 hover:bg-zinc-800/80 transition-all"
            >
              <MessageCircle className="h-4 w-4 text-emerald-400" />
              Hablar por WhatsApp
            </a>
          </div>

          {/* Key metrics bar */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs font-mono text-zinc-500">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-zinc-400" />
              <span>Arquitectura Determinista</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Terminal className="h-4 w-4 text-zinc-400" />
              <span>LangGraph JS Core</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Users className="h-4 w-4 text-emerald-400" />
              <span className="text-zinc-300">Quedan 4 de 15 lugares</span>
            </div>
          </div>
        </div>

        {/* Technical Code Snippet Preview Container */}
        <div className="mt-14 max-w-4xl mx-auto">
          <div className="relative rounded-2xl p-1 bg-gradient-to-b from-zinc-700/40 via-zinc-800/20 to-transparent">
            <CodeSnippet />
          </div>
        </div>
      </div>
    </section>
  );
}

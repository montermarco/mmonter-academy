"use client";

import { MessageCircle, X } from "lucide-react";
import { useState } from "react";

export function WhatsAppWidget() {
  const [closed, setClosed] = useState(false);

  const whatsappUrl =
    "https://wa.me/5215586777778?text=Hola%20Marco,%20tengo%20dudas%20con%20mi%20stack%20o%20el%20temario%20del%20cohorte";

  if (closed) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex items-center gap-3">
      {/* Tooltip / Prompt bubble */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden sm:flex items-center gap-2.5 rounded-full border border-zinc-700 bg-zinc-900/95 backdrop-blur-md px-4 py-2.5 shadow-2xl hover:border-zinc-500 hover:bg-zinc-800 transition-all text-xs font-mono text-zinc-200 group"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
        </span>
        <span className="group-hover:text-white transition-colors">
          ¿Dudas con tu stack o el temario? <span className="underline decoration-emerald-500 underline-offset-4">Escríbeme a WhatsApp</span>
        </span>
      </a>

      {/* Discrete WhatsApp Round Button */}
      <div className="relative">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-12 w-12 items-center justify-center rounded-full border border-emerald-500/50 bg-emerald-950 text-emerald-400 shadow-xl hover:bg-emerald-900 hover:scale-105 transition-all focus:outline-none"
          title="Hablar por WhatsApp"
        >
          <MessageCircle className="h-6 w-6" />
        </a>

        {/* Close X badge for mobile */}
        <button
          onClick={(e) => {
            e.preventDefault();
            setClosed(true);
          }}
          className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-zinc-800 border border-zinc-700 text-zinc-400 hover:text-zinc-100 text-[10px]"
          title="Cerrar widget"
        >
          <X className="h-2.5 w-2.5" />
        </button>
      </div>
    </div>
  );
}

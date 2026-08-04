"use client";

import { useState } from "react";
import { Check, Copy, FileCode2 } from "lucide-react";

interface CodeTab {
  id: string;
  name: string;
  code: string;
  language: string;
}

const TABS: CodeTab[] = [
  {
    id: "graph",
    name: "agent.graph.ts",
    language: "typescript",
    code: `import { StateGraph, Annotation, END, START } from "@langchain/langgraph";
import { MemorySaver } from "@langchain/langgraph";
import { BaseMessage, HumanMessage } from "@langchain/core/messages";

// State Annotation con Reducers deterministas en TS
const AgentState = Annotation.Root({
  messages: Annotation<BaseMessage[]>({
    value: (x, y) => x.concat(y),
    default: () => [],
  }),
  context: Annotation<Record<string, unknown>>({
    value: (x, y) => ({ ...x, ...y }),
    default: () => ({}),
  }),
  isApproved: Annotation<boolean>({
    value: (_, y) => y,
    default: () => false,
  })
});

// Inicialización de StateGraph tipado
const builder = new StateGraph(AgentState)
  .addNode("supervisorNode", async (state) => {
    // Evaluación de intenciones sin wrappers frágiles
    return { context: { step: "supervised" } };
  })
  .addNode("executeAction", async (state) => {
    return { messages: [new HumanMessage("Ejecutando acción con side-effects")] };
  })
  .addEdge(START, "supervisorNode")
  .addConditionalEdges("supervisorNode", (state) => {
    return state.isApproved ? "executeAction" : END;
  })
  .addEdge("executeAction", END);

// Checkpointer para persistencia local & threads
export const graph = builder.compile({
  checkpointer: new MemorySaver(),
});`,
  },
  {
    id: "checkpoint",
    name: "checkpointer.ts",
    language: "typescript",
    code: `import { SqliteSaver } from "@langchain/langgraph-checkpoint-sqlite";
import { graph } from "./agent.graph";

// Persistence Layer real para producción sobre SQLite / Postgres
const checkpointer = SqliteSaver.fromConnString("./state_store.db");
const app = graph.compile({ checkpointer });

// Ejecución persistente indexada por Thread ID
const config = { configurable: { thread_id: "usr_session_9482" } };

// Reanudación exacta de estado desde la última sesión
const currentState = await app.getState(config);
console.log("Current Thread Checkpoint:", currentState.values);`,
  },
  {
    id: "interrupt",
    name: "human-in-loop.ts",
    language: "typescript",
    code: `import { interrupt } from "@langchain/langgraph";
import { graph } from "./agent.graph";

// Patrón Human-in-the-loop: Interrupción sincrónica antes de mutar producción
async function refundApprovalNode(state: typeof AgentState.State) {
  if (!state.isApproved) {
    // Detiene la ejecución del grafo y aguarda decisión humana externa
    const approvalResponse = interrupt({
      action: "REQUIRES_HUMAN_APPROVAL",
      amountUSD: state.context.amount,
    });
    
    return { isApproved: approvalResponse.approved };
  }
  return {};
}`,
  },
];

export function CodeSnippet() {
  const [activeTab, setActiveTab] = useState<string>("graph");
  const [copied, setCopied] = useState<boolean>(false);

  const currentTab = TABS.find((tab) => tab.id === activeTab) || TABS[0];

  const handleCopy = () => {
    navigator.clipboard.writeText(currentTab.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full rounded-xl border border-zinc-800 bg-zinc-950/90 shadow-2xl overflow-hidden font-mono text-xs text-zinc-300">
      {/* Header bar */}
      <div className="flex flex-wrap items-center justify-between border-b border-zinc-800 bg-zinc-900/60 px-4 py-2.5 gap-2">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 mr-3">
            <div className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
            <div className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
            <div className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
          </div>
          {/* File tabs */}
          <div className="flex items-center gap-1">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs transition-colors ${
                  activeTab === tab.id
                    ? "bg-zinc-800 text-zinc-100 font-medium"
                    : "text-zinc-500 hover:text-zinc-300 hover:bg-zinc-900"
                }`}
              >
                <FileCode2 className="h-3.5 w-3.5 text-emerald-400" />
                {tab.name}
              </button>
            ))}
          </div>
        </div>

        {/* Copy button */}
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 rounded-md border border-zinc-800 bg-zinc-900 px-2.5 py-1 text-xs text-zinc-400 hover:border-zinc-700 hover:text-zinc-200 transition-all ml-auto"
          title="Copiar código"
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5 text-emerald-400" />
              <span className="text-emerald-400">Copiado</span>
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5" />
              <span>Copiar</span>
            </>
          )}
        </button>
      </div>

      {/* Code body */}
      <div className="p-4 overflow-x-auto max-h-[380px] leading-relaxed">
        <pre className="text-zinc-300 select-text">
          <code>
            {currentTab.code.split("\n").map((line, idx) => (
              <div key={idx} className="table-row">
                <span className="table-cell text-zinc-600 select-none pr-4 text-right w-8">
                  {idx + 1}
                </span>
                <span className="table-cell whitespace-pre">
                  {line.includes("//") ? (
                    <>
                      {line.split("//")[0]}
                      <span className="text-zinc-500 italic">
                        {line.split("//")[1]}
                      </span>
                    </>
                  ) : line.includes("import") || line.includes("from") ? (
                    <span className="text-indigo-300">{line}</span>
                  ) : line.includes("StateGraph") ||
                    line.includes("Annotation") ||
                    line.includes("MemorySaver") ||
                    line.includes("interrupt") ? (
                    <span className="text-emerald-300">{line}</span>
                  ) : (
                    line
                  )}
                </span>
              </div>
            ))}
          </code>
        </pre>
      </div>

      {/* Footer status line */}
      <div className="flex items-center justify-between border-t border-zinc-800/80 bg-zinc-900/40 px-4 py-2 text-[11px] text-zinc-500">
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-mono">LangGraph TS Core v0.2+ // Strictly Typed</span>
        </div>
        <span className="hidden sm:inline-block font-mono">
          0% Python Wrappers · 100% Native Async
        </span>
      </div>
    </div>
  );
}

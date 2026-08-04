import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LangGraph con TypeScript — Agentes de IA Deterministas en Producción | MMonter Studio",
  description:
    "4 semanas. 8 sesiones en vivo. Construye y despliega un sistema multi-agente con arquitectura de producción sobre tus propios datos. 100% código en TS, 0% magia negra.",
  keywords: [
    "LangGraph",
    "TypeScript",
    "AI Agents",
    "StateGraph",
    "Multi-agent",
    "LangChain",
    "Node.js",
    "Curso Agentes IA",
    "MMonter Studio",
  ],
  authors: [{ name: "Marco Monter", url: "https://wa.me/5215555555555" }],
  openGraph: {
    title: "LangGraph con TypeScript — Cohorte 1 En Vivo",
    description:
      "Construye y despliega un sistema multi-agente con arquitectura de producción sobre tus propios datos. 100% TypeScript.",
    siteName: "MMonter Studio // Academy",
    locale: "es_MX",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased`}
    >
      <body className="bg-zinc-950 text-zinc-100 min-h-full flex flex-col selection:bg-zinc-800 selection:text-zinc-100">
        {children}
      </body>
    </html>
  );
}

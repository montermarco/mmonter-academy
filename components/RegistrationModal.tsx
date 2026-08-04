"use client";

import { useState, useEffect } from "react";
import { X, Loader2, ShieldCheck, ArrowRight, User, Mail, Code2, Phone, MessageSquare } from "lucide-react";

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function RegistrationModal({ isOpen, onClose }: RegistrationModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    tsLevel: "Intermedio",
    phone: "",
    useCase: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Prevent scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const mercadoPagoUrl = "https://mpago.la/2tSyQyX";

    try {
      // Send data to FormSubmit
      await fetch("https://formsubmit.co/ajax/marco@mmonter-studio.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `⚡ Nuevo Registro Cohorte: ${formData.name} ($4,999 MXN)`,
          _captcha: "false",
          _template: "table",
          "Nombre Completo": formData.name,
          "Correo Electrónico": formData.email,
          "Nivel de TypeScript": formData.tsLevel,
          "Teléfono / WhatsApp": formData.phone || "No especificado",
          "Caso de uso / Objetivo": formData.useCase || "No especificado",
          "Monto a Pagar": "$4,999 MXN (Early Bird 30% OFF)",
          "Fecha de Registro": new Date().toLocaleString("es-MX", { timeZone: "America/Mexico_City" }),
        }),
      });
    } catch (error) {
      console.error("Error al enviar registro:", error);
    } finally {
      // Immediately redirect user to Mercado Pago checkout
      window.location.href = mercadoPagoUrl;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-zinc-950/80 backdrop-blur-md transition-opacity animate-in fade-in duration-200"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-lg rounded-2xl border border-zinc-800 bg-zinc-900/90 backdrop-blur-xl p-6 sm:p-8 shadow-2xl z-10 my-8 overflow-hidden border-emerald-500/20 ring-1 ring-emerald-500/10 animate-in zoom-in-95 duration-200">
        {/* Glow Header effect */}
        <div className="absolute -top-24 -left-24 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 rounded-full p-2 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/80 transition-colors"
          aria-label="Cerrar ventana"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 font-mono text-[11px] text-emerald-400 uppercase tracking-widest mb-2 bg-emerald-950/60 border border-emerald-800/40 px-3 py-1 rounded-full">
            <ShieldCheck className="h-3.5 w-3.5" />
            Reserva con Descuento Early Bird
          </div>
          <h3 className="text-2xl font-bold text-zinc-100 tracking-tight">
            Completa tus datos de alumno
          </h3>
          <p className="text-xs text-zinc-400 mt-1">
            Ingresa tu información para vincular tu inscripción a tu pago de <strong className="text-emerald-400">$4,999 MXN</strong>.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Nombre completo */}
          <div>
            <label className="block text-xs font-mono font-medium text-zinc-300 mb-1.5 flex items-center gap-1.5">
              <User className="h-3.5 w-3.5 text-emerald-400" />
              Nombre completo <span className="text-emerald-400">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="Ej. Marco Monter"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full rounded-lg border border-zinc-800 bg-zinc-950/80 px-3.5 py-2.5 text-sm text-zinc-100 placeholder-zinc-500 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-all font-sans"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-xs font-mono font-medium text-zinc-300 mb-1.5 flex items-center gap-1.5">
              <Mail className="h-3.5 w-3.5 text-emerald-400" />
              Correo electrónico <span className="text-emerald-400">*</span>
            </label>
            <input
              type="email"
              required
              placeholder="tu@empresa.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full rounded-lg border border-zinc-800 bg-zinc-950/80 px-3.5 py-2.5 text-sm text-zinc-100 placeholder-zinc-500 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-all font-sans"
            />
          </div>

          {/* Nivel de TypeScript */}
          <div>
            <label className="block text-xs font-mono font-medium text-zinc-300 mb-1.5 flex items-center gap-1.5">
              <Code2 className="h-3.5 w-3.5 text-emerald-400" />
              Nivel actual de TypeScript <span className="text-emerald-400">*</span>
            </label>
            <div className="grid grid-cols-3 gap-2">
              {["Principiante", "Intermedio", "Avanzado"].map((level) => (
                <button
                  key={level}
                  type="button"
                  onClick={() => setFormData({ ...formData, tsLevel: level })}
                  className={`rounded-lg border px-3 py-2 text-xs font-mono transition-all ${
                    formData.tsLevel === level
                      ? "border-emerald-500 bg-emerald-950/40 text-emerald-300 font-semibold"
                      : "border-zinc-800 bg-zinc-950/40 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200"
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>

          {/* WhatsApp / Teléfono (Opcional) */}
          <div>
            <label className="block text-xs font-mono font-medium text-zinc-300 mb-1.5 flex items-center gap-1.5">
              <Phone className="h-3.5 w-3.5 text-emerald-400" />
              Teléfono / WhatsApp <span className="text-zinc-500 font-normal">(Opcional)</span>
            </label>
            <input
              type="tel"
              placeholder="+52 55 1234 5678"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full rounded-lg border border-zinc-800 bg-zinc-950/80 px-3.5 py-2.5 text-sm text-zinc-100 placeholder-zinc-500 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-all font-sans"
            />
          </div>

          {/* Objetivo o caso de uso (Opcional) */}
          <div>
            <label className="block text-xs font-mono font-medium text-zinc-300 mb-1.5 flex items-center gap-1.5">
              <MessageSquare className="h-3.5 w-3.5 text-emerald-400" />
              ¿Qué te gustaría construir con LangGraph? <span className="text-zinc-500 font-normal">(Opcional)</span>
            </label>
            <textarea
              rows={2}
              placeholder="Ej. Agentes autónomos para análisis de datos, automatización de código..."
              value={formData.useCase}
              onChange={(e) => setFormData({ ...formData, useCase: e.target.value })}
              className="w-full rounded-lg border border-zinc-800 bg-zinc-950/80 px-3.5 py-2.5 text-sm text-zinc-100 placeholder-zinc-500 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-all font-sans resize-none"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-400 px-6 py-3.5 text-sm font-bold text-zinc-950 shadow-xl hover:bg-emerald-300 hover:shadow-[0_0_25px_rgba(52,211,153,0.4)] transition-all disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span>Procesando e iniciando pago...</span>
                </>
              ) : (
                <>
                  <span>Continuar al Pago ($4,999 MXN)</span>
                  <ArrowRight className="h-4 w-4" />
                </>
              )}
            </button>
          </div>

          <p className="text-[11px] font-mono text-zinc-500 text-center">
            Serás redirigido inmediatamente a Mercado Pago para completar tu pago de forma 100% segura.
          </p>
        </form>
      </div>
    </div>
  );
}

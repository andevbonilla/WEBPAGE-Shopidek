"use client";

import { useState } from "react";

interface EmailSimulatorProps {
  locale: "en" | "es";
  simBadge: string;
  simTitle: string;
  simDesc: string;
  simLabel: string;
  simInputPlaceholder: string;
  simButton: string;
  simAnalyzing: string;
  simResults: string;
  simEmail: string;
  simSpamScore: string;
  simStatus: string;
  simAction: string;
  simTech: string;
}

export default function EmailSimulator({
  locale,
  simBadge,
  simTitle,
  simDesc,
  simLabel,
  simInputPlaceholder,
  simButton,
  simAnalyzing,
  simResults,
  simEmail,
  simSpamScore,
  simStatus,
  simAction,
  simTech
}: EmailSimulatorProps) {
  const [emailInput, setEmailInput] = useState("");
  const [simulationResult, setSimulationResult] = useState<any>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const sampleEmails = [
    { email: "sofia.lopez92@gmail.com", risk: "low" },
    { email: "x8192as_spambot@qq.com", risk: "high" },
    { email: "contact@temp-mail-generator.org", risk: "critical" }
  ];

  const handleSimulate = (email: string) => {
    setEmailInput(email);
    setIsAnalyzing(true);
    setSimulationResult(null);

    setTimeout(() => {
      setIsAnalyzing(false);
      if (email.includes("gmail.com") || email.includes("hotmail") || email.includes("yahoo")) {
        setSimulationResult({
          email,
          score: "2%",
          status: locale === "en" ? "Safe (Clean)" : "Seguro (Limpio)",
          color: "text-emerald-600 bg-emerald-50 border-emerald-200",
          action: locale === "en" ? "Approve & Sync" : "Aprobar y Sincronizar",
          details: locale === "en" ? "Reputable domain. No suspicious character patterns." : "Dominio reputado. Sin patrones sospechosos de caracteres."
        });
      } else if (email.includes("qq.com") || email.includes("spambot")) {
        setSimulationResult({
          email,
          score: "94%",
          status: locale === "en" ? "High Risk (Spam Bot)" : "Riesgo Alto (Spam Bot)",
          color: "text-amber-600 bg-amber-50 border-amber-200",
          action: locale === "en" ? "Manual Review Suggested" : "Revisión Manual Sugerida",
          details: locale === "en" ? "Automatically generated email pattern. High delivery frequency detected." : "Patrón de correo generado automáticamente. Frecuencia alta de envío detectada."
        });
      } else if (email.includes("temp-mail") || email.includes("generator") || email.includes("org")) {
        setSimulationResult({
          email,
          score: "100%",
          status: locale === "en" ? "Critical (Temp Email)" : "Crítico (Email Temporal)",
          color: "text-red-600 bg-red-50 border-red-200",
          action: locale === "en" ? "Auto-Block / Archive" : "Bloqueo Automático / Archivar",
          details: locale === "en" ? "Disposable/temporary email domain detected in our active database." : "Dominio de correo desechable/temporal detectado en nuestra base de datos activa."
        });
      } else {
        const isSuspicious = email.length > 18 || /[^a-zA-Z0-9@.]/.test(email);
        setSimulationResult({
          email,
          score: isSuspicious ? "75%" : "12%",
          status: isSuspicious 
            ? (locale === "en" ? "Moderate Risk" : "Riesgo Moderado") 
            : (locale === "en" ? "Safe (Clean)" : "Seguro (Limpio)"),
          color: isSuspicious ? "text-amber-600 bg-amber-50 border-amber-200" : "text-emerald-600 bg-emerald-50 border-emerald-200",
          action: isSuspicious 
            ? (locale === "en" ? "Manual Review Suggested" : "Revisión Manual Sugerida") 
            : (locale === "en" ? "Approve & Sync" : "Aprobar y Sincronizar"),
          details: isSuspicious 
            ? (locale === "en" ? "Username contains unusual characters or suspicious length." : "El nombre de usuario contiene caracteres inusuales o longitud sospechosa.") 
            : (locale === "en" ? "Standard email structure and domain." : "Dominio y estructura de correo estándar.")
        });
      }
    }, 1200);
  };

  return (
    <section id="simulator" className="py-20 bg-brand-card border-y border-brand-border">
      <div className="layout-container">
        <div className="text-center flex flex-col gap-4 mb-12">
          <span className="font-display font-extrabold text-xs text-brand-accent bg-brand-main px-4 py-1.5 rounded-full self-center uppercase tracking-wider">
            {simBadge}
          </span>
          <h2 className="font-display font-black text-2xl md:text-3xl text-brand-main tracking-tight">
            {simTitle}
          </h2>
          <p className="text-brand-secondary text-sm max-w-2xl mx-auto">
            {simDesc}
          </p>
        </div>

        <div className="bg-brand-bg rounded-3xl border border-brand-border p-6 md:p-8 shadow-soft max-w-4xl mx-auto">
          <div className="flex flex-col gap-4">
            <div>
              <label className="block text-xs font-bold text-brand-main uppercase tracking-wider mb-2">
                {simLabel}
              </label>
              <div className="flex flex-wrap gap-2 mb-4">
                {sampleEmails.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => handleSimulate(item.email)}
                    className="bg-brand-card hover:bg-zinc-50 border border-brand-border px-3.5 py-2 rounded-xl text-xs font-medium text-brand-secondary transition-colors"
                  >
                    {item.email}
                    <span className={`ml-2 text-[10px] font-bold ${
                      item.risk === "low" ? "text-emerald-600" : item.risk === "high" ? "text-amber-600" : "text-red-600"
                    }`}>
                      ({item.risk === "low" ? (locale === "en" ? "Clean" : "Limpio") : item.risk === "high" ? (locale === "en" ? "Suspicious" : "Sospechoso") : (locale === "en" ? "Temp Bot" : "Bot Temporal")})
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder={simInputPlaceholder}
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                className="flex-1 bg-brand-card border border-brand-border p-4 rounded-xl text-sm focus:outline-none focus:border-brand-accent font-medium text-brand-main"
              />
              <button
                onClick={() => handleSimulate(emailInput)}
                disabled={isAnalyzing || !emailInput}
                className="bg-brand-main hover:bg-brand-main/90 disabled:bg-zinc-300 text-brand-bg px-6 py-4 rounded-xl font-bold text-sm transition-colors flex items-center justify-center gap-2"
              >
                {isAnalyzing ? (
                  <>
                    <span className="w-4 h-4 border-2 border-brand-bg border-t-transparent rounded-full animate-spin"></span>
                    <span>{simAnalyzing}</span>
                  </>
                ) : (
                  <span>{simButton}</span>
                )}
              </button>
            </div>

            {simulationResult && (
              <div className="mt-6 border-t border-brand-border/60 pt-6 animate-fadeIn">
                <h4 className="text-xs font-bold text-brand-main uppercase tracking-wider mb-4">
                  {simResults}
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-brand-card p-6 rounded-2xl border border-brand-border">
                  <div className="space-y-3">
                    <div>
                      <p className="text-[10px] text-brand-muted uppercase font-bold tracking-wider">{simEmail}</p>
                      <p className="text-sm font-bold text-brand-main truncate">{simulationResult.email}</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-brand-muted uppercase font-bold tracking-wider">{simSpamScore}</p>
                      <p className="text-2xl font-display font-black text-brand-main">{simulationResult.score}</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-brand-muted uppercase font-bold tracking-wider">{simStatus}</p>
                      <span className={`inline-block text-xs px-2.5 py-1 rounded font-bold border mt-1 ${simulationResult.color}`}>
                        {simulationResult.status}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3 border-t md:border-t-0 md:border-l border-brand-border/60 pt-4 md:pt-0 md:pl-6">
                    <div>
                      <p className="text-[10px] text-brand-muted uppercase font-bold tracking-wider">{simAction}</p>
                      <p className="text-sm font-bold text-brand-main mt-0.5">{simulationResult.action}</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-brand-muted uppercase font-bold tracking-wider">{simTech}</p>
                      <p className="text-xs text-brand-secondary leading-relaxed font-light mt-0.5">
                        {simulationResult.details}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

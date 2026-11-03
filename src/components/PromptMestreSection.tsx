import React, { useState } from "react";
import {
  PROMPT_TITLE,
  PROMPT_DESCRIPTION,
  PROMPT_OBSERVATION,
  PROMPT_START_COMMAND,
  FULL_PROMPT_TEXT
} from "../data/promptData";
import {
  Copy,
  Check,
  Download,
  Terminal,
  AlertTriangle,
  FileText,
  ChevronDown,
  ChevronUp
} from "lucide-react";

export const PromptMestreSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [copiedTrigger, setCopiedTrigger] = useState(false);
  const [showFullPreview, setShowFullPreview] = useState(false);

  const handleCopyAll = () => {
    navigator.clipboard.writeText(FULL_PROMPT_TEXT);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleCopyTrigger = () => {
    navigator.clipboard.writeText("Vamos criar o próximo Reel.");
    setCopiedTrigger(true);
    setTimeout(() => setCopiedTrigger(false), 2500);
  };

  const handleDownload = (format: "md" | "txt") => {
    const blob = new Blob([FULL_PROMPT_TEXT], {
      type: format === "md" ? "text/markdown;charset=utf-8" : "text/plain;charset=utf-8"
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `Prompt-Mestre-O-Aleatorio.${format}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div id="material-apoio" className="pt-16 pb-8 bg-slate-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Section Header as requested */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-black uppercase tracking-widest text-slate-500 block mb-2">
            MATERIAL DE APOIO
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
            Ferramentas, Repositório e Prompt da Aula
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 font-medium">
            Todos os recursos citados no vídeo organizados para você clonar, instalar e aplicar imediatamente.
          </p>
        </div>

        {/* Compact Prompt Card */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-sm">
          {/* Top row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-100">
            <div>
              <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200 uppercase tracking-wider">
                Prompt do ChatGPT
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mt-2">
                {PROMPT_TITLE}
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-slate-600 font-medium leading-relaxed max-w-2xl">
                {PROMPT_DESCRIPTION}
              </p>
            </div>

            {/* Quick Copy Primary Button */}
            <div className="shrink-0 flex items-center gap-2">
              <button
                onClick={handleCopyAll}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-extrabold uppercase tracking-wider text-white bg-slate-950 hover:bg-slate-800 active:bg-slate-900 rounded-xl transition-all shadow-md cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Copiado com Sucesso!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copiar Prompt Completo</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Observation Alert */}
          <div className="my-4 p-3.5 rounded-xl bg-amber-50/80 border border-amber-200/70 flex items-start gap-2.5 text-xs text-amber-900 leading-relaxed font-medium">
            <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <strong className="font-bold">Observação importante: </strong>
              {PROMPT_OBSERVATION}
            </div>
          </div>

          {/* Activation command snippet */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3.5 rounded-xl bg-slate-900 text-white font-mono text-xs my-4">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-emerald-400 shrink-0" />
              <span className="text-slate-400">Comando para iniciar:</span>
              <span className="text-emerald-300 font-bold bg-white/10 px-2 py-0.5 rounded">
                "Vamos criar o próximo Reel."
              </span>
            </div>
            <button
              onClick={handleCopyTrigger}
              className="text-slate-300 hover:text-white transition-colors text-[11px] underline self-start sm:self-auto cursor-pointer"
            >
              {copiedTrigger ? "Copiado!" : "Copiar comando"}
            </button>
          </div>

          {/* Compact Code Preview Box (Small, not giant or expanded on the whole page) */}
          <div className="relative rounded-xl border border-slate-200 bg-slate-50 overflow-hidden">
            <div className="flex items-center justify-between px-4 py-2 bg-slate-100 border-b border-slate-200 text-[11px] font-mono text-slate-500">
              <span>Prévia do Prompt Mestre</span>
              <button
                onClick={() => setShowFullPreview(!showFullPreview)}
                className="text-slate-700 hover:text-slate-950 font-sans font-semibold flex items-center gap-1 cursor-pointer"
              >
                <span>{showFullPreview ? "Recolher prévia" : "Expandir prévia"}</span>
                {showFullPreview ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
              </button>
            </div>

            <pre
              className={`p-4 text-xs font-mono text-slate-700 leading-relaxed overflow-y-auto whitespace-pre-wrap select-all transition-all ${
                showFullPreview ? "max-h-96" : "max-h-36"
              }`}
            >
              {FULL_PROMPT_TEXT.slice(0, 950)}
              {!showFullPreview && "\n\n... [Clique em 'Copiar Prompt Completo' para copiar todas as 13 seções na íntegra]"}
            </pre>
          </div>

          {/* Bottom toolbar with download formats and copy */}
          <div className="mt-4 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleDownload("md")}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:text-slate-950 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Baixar (.md)</span>
              </button>
              <button
                onClick={() => handleDownload("txt")}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:text-slate-950 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Baixar (.txt)</span>
              </button>
            </div>

            <button
              onClick={handleCopyAll}
              className="font-bold text-slate-900 hover:text-emerald-700 underline flex items-center gap-1 cursor-pointer"
            >
              <Copy className="w-3.5 h-3.5" />
              <span>{copied ? "Prompt Copiado!" : "Copiar todo o texto"}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

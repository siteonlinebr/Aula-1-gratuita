import React, { useState } from "react";
import {
  FolderGit2,
  Copy,
  Check,
  ExternalLink,
  Terminal,
  Code2,
  Cpu,
  Layers,
  ArrowUpRight
} from "lucide-react";

interface GithubRepoSectionProps {
  repoUrl: string;
}

export const GithubRepoSection: React.FC<GithubRepoSectionProps> = ({
  repoUrl
}) => {
  const [copiedClone, setCopiedClone] = useState(false);
  const cloneCommand = `git clone ${repoUrl}.git`;

  const handleCopyClone = () => {
    navigator.clipboard.writeText(cloneCommand);
    setCopiedClone(true);
    setTimeout(() => setCopiedClone(false), 2500);
  };

  return (
    <section id="github" className="py-16 sm:py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-950 text-white rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-2xl relative overflow-hidden">
          {/* Ambient light streak */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            {/* Top row */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white">
                  <FolderGit2 className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono text-emerald-400 font-semibold tracking-wider uppercase">
                    Repositório de Edição com IA
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    calesthio / OpenMontage
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-950 bg-white hover:bg-slate-100 rounded-xl transition-all shadow-md"
                >
                  <span>Abrir Repositório no GitHub</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Content summary */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-7 space-y-3">
                <p className="text-sm text-slate-300 leading-relaxed">
                  Este é o motor de código aberto que utilizamos no vídeo para sincronizar
                  a narração do <strong className="text-white font-semibold">ElevenLabs</strong>{" "}
                  com os clipes gerados no{" "}
                  <strong className="text-white font-semibold">Google Flow</strong>.
                </p>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Ele é operado através do agente <strong className="text-emerald-400 font-semibold">Antigravity</strong>,
                  que clona o projeto, organiza os arquivos e renderiza a montagem vertical em 9:16
                  conforme a tabela de minutagem enviada pelo ChatGPT.
                </p>

                <div className="pt-2 flex flex-wrap gap-2 text-xs">
                  <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300">
                    Auto Audio-Sync
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300">
                    Proporção 9:16 Vertical
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300">
                    MP4 1080x1920 30fps
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300">
                    Antigravity Compatible
                  </span>
                </div>
              </div>

              {/* Terminal Snippet Box */}
              <div className="md:col-span-5 bg-slate-900/90 rounded-2xl border border-slate-800 p-4 font-mono text-xs shadow-inner">
                <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-800 text-slate-400 text-[11px]">
                  <span className="flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Clone via Terminal ou Antigravity</span>
                  </span>
                  <button
                    onClick={handleCopyClone}
                    className="flex items-center gap-1 text-slate-400 hover:text-white transition-colors"
                  >
                    {copiedClone ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-400" />
                        <span className="text-emerald-400 text-[10px]">Copiado!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span className="text-[10px]">Copiar</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="space-y-2 text-slate-300">
                  <div className="text-slate-500"># 1. Clonar repositório</div>
                  <div className="text-emerald-300 bg-black/40 p-2 rounded border border-white/5 select-all overflow-x-auto">
                    {cloneCommand}
                  </div>

                  <div className="text-slate-500 pt-1"># 2. Instalar dependências</div>
                  <div className="text-slate-200">cd OpenMontage && npm install</div>

                  <div className="text-slate-500 pt-1"># 3. Rodar sincronização</div>
                  <div className="text-slate-200">npm run sync-montage</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

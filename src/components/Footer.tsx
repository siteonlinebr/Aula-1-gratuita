import React from "react";
import { MessageCircle, Send, Sparkles } from "lucide-react";

interface FooterProps {
  onOpenMentoria: () => void;
  whatsappLink: string;
  telegramLink: string;
  githubRepo: string;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenMentoria,
  whatsappLink,
  telegramLink,
  githubRepo
}) => {
  const logoUrl = "/assets/aistudio/869586337_18124526891303668_5311906229483552436_n_2ff2a814.jpg";

  return (
    <footer className="bg-white border-t border-slate-200 py-12 pb-24 sm:pb-16 text-slate-600 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-100 text-center sm:text-left">
          {/* Brand Info with Logo only (removed O Aleatório text as requested) */}
          <div className="md:col-span-5 space-y-3 flex flex-col items-center sm:items-start">
            <div className="flex items-center gap-3">
              <img
                src={logoUrl}
                alt="Logo"
                className="w-10 h-10 rounded-full object-cover border border-slate-800"
              />
              <span className="text-base font-black text-slate-900 tracking-tight">
                Edição Audiovisual com IA
              </span>
            </div>
            <p className="text-slate-500 leading-relaxed max-w-sm font-normal">
              Edição audiovisual automatizada com Inteligência Artificial.
              Direção no ChatGPT, voz no ElevenLabs, clipes no Google Flow
              e sincronização no OpenMontage.
            </p>
          </div>

          {/* Navigation links */}
          <div className="md:col-span-3 space-y-2">
            <h5 className="font-bold text-slate-900 uppercase tracking-wider text-[11px]">
              Navegação
            </h5>
            <ul className="space-y-1.5 font-medium">
              <li>
                <a href="#masterclass" className="hover:text-slate-900 transition-colors">
                  Vídeo da Aula
                </a>
              </li>
              <li>
                <a href="#conversao" className="hover:text-slate-900 transition-colors">
                  Comunidade & Mentoria
                </a>
              </li>
              <li>
                <a href="#material-apoio" className="hover:text-slate-900 transition-colors">
                  Material de Apoio
                </a>
              </li>
              <li>
                <a href="#ferramentas" className="hover:text-slate-900 transition-colors">
                  Ferramentas da Aula
                </a>
              </li>
            </ul>
          </div>

          {/* Official Channels */}
          <div className="md:col-span-4 space-y-2">
            <h5 className="font-bold text-slate-900 uppercase tracking-wider text-[11px]">
              Canais Oficiais
            </h5>
            <div className="space-y-2 max-w-sm mx-auto sm:mx-0">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center sm:justify-start gap-2 p-2.5 rounded-xl bg-slate-50 hover:bg-emerald-50 text-slate-700 hover:text-emerald-700 border border-slate-200/60 transition-colors font-semibold"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>Grupo no WhatsApp (Gratuito)</span>
              </a>

              <a
                href={telegramLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center sm:justify-start gap-2 p-2.5 rounded-xl bg-slate-50 hover:bg-sky-50 text-slate-700 hover:text-sky-700 border border-slate-200/60 transition-colors font-semibold"
              >
                <Send className="w-4 h-4 text-sky-600" />
                <span>Canal no Telegram (Gratuito)</span>
              </a>

              <button
                onClick={onOpenMentoria}
                className="w-full flex items-center justify-center gap-2 p-2.5 rounded-xl bg-slate-950 hover:bg-slate-800 text-white transition-colors font-bold cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Quero Conhecer a Mentoria</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom copyright notice */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-400 text-[11px] text-center sm:text-left">
          <p>
            © {new Date().getFullYear()} Edição Audiovisual com IA. Todos os direitos reservados.
          </p>
          <p>
            OpenMontage no GitHub:{" "}
            <a
              href={githubRepo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-slate-900 underline font-mono"
            >
              github.com/calesthio/OpenMontage
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

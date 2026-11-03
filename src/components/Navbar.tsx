import React, { useState } from "react";
import { Sparkles, Menu, X, ArrowUpRight } from "lucide-react";
import logoUrl from "../assets/images/logo.jpg";

interface NavbarProps {
  onOpenMentoriaModal: () => void;
  whatsappLink: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenMentoriaModal,
  whatsappLink
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-white/95 border-b border-slate-200/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Logo only (Removed "O Aleatório" text as requested) */}
        <a
          href="#"
          className="flex items-center gap-2 group shrink-0"
          title="Início"
        >
          <img
            src={logoUrl}
            alt="Logo"
            className="w-9 h-9 rounded-full object-cover border border-slate-800 shadow-xs group-hover:scale-105 transition-transform"
          />
        </a>

        {/* Zone 2: Clean single-line links */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-bold text-slate-700">
          <a
            href="#masterclass"
            className="hover:text-slate-950 transition-colors whitespace-nowrap shrink-0"
          >
            Aula
          </a>
          <a
            href="#conversao"
            className="hover:text-slate-950 transition-colors whitespace-nowrap shrink-0"
          >
            Comunidade & Mentoria
          </a>
          <a
            href="#material-apoio"
            className="hover:text-slate-950 transition-colors whitespace-nowrap shrink-0"
          >
            Material de Apoio
          </a>
          <a
            href="#ferramentas"
            className="hover:text-slate-950 transition-colors whitespace-nowrap shrink-0"
          >
            Ferramentas
          </a>
        </nav>

        {/* Zone 3: 1 Primary CTA (Removed gear icon for settings as requested) */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenMentoriaModal}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-black uppercase tracking-wider text-slate-950 bg-[#F5B544] hover:bg-[#E8A530] active:bg-[#D99520] rounded-xl transition-all shadow-sm hover:shadow hover:-translate-y-0.5 whitespace-nowrap shrink-0 cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-slate-950" />
            <span>Quero Conhecer a Mentoria</span>
          </button>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-700 hover:text-slate-950 rounded-lg cursor-pointer"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 text-center">
          <a
            href="#masterclass"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2.5 text-sm font-bold text-slate-800 hover:text-slate-950"
          >
            Aula
          </a>
          <a
            href="#conversao"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2.5 text-sm font-bold text-slate-800 hover:text-slate-950"
          >
            Comunidade & Mentoria
          </a>
          <a
            href="#material-apoio"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2.5 text-sm font-bold text-slate-800 hover:text-slate-950"
          >
            Material de Apoio
          </a>
          <a
            href="#ferramentas"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2.5 text-sm font-bold text-slate-800 hover:text-slate-950"
          >
            Ferramentas da Aula
          </a>
          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenMentoriaModal();
              }}
              className="w-full text-center py-3 px-4 text-xs font-black uppercase tracking-wider text-slate-950 bg-[#F5B544] hover:bg-[#E8A530] rounded-xl shadow-sm"
            >
              Quero Conhecer a Mentoria
            </button>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-2.5 px-4 text-xs font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-xl flex items-center justify-center gap-1.5"
            >
              <span>Entrar no Grupo do WhatsApp</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

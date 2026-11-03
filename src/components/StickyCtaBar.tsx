import React, { useState, useEffect } from "react";
import { MessageCircle, Sparkles, Send, ArrowUp } from "lucide-react";

interface StickyCtaBarProps {
  whatsappLink: string;
  telegramLink: string;
  onOpenMentoriaModal: () => void;
}

export const StickyCtaBar: React.FC<StickyCtaBarProps> = ({
  whatsappLink,
  telegramLink,
  onOpenMentoriaModal
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 p-2 sm:p-3 pointer-events-none transition-all duration-300">
      <div className="max-w-4xl mx-auto bg-slate-900/95 backdrop-blur-md text-white px-3 sm:px-5 py-2.5 rounded-2xl border border-white/10 shadow-2xl flex items-center justify-between gap-3 pointer-events-auto">
        {/* Left message */}
        <div className="hidden md:flex items-center gap-2 text-xs">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-slate-300">
            Aprenda a produzir Reels com IA:
          </span>
          <span className="font-bold text-white">Grupo Grátis ou Mentoria</span>
        </div>

        {/* Right buttons */}
        <div className="flex items-center gap-2 w-full md:w-auto justify-end">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-emerald-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors shadow-xs"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>WhatsApp Grátis</span>
          </a>

          <a
            href={telegramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center justify-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-sky-600 hover:bg-sky-500 rounded-lg transition-colors shadow-xs"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Telegram</span>
          </a>

          <button
            onClick={onOpenMentoriaModal}
            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3 py-1.5 text-xs font-bold text-slate-950 bg-white hover:bg-slate-100 rounded-lg transition-colors shadow-xs"
          >
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Mentoria</span>
          </button>
        </div>
      </div>
    </div>
  );
};

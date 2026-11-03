import React, { useState } from "react";
import {
  X,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  ShieldCheck,
  Send
} from "lucide-react";

interface MentoriaModalProps {
  isOpen: boolean;
  onClose: () => void;
  mentoriaLink: string;
}

export const MentoriaModal: React.FC<MentoriaModalProps> = ({
  isOpen,
  onClose,
  mentoriaLink
}) => {
  const [formData, setFormData] = useState({
    nome: "",
    whatsapp: "",
    instagram: "",
    nicho: "",
    experiencia: "iniciante",
    objetivo: "canal_dark"
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nome || !formData.whatsapp) {
      alert("Por favor, preencha pelo menos seu Nome e WhatsApp.");
      return;
    }
    setSubmitted(true);
  };

  const handleWhatsappRedirect = () => {
    const text = encodeURIComponent(
      `Olá! Acabei de me candidatar à Mentoria Individual de Reels com IA.\n\n` +
      `Nome: ${formData.nome}\n` +
      `WhatsApp: ${formData.whatsapp}\n` +
      `Instagram: ${formData.instagram || "Não informado"}\n` +
      `Nicho: ${formData.nicho || "Geral"}\n` +
      `Experiência: ${formData.experiencia}\n` +
      `Objetivo: ${formData.objetivo}`
    );
    window.open(`${mentoriaLink}&text=${text}`, "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-fade-in">
      <div className="relative w-full max-w-lg bg-white rounded-3xl border border-slate-200 shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            {/* Header */}
            <div className="mb-6">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                Seleção de Alunos
              </span>
              <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight mt-2">
                Aplicação para a Mentoria Individual
              </h3>
              <p className="mt-1 text-xs text-slate-600">
                Preencha os dados abaixo para analisarmos o seu perfil e o nicho do seu projeto.
              </p>
            </div>

            {/* Application Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Seu Nome Completo *
                </label>
                <input
                  type="text"
                  required
                  value={formData.nome}
                  onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                  placeholder="Ex: Lucas Silva"
                  className="w-full px-3.5 py-2.5 text-xs text-slate-900 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-900"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    WhatsApp (com DDD) *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    placeholder="(11) 99999-9999"
                    className="w-full px-3.5 py-2.5 text-xs text-slate-900 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Instagram (@)
                  </label>
                  <input
                    type="text"
                    value={formData.instagram}
                    onChange={(e) => setFormData({ ...formData, instagram: e.target.value })}
                    placeholder="@seu.perfil"
                    className="w-full px-3.5 py-2.5 text-xs text-slate-900 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-900"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Nicho ou Ideia de Canal
                </label>
                <input
                  type="text"
                  value={formData.nicho}
                  onChange={(e) => setFormData({ ...formData, nicho: e.target.value })}
                  placeholder="Ex: Mistérios históricos, curiosidades, finanças, etc."
                  className="w-full px-3.5 py-2.5 text-xs text-slate-900 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-900"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Nível de Experiência
                  </label>
                  <select
                    value={formData.experiencia}
                    onChange={(e) => setFormData({ ...formData, experiencia: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs text-slate-900 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-900"
                  >
                    <option value="iniciante">Começando do zero</option>
                    <option value="intermediario">Já crio vídeos e quero IA</option>
                    <option value="avancado">Já monetizo / Tenho agência</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Principal Objetivo
                  </label>
                  <select
                    value={formData.objetivo}
                    onChange={(e) => setFormData({ ...formData, objetivo: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs text-slate-900 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-900"
                  >
                    <option value="canal_dark">Criar canais dark monetizados</option>
                    <option value="perfil_pessoal">Crescer perfil pessoal / autoridade</option>
                    <option value="prestacao_servicos">Prestar serviços para clientes</option>
                    <option value="automacao">Automatizar fluxo com OpenMontage</option>
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 px-4 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  <span>Enviar Minha Candidatura</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <p className="text-[11px] text-slate-400 text-center">
                Seus dados serão utilizados apenas para avaliação da mentoria. Não enviamos spam.
              </p>
            </form>
          </div>
        ) : (
          /* Success Screen */
          <div className="text-center py-6 space-y-4 animate-fade-in">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-xs">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-bold text-slate-900">
              Candidatura Enviada!
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
              Obrigado, <strong className="text-slate-900">{formData.nome}</strong>!
              Recebemos suas informações. Para agilizar o seu atendimento e confirmar
              se há vaga disponível para a sua turma, finalize o contato pelo WhatsApp:
            </p>

            <div className="pt-2">
              <button
                onClick={handleWhatsappRedirect}
                className="w-full py-3.5 px-4 text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Confirmar Vaga no WhatsApp Agora</span>
              </button>
            </div>

            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="text-xs text-slate-400 hover:text-slate-600 pt-2 block mx-auto underline"
            >
              Fechar janela
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

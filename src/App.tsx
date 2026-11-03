import React, { useState, useEffect } from "react";
import Lenis from "lenis";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { VideoSection } from "./components/VideoSection";
import { ConversionZone } from "./components/ConversionZone";
import { PromptMestreSection } from "./components/PromptMestreSection";
import { ToolsSection } from "./components/ToolsSection";
import { WorkflowSteps } from "./components/WorkflowSteps";
import { FaqSection } from "./components/FaqSection";
import { MentoriaModal } from "./components/MentoriaModal";
import { StickyCtaBar } from "./components/StickyCtaBar";
import { Footer } from "./components/Footer";
import { useConfigLinks } from "./hooks/useConfigLinks";

export default function App() {
  const { links } = useConfigLinks();
  const [isMentoriaModalOpen, setIsMentoriaModalOpen] = useState(false);

  // Initialize Lenis for buttery-smooth fluid scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const scrollToVideo = () => {
    const el = document.getElementById("masterclass");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToConversion = () => {
    const el = document.getElementById("conversao");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-slate-900 selection:text-white flex flex-col font-sans">
      {/* Top Bar Navigation */}
      <Navbar
        onOpenMentoriaModal={() => setIsMentoriaModalOpen(true)}
        whatsappLink={links.whatsappCommunity}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onScrollToVideo={scrollToVideo}
          onScrollToConversion={scrollToConversion}
        />

        {/* 2. Masterclass Video Section with Shortcut below to Materials */}
        <VideoSection />

        {/* 3. High-Conversion Zone (WhatsApp, Telegram & Mentoria lado a lado) */}
        <ConversionZone
          whatsappLink={links.whatsappCommunity}
          telegramLink={links.telegramCommunity}
          onOpenMentoriaModal={() => setIsMentoriaModalOpen(true)}
        />

        {/* 4. Material de Apoio: Prompt Mestre da Aula (Compacto e Copiável) */}
        <PromptMestreSection />

        {/* 5. As Ferramentas da Aula (ChatGPT, Antigravity, ElevenLabs, Google Flow, OpenMontage) */}
        <ToolsSection githubRepoUrl={links.githubRepo} />

        {/* 6. Como Funciona o Sistema (Workflow em 5 Passos) */}
        <WorkflowSteps />

        {/* 7. Perguntas Frequentes (FAQ) */}
        <FaqSection />
      </main>

      {/* Sticky Bottom Bar for instant conversion */}
      <StickyCtaBar
        whatsappLink={links.whatsappCommunity}
        telegramLink={links.telegramCommunity}
        onOpenMentoriaModal={() => setIsMentoriaModalOpen(true)}
      />

      {/* Footer */}
      <Footer
        onOpenMentoria={() => setIsMentoriaModalOpen(true)}
        whatsappLink={links.whatsappCommunity}
        telegramLink={links.telegramCommunity}
        githubRepo={links.githubRepo}
      />

      {/* Mentoria Application Modal */}
      <MentoriaModal
        isOpen={isMentoriaModalOpen}
        onClose={() => setIsMentoriaModalOpen(false)}
        mentoriaLink={links.mentoriaLink}
      />
    </div>
  );
}

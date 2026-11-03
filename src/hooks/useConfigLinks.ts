import { useState, useEffect } from "react";

export interface ConfigLinks {
  whatsappCommunity: string;
  telegramCommunity: string;
  mentoriaLink: string;
  githubRepo: string;
}

const DEFAULT_LINKS: ConfigLinks = {
  whatsappCommunity: "https://chat.whatsapp.com/GlQGqFji4TEKSbUgSjvc4b?s=cl&p=i&mlu=4&ilr=4&iam=2",
  telegramCommunity: "https://t.me/+hqWLYJ9zvTpiMTgx",
  mentoriaLink: "https://wa.me/5511999999999?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20a%20Mentoria%20Individual%20de%20Reels%20com%20IA.",
  githubRepo: "https://github.com/calesthio/OpenMontage"
};

const STORAGE_KEY = "ia_reels_config_links";

export function useConfigLinks() {
  const [links, setLinks] = useState<ConfigLinks>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.whatsappCommunity?.includes("invite-exemplo") || parsed.telegramCommunity?.includes("diretoriadeia")) {
          return DEFAULT_LINKS;
        }
        return { ...DEFAULT_LINKS, ...parsed };
      }
    } catch {
      // fallback
    }
    return DEFAULT_LINKS;
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(links));
    } catch {
      // ignore
    }
  }, [links]);

  const updateLinks = (newLinks: Partial<ConfigLinks>) => {
    setLinks((prev) => ({ ...prev, ...newLinks }));
  };

  const resetToDefault = () => {
    setLinks(DEFAULT_LINKS);
  };

  return { links, updateLinks, resetToDefault };
}

"use client";

import * as React from "react";

export type Locale = "fr" | "en";

type Dictionary = {
  [key: string]: string;
};

const fr: Dictionary = {
  // Nav
  navBlog: "Blog",
  navProjects: "Projets",
  navPhotos: "Photos",
  // Home
  homeWelcome: "Bienvenue sur mon portfolio !",
  homeIntro:
    "Étudiant en Génie Logiciel à l'Université Laval, passionné par le développement web et les nouvelles technologies.",
  homeSkills: "Compétences techniques",
  homeSkillsLanguages: "Langages",
  homeSkillsTools: "Outils",
  homeSkillsSpoken: "Langues",
  homeProjects: "Projets récents",
  homeExperience: "Expérience professionnelle",
  homeResume: "Télécharger mon CV (PDF)",
  homeContact: "Contactez-moi via",
  homeContactOr: "ou",
  homeContactDiscuss: "pour discuter d'opportunités de collaboration.",
  // Projects page
  projectsTitle: "Projets",
  // Blog page
  blogTitle: "Blog",
  // Photos page
  photosTitle: "Photos",
  // Footer
  footerRights: "Tous droits réservés.",
};

const en: Dictionary = {
  navBlog: "Blog",
  navProjects: "Projects",
  navPhotos: "Photos",
  homeWelcome: "Welcome to my portfolio!",
  homeIntro:
    "Software Engineering student at Université Laval, passionate about web development and new technologies.",
  homeSkills: "Technical Skills",
  homeSkillsLanguages: "Languages",
  homeSkillsTools: "Tools",
  homeSkillsSpoken: "Spoken Languages",
  homeProjects: "Recent Projects",
  homeExperience: "Professional Experience",
  homeResume: "Download my CV (PDF)",
  homeContact: "Contact me via",
  homeContactOr: "or",
  homeContactDiscuss: "to discuss collaboration opportunities.",
  projectsTitle: "Projects",
  blogTitle: "Blog",
  photosTitle: "Photos",
  footerRights: "All rights reserved.",
};

export const translations: Record<Locale, Dictionary> = { fr, en };

export type I18nContextType = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
};

const I18nContext = React.createContext<I18nContextType>({
  locale: "fr",
  setLocale: () => {},
  t: (key: string) => key,
});

export const useI18n = () => React.useContext(I18nContext);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = React.useState<Locale>("fr");

  React.useEffect(() => {
    const stored = localStorage.getItem("locale-preference");
    if (stored === "fr" || stored === "en") {
      setLocaleState(stored);
    } else {
      const browserLang = navigator.language?.toLowerCase() ?? "";
      setLocaleState(browserLang.startsWith("fr") ? "fr" : "en");
    }
  }, []);

  const setLocale = React.useCallback((next: Locale) => {
    setLocaleState(next);
    localStorage.setItem("locale-preference", next);
  }, []);

  const t = React.useCallback(
    (key: string) => translations[locale][key] ?? key,
    [locale]
  );

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
}

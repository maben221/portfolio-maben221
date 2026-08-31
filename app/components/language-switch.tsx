"use client";

import * as React from "react";
import { useI18n } from "../lib/i18n";
import type { Locale } from "../lib/i18n";

export function LanguageSwitch() {
  const { locale, setLocale } = useI18n();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const toggle = () => {
    setLocale(locale === "fr" ? "en" : "fr");
  };

  if (!mounted) {
    return (
      <span className="text-sm font-medium text-[#1c1c1c] dark:text-[#D4D4D4]">
        FR
      </span>
    );
  }

  return (
    <button
      onClick={toggle}
      aria-label={locale === "fr" ? "Switch to English" : "Passer en français"}
      title={locale === "fr" ? "Switch to English" : "Passer en français"}
      className="flex items-center gap-1 text-sm font-medium text-neutral-600 dark:text-neutral-300 transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
    >
      <span className={locale === "fr" ? "font-semibold text-black dark:text-white" : "opacity-60"}>
        FR
      </span>
      <span className="opacity-40">/</span>
      <span className={locale === "en" ? "font-semibold text-black dark:text-white" : "opacity-60"}>
        EN
      </span>
    </button>
  );
}

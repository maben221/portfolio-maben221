"use client";

import Link from "next/link";
import { ThemeSwitch } from "./theme-switch";
import { LanguageSwitch } from "./language-switch";
import { useI18n } from "../lib/i18n";
import { metaData } from "../config";

const navItems = {
  "/blog": { key: "navBlog" },
  "/projects": { key: "navProjects" },
  "/photos": { key: "navPhotos" },
};

export function Navbar() {
  const { t } = useI18n();

  return (
    <nav className="lg:mb-16 mb-12 py-5">
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="text-3xl font-semibold tracking-tight">
            {metaData.title}
          </Link>
        </div>
        <div className="flex flex-row gap-4 mt-6 md:mt-0 md:ml-auto items-center">
          {Object.entries(navItems).map(([path, { key }]) => (
            <Link
              key={path}
              href={path}
              className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative"
            >
              {t(key)}
            </Link>
          ))}
          <LanguageSwitch />
          <ThemeSwitch />
        </div>
      </div>
    </nav>
  );
}

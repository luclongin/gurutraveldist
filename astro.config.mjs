/*import { defineConfig } from "astro/config";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
	integrations: [react()],
});
*/
import astroI18next from "astro-i18next";
import react from "@astrojs/react";
import { defineConfig } from "astro/config";
import { i18n, filterSitemapByDefaultLocale } from "astro-i18n-aut/integration";
import sitemap from "@astrojs/sitemap";

const defaultLocale = "en";
const locales = {
  en: "en-US", // the `defaultLocale` value must present in `locales` keys
  es: "es-ES",
  fr: "fr-CA",
};

export default defineConfig({
  /*site: "http://localhost:4321/",
  trailingSlash: "always",
  build: {
    format: "directory",
  },*/
  integrations: [
	react(),
	astroI18next()
    /*i18n({
      locales,
      defaultLocale,
    }),
    sitemap({
      i18n: {
        locales,
        defaultLocale,
      },
      filter: filterSitemapByDefaultLocale({ defaultLocale }),
    }),*/
  ],
});
import { paraglideVitePlugin } from "@inlang/paraglide-js";
import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    paraglideVitePlugin({
      project: "./project.inlang",
      outdir: "./src/paraglide",
      strategy: ["url", "preferredLanguage"],
      urlPatterns: [
        {
          pattern: ":protocol://:domain(.*)::port?/:locale(en|de)?/:path(.*)?",
          deLocalizedNamedGroups: { locale: null },
          localizedNamedGroups: {
            en: { locale: "en" },
            de: { locale: "de" },
          },
        },
      ],
    }),
    sveltekit(),
  ],
});

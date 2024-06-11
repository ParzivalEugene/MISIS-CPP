import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Конспект",
      social: {
        github: "https://github.com/ParzivalEugene/misis-cpp",
      },
      locales: {
        root: {
          label: "Русский",
          lang: "ru",
        },
      },
      sidebar: [
        {
          label: "Вопросы",
          autogenerate: { directory: "questions" },
        },
      ],
    }),
  ],
});

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devServer: {
    host: process.env.HOST || "localhost",
    port: parseInt(process.env.PORT!, 10) || 3355,
  },
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      title: "NUxt3 Web Starter",
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
      // script: [
      //   { src: 'https://cdn.example.com/some-global-script.js', body: true } // `body: true` places it at end of <body>
      // ]
    },
  },
  modules: ["@nuxtjs/google-fonts", "@pinia/nuxt"],
  runtimeConfig: {
    public: {
      apiBase: process.env.API_URL || "http://localhost:3333/api",
      apiKey: process.env.API_KEY || "api-key",
    },
  },
  css: [
    "vuetify/lib/styles/main.sass",
    "@mdi/font/css/materialdesignicons.min.css",
    "~/assets/styles/main.scss",
  ],
  googleFonts: {
    families: {
      Raleway: {
        wght: [100, 400, 700], // Example: Light, Regular, Bold
        ital: [100], // Example: Italic for light weight
      },
    },
    display: "swap", // 'swap' for better performance (displays fallback font until Lato loads)
  },
  build: {
    transpile: ["vuetify"],
  },
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "@/assets/styles/_variables" as *;
            @use "@/assets/styles/mixins" as *;
          `,
        },
      },
    },
  },
});

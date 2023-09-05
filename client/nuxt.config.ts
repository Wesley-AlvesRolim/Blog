// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "radix-vue/nuxt", "nuxt-phosphor-icons"],
  runtimeConfig: {
    public: {
      API_URL: process.env.NUXT_API_URL,
    },
  },
});

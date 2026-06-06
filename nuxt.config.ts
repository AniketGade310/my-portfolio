import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  compatibilityDate: '2026-06-05',
  devtools: { enabled: true },
  nitro:{
    preset:'static'
  },
  app: {
    head: {
      title: 'Aniket Gade — Senior Software Product Analyst',
      meta: [
        { name: 'description', content: 'Full-Stack & Mobile Developer based in Pune, India.' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Mono:wght@300;400;500&family=Instrument+Serif:ital@0;1&display=swap' }
      ]
    },
    // baseURL: '/my-portfolio/'
  },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],
  
})
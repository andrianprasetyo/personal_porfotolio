import { fileURLToPath } from 'node:url'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: true },
  modules: ['@nuxtjs/eslint-module', '@vite-pwa/nuxt', '@nuxtjs/tailwindcss'],
  alias: {
    '@': fileURLToPath(new URL('./', import.meta.url))
  },
  app: {
    head: {
      title: 'Andrian Prasetyo',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1'
        },
        {
          charset: 'utf-8'
        },
        {
          'http-equiv': 'X-UA-Compatible',
          content: 'IE=edge'
        },
        {
          name: 'keywords',
          content: 'Andrian Prasetyo'
        },
        {
          name: 'description',
          content: 'Pengembang Antarmuka'
        },
        {
          name: 'author',
          content: 'Ikbal Andrian Prasetyo'
        }
      ]
    }
  },
  pwa: {
    registerType: 'autoUpdate',
    injectRegister: 'auto',
    strategies: 'generateSW',
    workbox: {
      maximumFileSizeToCacheInBytes: 10 * 1024 * 1024, // Set to 10 MB or any other value you prefer
      // Only precache these files - html should be excluded
      globPatterns: ['**/*.{js,css}'],
      // Don't fallback on document based (e.g. `/some-page`) requests
      // Even though this says `null` by default, I had to set this specifically to `null` to make it work
      navigateFallback: null
    },
    manifest: {
      name: 'Andrian Prasetyo',
      short_name: 'IAP',
      description: 'Pengembang Antarmuka',
      theme_color: '#212529',
      icons: [
        {
          src: '/android-icon-36x36.png',
          sizes: '36x36',
          type: 'image/png',
          density: '0.75'
        },
        {
          src: '/android-icon-48x48.png',
          sizes: '48x48',
          type: 'image/png',
          density: '1.0'
        },
        {
          src: '/android-icon-72x72.png',
          sizes: '72x72',
          type: 'image/png',
          density: '1.5'
        },
        {
          src: '/android-icon-96x96.png',
          sizes: '96x96',
          type: 'image/png',
          density: '2.0'
        },
        {
          src: '/android-icon-144x144.png',
          sizes: '144x144',
          type: 'image/png',
          density: '3.0'
        },
        {
          src: '/android-icon-192x192.png',
          sizes: '192x192',
          type: 'image/png',
          density: '4.0'
        }
      ]
    }
  },
  devServer: {
    port: 8090
  }
})

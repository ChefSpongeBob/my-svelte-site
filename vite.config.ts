import { sveltekit } from '@sveltejs/kit/vite';
import { VitePWA } from 'vite-plugin-pwa';

export default {
  plugins: [
    sveltekit(),
    VitePWA({
      registerType: 'prompt',
      includeAssets: ['favicon.ico', 'icons/*.png'],
      manifest: {
        name: 'DEV Concepts & IoT',
        short_name: 'DEV IoT',
        description: 'Signals, telemetry, and edge experiments',
        start_url: '/',
        display: 'standalone',
        background_color: '#020617',
        theme_color: '#020617',
        icons: [
          {
            src: '/icons/icon-192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/icons/icon-512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      },
      workbox: {
        navigateFallback: '/',
        globPatterns: ['**/*.{js,css,html,svg,png,ico}'],
        runtimeCaching: []
      }
    })
  ]
};

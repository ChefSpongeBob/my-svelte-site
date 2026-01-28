import { sveltekit } from '@sveltejs/kit/vite';
import { VitePWA } from 'vite-plugin-pwa';

export default {
  plugins: [
    sveltekit(),

    VitePWA({
      registerType: 'autoUpdate',

      includeAssets: [
        'favicon.ico',
        'icons/icon-192-v2.png',
        'icons/icon-512-v2.png'
      ],

      manifest: {
        name: "Charlotte's Nexus",
        short_name: 'C.Nexus',
        start_url: '/?pwa=2',
        display: 'standalone',
        background_color: '#0f172a',
        theme_color: '#0f172a',
        icons: [
          {
            src: '/icons/icon-192-v2.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/icons/icon-512-v2.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      },

      workbox: {
        navigateFallback: '/',
        runtimeCaching: [] // keep empty — avoids surprises
      }
    })
  ]
};

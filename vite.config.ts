import { sveltekit } from '@sveltejs/kit/vite';
import { VitePWA } from 'vite-plugin-pwa';

export default {
  plugins: [
    sveltekit(),
    VitePWA({
      injectRegister: null, // do NOT auto-register SW
      devOptions: {
        enabled: false
      },
      manifest: {
        name: 'DEV Concepts & IoT',
        short_name: 'DEV IoT',
        description: 'Signals, telemetry, and edge experiments',
        start_url: '/',
        display: 'standalone',
        background_color: '#020617',
        theme_color: '#020617'
      }
    })
  ]
};

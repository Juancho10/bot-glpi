// @ts-check
import { defineConfig, envField } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import vue from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },

  devToolbar:{
    enabled: false,
  },

  integrations: [vue()],
  env: {
    schema:{
      GLPI_API: envField.string({context: 'client', access: 'public'}),
      GLPI_APP_TOKEN: envField.string({context: 'client', access: 'public'}),
      USER_TOKEN: envField.string({context: 'client', access: 'public'}),
    }
  }
});
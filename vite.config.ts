import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

import fs from 'fs';

function fallbackDataPlugin() {
  return {
    name: 'fallback-data-plugin',
    resolveId(source: string, importer?: string) {
      if (source.includes('wordsData') || source.endsWith('./data/wordsData') || source.endsWith('./wordsData')) {
        const target = path.resolve(__dirname, 'src/data/wordsData.ts');
        if (!fs.existsSync(target)) {
          return path.resolve(__dirname, 'src/data/fallbackData.ts');
        }
      }
      if (source.includes('sentencesData') || source.endsWith('./data/sentencesData') || source.endsWith('./sentencesData')) {
        const target = path.resolve(__dirname, 'src/data/sentencesData.ts');
        if (!fs.existsSync(target)) {
          return path.resolve(__dirname, 'src/data/fallbackData.ts');
        }
      }
      return null;
    }
  };
}

export default defineConfig(() => {
  return {
    plugins: [fallbackDataPlugin(), react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});

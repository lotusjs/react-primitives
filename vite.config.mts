import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const primitivesDir = join(__dirname, 'src');

export default defineConfig({
  resolve: {
    alias: [
      {
        find: '@lotus-design/react-primitives/es',
        replacement: primitivesDir,
      },
    ],
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
});

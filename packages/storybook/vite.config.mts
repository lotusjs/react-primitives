import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const pathResolve = (pathname: string) => resolve(__dirname, '.', pathname);

console.log(pathResolve('../../packages/primitives/src'));

export default defineConfig({
  resolve: {
    alias: [
      {
        find: /@primitives\//,
        replacement: `${pathResolve('../../packages/primitives/src')}/`,
      },
    ],
  },
});

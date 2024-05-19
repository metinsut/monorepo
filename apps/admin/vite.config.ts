import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

const BRAND = process.env.VITE_BRAND ?? 'mtn';
const DOMAIN = process.env.VITE_DOMAIN ?? '/';

console.log(`### Envs --> `, { BRAND, DOMAIN });

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@ui': path.resolve(__dirname, '../../packages/ui/src'),
      '@shared': path.resolve(__dirname, '../../packages/shared/src'),
      '@brands/current': path.resolve(__dirname, `src/brands/current.ts`),
      '@brands/dir': path.resolve(__dirname, `src/brands/${BRAND}`),
    },
    extensions: [
      `.${BRAND}.ts`,
      '.default.ts',
      `.${BRAND}.tsx`,
      '.default.tsx',
      '.mjs',
      '.js',
      '.mts',
      '.ts',
      '.jsx',
      '.tsx',
      '.json',
    ],
  },
  server: {
    proxy: {
      '/api/': {
        target: `${DOMAIN}/api`,
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});

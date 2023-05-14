import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import { config } from 'dotenv';

config();

export default defineConfig({
  plugins: [tsconfigPaths()],
  base: process.env.BASE_URL || '/'
});

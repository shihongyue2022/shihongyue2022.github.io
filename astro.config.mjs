import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://shihongyue2022.github.io',
  output: 'static',
  build: {
    format: 'directory'
  }
});

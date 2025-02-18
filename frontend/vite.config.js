import { defineConfig } from "vite";

export default defineConfig({
  app: '.', 
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
}});

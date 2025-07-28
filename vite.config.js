import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    base: '/game_zombie/',
    target: 'esnext',
    minify: 'esbuild', // или 'esbuild' для более быстрой минификации
    lib: {
      entry: 'index.js',
      name: 'MyBundle',
      fileName: (format) => `my-bundle.${format}.js`
    },
    sourcemap: true // Для отладки
  }
})
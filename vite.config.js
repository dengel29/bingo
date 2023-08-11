// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import viteTsConfigPaths from 'vite-tsconfig-paths';

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react(
//     {
//       include: '**/*.{ts,js,tsx}',
//     },
//     viteTsConfigPaths({
//       root: './',
//     }),
//   )],
//   base: '/',
//   root: 'src',
//   build: {
//     rollupOptions: {
//       input: "./src/app/main.tsx"
//     },
//     outDir: 'build/src/app',
//   },
//   server: {
//     port: 3000
//   },
//   preview: {
//     port: 3000
//   }
// })

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build:{
    outDir: "build",
  }
})
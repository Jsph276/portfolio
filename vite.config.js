import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    // En Vite 8, Lightning CSS minifie le CSS et réécrit rgba / backdrop-filter.
    // Ça faisait diverger preview/prod du rendu `vite dev`.
    cssMinify: false,
  },
});

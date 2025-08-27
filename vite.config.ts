import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/ai-site/',  // 🔹 Replace "ai-site" with your repository name if different
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});

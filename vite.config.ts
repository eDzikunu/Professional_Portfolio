import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"; 
// 1. This is a Node.js core module used to convert file URLs into file paths
import { fileURLToPath } from 'url'; 

// 2. import.meta.url is a special ESM-only variable that gives you the full file URL of the current module
//    e.g., 'file:///C:/Users/Owner/ProfessionalPortfolio/vite.config.ts'
const __filename = fileURLToPath(import.meta.url);

// 3. path.dirname() extracts the directory name from a file path.
//    So this converts __filename (e.g. '.../vite.config.ts') into __dirname (e.g. '.../ProfessionalPortfolio')
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, "client/src"),
      "@shared": path.resolve(__dirname, "shared"),
    }
  }
});
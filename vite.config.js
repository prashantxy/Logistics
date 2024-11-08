// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: '0.0.0.0',  // Exposes the server to the local network (if needed)
    port: 3000,       // Default port, change if necessary
    open: true,       // Automatically open the browser when the server starts
  },
});

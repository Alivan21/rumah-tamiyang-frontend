import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

const manifestRKT = {
  theme_color: "#358ef6",
  background_color: "#d0021b",
  display: "standalone",
  scope: "/",
  start_url: "/",
  name: "Rumah Tamiang",
  short_name: "RKT",
  description: "Apkilasi ERP rumah tamiang",
  icons: [
    {
      src: "/icon-192x192.png",
      sizes: "192x192",
      type: "image/png",
      purpose: "apple touch icon",
    },
    {
      src: "/icon-256x256.png",
      sizes: "256x256",
      type: "image/png",
      purpose: "any maskable",
    },
    {
      src: "/icon-384x384.png",
      sizes: "384x384",
      type: "image/png",
    },
    {
      src: "/icon-512x512.png",
      sizes: "512x512",
      type: "image/png",
    },
  ],
};

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      // add this to cache all the imports
      workbox: {
        globPatterns: ["**/*"],
      },
      // add this to cache all the
      // static assets in the public folder
      includeAssets: ["**/*"],
      manifest: manifestRKT,
      registerType: "autoUpdate",
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});

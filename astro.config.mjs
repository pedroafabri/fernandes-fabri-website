import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  site: "https://www.fernandesfabri.com",
  vite: {
    plugins: [tailwindcss()],
    server: {
      allowedHosts: [
        "localhost", 
        "127.0.0.1", 
        "::1", 
        "localhost.localtest.me", 
        "petite-lamps-dig.loca.lt" //TODO: Remove
      ]
    }
  },
  experimental: {
    fonts: [{
      provider: "local",
      name: "InterLocal",
      cssVariable: "--font-inter",
      variants: [
        {
          weight: 400,
          style: "normal",
          src: ["./src/assets/fonts/Inter-Regular.woff2"]
        },
        {
          weight: 600,
          style: "normal",
          src: ["./src/assets/fonts/Inter-SemiBold.woff2"]
        },
        {
          weight: 700,
          style: "normal",
          src: ["./src/assets/fonts/Inter-Bold.woff2"]
        }
      ]
    },
    {
      provider: "local",
      name: "InterLocalDisplay",
      cssVariable: "--font-inter-display",
      variants: [
        {
          weight: 400,
          style: "normal",
          src: ["./src/assets/fonts/InterDisplay-Regular.woff2"]
        },
        {
          weight: 500,
          style: "normal",
          src: ["./src/assets/fonts/InterDisplay-Medium.woff2"]
        },
        {
          weight: 600,
          style: "normal",
          src: ["./src/assets/fonts/InterDisplay-SemiBold.woff2"]
        }
      ]
    }]
  }
})
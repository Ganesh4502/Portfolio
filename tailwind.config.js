/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          background: "#0a0a0a",
          foreground: "#ffffff",
          primary: {
            DEFAULT: "#00f3ff", // Cyan
            foreground: "#000000",
          },
          secondary: {
            DEFAULT: "#bd00ff", // Magenta
            foreground: "#ffffff",
          },
          accent: {
            DEFAULT: "#00ff9d", // Electric Green
            foreground: "#000000",
          },
          card: {
            DEFAULT: "rgba(255, 255, 255, 0.05)",
            foreground: "#ffffff",
          },
          popover: {
            DEFAULT: "#0a0a0a",
            foreground: "#ffffff",
          },
          muted: {
            DEFAULT: "rgba(255, 255, 255, 0.1)",
            foreground: "#a1a1aa",
          },
          border: "rgba(255, 255, 255, 0.1)",
          input: "rgba(255, 255, 255, 0.1)",
          ring: "#00f3ff",
        },
        fontFamily: {
          sans: ['Inter', 'sans-serif'],
          mono: ['Space Mono', 'monospace'],
        },
        backgroundImage: {
          'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
          'hero-glow': 'conic-gradient(from 180deg at 50% 50%, #00f3ff 0deg, #bd00ff 180deg, #00ff9d 360deg)',
        },
      },
    },
    plugins: [],
  }

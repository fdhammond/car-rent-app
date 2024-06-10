import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        'black-background': '#1b1b1b',
        'white-background': '#ffffff',
        'yellow-general': '#f5b754'
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
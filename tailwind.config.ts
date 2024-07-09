import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    fontFamily: {
      body: "var(--font-space-mono)",
      heading: "var(--font-heading)",
    },
    colors: {
      transparent: "transparent",
      black: {
        DEFAULT: "#000000",
      },
      white: {
        DEFAULT: "#ffffff",
      },
      gray: {
        100: "#f3f2ed",
        900: "var(--gray-900)",
      },
      pink: {
        100: "#ff3979",
        200: "#ff2cb2",
        300: "#ff00a1",
        400: "#ff55a2",
      },
      red: {
        DEFAULT: "#eb0d18",
      },
      blue: {
        50: "#cae9fa",
        100: "#5879ff",
        200: "#5100ff",
        300: "#163892",
      },
      yellow: {
        100: "#eedf39",
        200: "#f9e174",
      },
      purple: {
        100: "#a774f9",
        200: "#672fcf",
        300: "var(--purple-300)",
      },
      mint: {
        DEFAULT: "#ace5d7",
      },
      magenta: {
        DEFAULT: "#e42c7f",
      },
      border: "hsl(var(--border))",
      input: "hsl(var(--input))",
      ring: "hsl(var(--ring))",
      background: "hsl(var(--background))",
      foreground: "hsl(var(--foreground))",
      primary: {
        DEFAULT: "hsl(var(--primary))",
        foreground: "hsl(var(--primary-foreground))",
      },
      secondary: {
        DEFAULT: "hsl(var(--secondary))",
        foreground: "hsl(var(--secondary-foreground))",
      },
      destructive: {
        DEFAULT: "hsl(var(--destructive))",
        foreground: "hsl(var(--destructive-foreground))",
      },
      muted: {
        DEFAULT: "hsl(var(--muted))",
        foreground: "hsl(var(--muted-foreground))",
      },
      accent: {
        DEFAULT: "hsl(var(--accent))",
        foreground: "hsl(var(--accent-foreground))",
      },
      popover: {
        DEFAULT: "hsl(var(--popover))",
        foreground: "hsl(var(--popover-foreground))",
      },
      card: {
        DEFAULT: "hsl(var(--card))",
        foreground: "hsl(var(--card-foreground))",
      },
    },
    // container: {
    //   center: true,
    //   padding: "2rem",
    //   screens: {
    //     "2xl": "1400px",
    //   },
    // },
    extend: {
      screens: {
        "3xl": "1672px",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      boxShadow: {
        button: "-6px 6px 0 0 var(--gray-900)",
        purple: "-6px 6px 0 0 var(--purple-300)",
        "purple-hover": "-11px 11px 0 0 var(--purple-300)",
        "button-hover": "-11px 11px 0 0 var(--gray-900)",
        cardItem: "-3px 3px 0 0 var(--gray-900)",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config

export default config

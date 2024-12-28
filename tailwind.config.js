/** @type {import('tailwindcss').Config} */
import tailwindTypography from "@tailwindcss/typography";
import plugin from "tailwindcss/plugin";
import daisyui from "daisyui";

const rotateX = plugin(function ({ addUtilities }) {
  addUtilities({
    ".rotate-y-180": {
      transform: "rotateY(180deg)",
    },
  });
});

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1142px",
    },
    fontFamily: {
      mulish: ["Mulish", "sans-serif"],
      reey: ["reey", "sans-serif"],
    },
    extend: {
      animation: {
        "spin-slow": "spin 5s linear infinite",
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            color: theme("colors.gray"),
            fontSize: "1.125rem",
          },
        },
      }),
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        black: "#2a2a2a",
        primary: "#c9c9c9",
        secondary: "#828282",
        gray: {
          DEFAULT: "#7780A1",
          dark: "#1C2331",
        },
      },
    },
  },
  plugins: [rotateX, tailwindTypography],
};

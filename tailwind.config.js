/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },

    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      colors: {
        bgColor: "#ffffff",
        textColor: "#1E1E1E",
        darkBgColor: "#1F1F1F",
        darkTextColor: "#F2F2F2",
      },
      boxShadow: {
        "3xl": "1.5px 4.5px 8px 4.5px #dddddd",
      },
    },
  },
  plugins: [],
};

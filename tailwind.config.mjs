/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        themeGreen: "#B6CBBD", // Light Green
        themeBrown: "#754E1A", // Dark Brown
        themeGold: "#CBA35C", // Gold
        themeBeige: "#F8E1B7", // Beige
      },
    },
  },
  plugins: [],
};

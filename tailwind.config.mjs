/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}","./components/**/*.{js,ts,jsx,tsx,mdx}","./data/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: { ink:"#0B1220", mist:"#E7ECF4", accent:"#4F46E5", accent2:"#06B6D4", lime:"#84CC16" },
      boxShadow: { glow:"0 0 0 1px rgba(79,70,229,0.1), 0 10px 25px rgba(0,0,0,0.08)" }
    },
  }, plugins: [],
};

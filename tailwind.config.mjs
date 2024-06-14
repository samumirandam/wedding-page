/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        background: "#fcf6f5",
        text: "#03090a",
      },
      backgroundImage: {
        flowers: "url('/flowers-kotkoa.svg')",
      },
    },
  },
  plugins: [],
};

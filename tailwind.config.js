/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: {
          main: "#ededed",
        },
        surface: {
          one: "#111111",
        },
        divider: {
          main: "#aaaaaa",
        },
        text: {
          on_surface_one: {
            main: "#ffffff",
          },
          on_background: {
            main: "#111111",
            800:"#111111cc",
            600:"#11111199",
            400:"#11111166",
            200:"#11111133"
          },
        },
      },
    },
  },
  plugins: [],
};

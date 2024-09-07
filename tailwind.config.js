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
          two: "#ffffff",
        },
        divider: {
          main: "#aaaaaa",
          660:"#aaaaaa99"
        },
        primary: {
          main: "#111111",
        },
        text: {
          on_surface_one: {
            main: "#ffffff",
            800: "#ffffffcc",
            600: "#ffffff99",
            400: "#ffffff66",
            200: "#ffffffcc",
          },
          on_surface_two: {
            main: "#111111",
            800: "#111111cc",
            600: "#11111199",
            400: "#11111166",
            200: "#111111cc",
          },
          on_background: {
            main: "#111111",
            800: "#111111cc",
            600: "#11111199",
            400: "#11111166",
            200: "#11111133",
          },
        },
      },
    },
  },
  plugins: [],
};

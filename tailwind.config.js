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
          main: "#cccccc",
        },
        text: {
          on_surface_one: {
            main: "#ffffff",
          },
        },
      },
    },
  },
  plugins: [],
};

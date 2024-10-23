/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{tsx,ts}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(180deg, #000000 13.92%, #8858B5 100%)",
      },
    },
    boxShadow: {
      "custom-black": "0px 100px 100px 0px rgba(0, 0, 0, 1)",
    },
  },
  plugins: [],
};

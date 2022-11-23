/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#000000",
        gold: "#ed9d46",
        brown: "#130b06",
        text: "#ffffff",
        "form-text": "#bdbdbd",
      },
      fontFamily: {
        "chant-regular": ["Chanticleer Regular"],
        "chant-bold": ["Chanticleer Bold"],
        "roman-regular": ["Roman Regular"],
      },
      backgroundImage: {
        "brown-paper": "url('../public/assets/bg_desktop.jpg')",
      },
    },
  },
  plugins: [],
};

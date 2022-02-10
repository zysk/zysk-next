module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    container: {
      screens: {
         xl: "1140px"
      }
    },
    flexBasis: {
    '1/7': '39.5%',
    '1/2':'50%',
    '1/3': '33.333333%;',
    '1/3-2':'33%',
    '2/4':'50%',
    '2/5':'40%',
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
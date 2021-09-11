module.exports = {
  purge: ["pages/**/*.js", "components/**/*.js"],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        ddark: "#23272A",
        capri: "#00fa97",
        ldark: "#2C2F33",
        verydark: "#1a1a1a"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

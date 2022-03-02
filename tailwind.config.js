module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      screens: {
        xs: "90%",
        sm: "540px",
        md: "700px",
        lg: "910px",
        xl: "1100px",
        xxl: "1270px",
      },
    },
    fontFamily: {
      Ubuntu: ["Ubuntu", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "logo-pattern": "url('/bg-logo.png')",
      },
      colors: {
        primary: {
          500: "#38146C",
        },
        secondary: {
          500: "#FD8353",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

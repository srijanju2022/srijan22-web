module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      screens: {
        xs: "100%",
        sm: "540px",
        md: "720px",
        lg: "960px",
        xl: "1140px",
        xxl: "1320px",
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

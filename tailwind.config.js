/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  important: true,
  theme: {
    extend: {
      spacing: {
        "1/10": "10%",
        "2/10": "20%",
        "3/10": "30%",
        "4/10": "40%",
        "5/10": "50%",
        "6/10": "60%",
        "7/10": "70%",
        "8/10": "80%",
        "9/10": "90%",
        700: 700,
      },
      height: {
        700: 700,
      },
      width: {
        700: 700,
      },
      minWidth: {
        700: 700,
      },
      colors: {
        fontGray: "#B5B5C3",
        fontCrimson: "#1BC5BD",
        tableHeader: "#F3F6F9",
        btnColor: "#C9F7F5",
      },
      screens: {
        xs: "576px",
        sm: "768px",
        md: "992px",
        lg: "1200px",
        xl: "1400px",
      },
    },
  },
  plugins: [],
};

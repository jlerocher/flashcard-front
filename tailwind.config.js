/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";
 
export default withMT({
  darkMode: "class",
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        boxShadow: {
            "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
          },
      },
    },
    plugins: [],
});
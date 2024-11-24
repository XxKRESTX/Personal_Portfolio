const {nextui} = require('@nextui-org/theme');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/navbar.js"
  ],
  theme: {
    fontFamily: {
      'body': ['Satoshi-Regular', 'sans-serif'],
      'display': ['PierSans-Bold', 'sans-serif'],
      'subheader': ['PierSans-Light', 'sans-serif'],
      'piersansmedium' : ['PierSans-Medium', 'sans-serif'],
      'satoshilight': ['Satoshi-Light', 'sans-serif'],
    },
    fontSize: {
      'sm': '.75rem',
      'base': '1rem',
      'xl': '1.5rem',
      '2xl': '2rem',
      '3xl' : '2.5rem',
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      scrollBehavior: {
        smooth: 'smooth',
      }
    },
  },
  plugins: [nextui({
    prefix: "nextui", // prefix for themes variables
    addCommonColors: false, // override common colors (e.g. "blue", "green", "pink").
    defaultTheme: "light", // default theme from the themes object
    defaultExtendTheme: "light", // default theme to extend on custom themes
    layout: {}, // common layout tokens (applied to all themes)
    themes: {
      light: {
        layout: {}, // light theme layout tokens
        colors: {      
          'black': '#1E1E1E',
          'orange': '#E8871E',
          'white': '#FFF9ED', // light theme colors
        },
      },
      dark: {
        layout: {}, // dark theme layout tokens
        colors: {      
          'black': '#1E1E1E',
          'orange': '#E8871E',
          'white': '#FFF9ED', // dark theme colors
        },
      },
      // ... custom themes
    },
  }),],
};

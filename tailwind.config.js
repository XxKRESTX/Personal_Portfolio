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
    screens: {
      
      'sm': '370px',
      // => @media (min-width: 640px) { ... }

      'md': '576px',
      // => @media (min-width: 640px) { ... }

      'lg': '960px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1440px',
      // => @media (min-width: 1440px) { ... }

      '3xl': '1600px',
      // => @media (min-width: 1600px) { ... }
    },
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
    layout: {

    }, // common layout tokens (applied to all themes)
    themes: {
      light: {
        layout: {screens: {
      
      'sm': '370px',
      // => @media (min-width: 640px) { ... }

      'md': '576px',
      // => @media (min-width: 640px) { ... }

      'lg': '960px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1440px',
      // => @media (min-width: 1440px) { ... }

      '3xl': '1600px',
      // => @media (min-width: 1600px) { ... }
    },
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
      },
      outline: {
        custom: ['2px solid #ff6347', '2px'], // Outline color and offset
      },
      colors: {
        customFocus: '#ff6347', // Add a reusable color for focus
      },
      transitionProperty: {
        'focus-color': 'color, outline-color, outline-offset',
      },
      transitionDuration: {
        focus: '300ms', // Smooth transitions for focus
      },
    },}, // light theme layout tokens
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

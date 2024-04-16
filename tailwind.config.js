/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/*.js",
    "./pages/**/*.js",
    "./components/*.js",
    "./components/**/*.js",
  ],
  theme: {
    extend: {
      screens: {
        // 'mobile': '375px',
        // 'tablet': '768px',
        // 'desktop': '1024px',
        'mobile': '0px',
        'tablet': '675px',
        'desktop': '1024px',
      },
    backgroundImage: {
      'nows-laters': "url('https://i.imgur.com/yWybjXh.jpg')",
      'hot-smoked': "url('https://i.imgur.com/eYUD8ms.png')",
      'cold-smoked': "url('https://i.imgur.com/Y9GifZl.jpg')",
    },
    },
  },
  plugins: [
    require("daisyui")
  ],
  daisyui: {
    themes: [
      {
        mytheme: {        
          "primary": "#000000",
          "secondary": "#2D2D2D",
          "accent": "#37CDBE",
          "neutral": "#2D2D2D",
          "base-100": "#FFFFFF",
          "info": "#3ABFF8",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#F87272",
        }
      }
    ],
  },
};

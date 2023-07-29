/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend:{
      colors:{
        dark:"#20232A",
        light:"#fff",
        light_primary : "#eeeeee",
        
      },
      fontFamily: {
        SpaceGrotesk:[`var(--font-spaceGrotesk)`, 'san-serif'],
        Trocchi:[`var(--font-trocchi)`, 'san-serif'],
    },
    animation: {
      'spin-slow': 'spin 0.2s linear 1',
    },
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

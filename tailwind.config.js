/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#0D0B33',
        'primary':'#575273',
        'secondry':'#0E204A',
        'non-active': '#9996AC',
        'active': '#D0CFE0',
      },
      keyframes: {
        bounce: {
          '100%': { transform: 'translateY(-300%)' },
          '0%': { transform: 'translateY(0%)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-20deg)' },
          '50%': { transform: 'rotate(20deg)' },
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      }
    },
  },
  plugins: [
  ],
}

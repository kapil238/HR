/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./contexts/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}", // also include src folder if you’re using it
  ],
  darkMode: 'class',
  theme: {
    extend: {
      borderRadius: {
        'xl': '12px',
        '2xl': '16px',
      },
      fontFamily: {
        // ✅ Use CSS variable created by next/font/google
        roboto: ['var(--font-roboto)', 'sans-serif'],
      },
      colors: {
        dark: {
          100: '#1E293B',
          200: '#0F172A',
        },
      },
      backgroundImage: {
        'light-bg': "url('/images/emp-bg3.jpeg')",
        'dark-bg': "url('/images/emp-bg-dark.jpeg')",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

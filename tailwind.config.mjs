/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./contexts/**/*.{js,ts,jsx,tsx}", // Add this if you have contexts folder
  ],
  darkMode: 'class', // This enables class-based dark mode
  theme: {
    extend: {
      borderRadius: {
        'xl': '12px',
        '2xl': '16px',
      },
      colors: {
        // Add your custom colors here if needed
        dark: {
          100: '#1E293B',
          200: '#0F172A',
          // Add more dark mode colors as needed
        },
      },
      backgroundImage: {
        'light-bg': "url('/images/emp-bg3.jpeg')",
        'dark-bg': "url('/images/emp-bg-dark.jpeg')",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'), // Optional: if you use form elements
    // Add other plugins as needed
  ],
}
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#34D399', // Example primary color
        secondary: '#10B981', // Example secondary color
        h1: '#4A5568', // Color for <h1>
        h2: '#2D3748', // Color for <h2>
        h3: '#1A202C', // Color for <h3>
        h4: '#718096', // Color for <h4>
        h5: '#A0AEC0', // Color for <h5>
        h6: '#CBD5E0', // Color for <h6>
        text: '#2D3748', // General text color
        spanText: '#A0AEC0', // Color for <span> elements
        buttonBackground: '#1A202C', // Button background color
        buttonText: '#FFFFFF', // Button text color
        buttonBackgroundHover: '#2D3748', // Button background hover color
        buttonTextHover: '#F9FAFB', // Button text hover color
        background: '#F7FAFC', // Universal background color (similar to ChatGPT's background)
        white: '#FFFFFF', // Traditional white color
      },
    },
  },
  variants: {},
  plugins: [],
};

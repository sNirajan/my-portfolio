/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{js,ts,jsx,tsx}",
  "./app/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
  extend: {
    colors: {
        primaryGreen: '#3CB371', // Medium Sea Green
        lightGreen: '#DFF4E6',  // Light Mint
        darkGreen: '#006400',   // Dark Green
        justGreen: '#013a01',
        extra: '#035946',
      // primary: "#0070f3",
      // secondary: "#f0f0f0",
    },
  },
};
export const plugins = [];

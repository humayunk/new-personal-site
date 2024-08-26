/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sen': ['var(--font-sen)'],
        'major-mono': ['var(--font-major-mono-display)'],
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.constructivist': {
          fontFeatureSettings: '"salt" 1, "ss01" 1, "ss02" 1, "ss03" 1, "ss04" 1, "ss05" 1, "ss06" 1, "ss07" 1, "ss08" 1',
        },
      }
      addUtilities(newUtilities)
    }
  ],
};

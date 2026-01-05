/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primaryBg: 'var(--bg-primary)',
        secondaryBg: 'var(--bg-secondary)',
        cardBg: 'var(--bg-card)',
        buttonBg: 'var(--bg-button)',
        iconsBg: 'var(--icons-bg)',
        textPrimary: 'var(--text-primary)',
        textSecondary: 'var(--text-secondary)',
        dontworrybackground: 'var(--dw-bg)',
        transparentpricing: 'var(--tp-bg)',
        cardBgLight: 'var(--carousalcard-bg-light)',
        cardBorderLight: 'var(--carousalcard-border-light)',
        sectionBgLight: 'var(--carousal-bg-light)',
      },
    },
  },
  plugins: [],
};

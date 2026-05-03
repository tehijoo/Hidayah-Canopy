/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    '@tailwindcss/postcss': {}, // <-- Perhatikan perubahan nama di sini
    autoprefixer: {},
  },
};

export default config;
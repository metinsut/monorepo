/** @type {import('tailwindcss').Config} */
import sharedConfig from '@repo/ui/tailwind.config';

export default {
  presets: [sharedConfig],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};

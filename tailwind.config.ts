import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        blueCorp: {
          50: '#eefcfd',
          100: '#d4f6f9',
          200: '#afebf2',
          300: '#78dae8',
          400: '#39c1d7',
          500: '#1da4bd',
          600: '#1b839d',
          700: '#1d6b81',
          800: '#20586a',
          900: '#1f4a5a',
          950: '#0f303d',
        },
        greyCorp: {
        50: '#f5f6f6',
        100: '#e5e7e8',
        200: '#cfd2d2',
        300: '#adb2b3',
        400: '#848b8c',
        500: '#686f72',
        600: '#595f61',
        700: '#4c5152',
        800: '#434647',
        900: '#343637',
        950: '#252727',
    },
    
    
      },
    },
  },
  plugins: [],
};
export default config;

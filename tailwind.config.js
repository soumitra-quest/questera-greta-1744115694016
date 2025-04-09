/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          50: '#eaeaea',
          100: '#d1d1d1',
          200: '#b8b8b8',
          300: '#9f9f9f',
          400: '#868686',
          500: '#6d6d6d',
          600: '#545454',
          700: '#3b3b3b',
          800: '#222222',
          900: '#090909',
          950: '#030303',
        },
        primary: {
          DEFAULT: '#0f172a',
          dark: '#0a0f1d',
        },
        accent: {
          DEFAULT: '#3b82f6',
          hover: '#2563eb',
        }
      },
      backgroundColor: {
        'dark-gradient': 'linear-gradient(to bottom, #0f172a, #1e293b)',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '100%',
            color: '#e2e8f0',
            a: {
              color: '#3b82f6',
              '&:hover': {
                color: '#2563eb',
              },
            },
            h1: {
              color: '#f8fafc',
            },
            h2: {
              color: '#f8fafc',
            },
            h3: {
              color: '#f8fafc',
            },
            h4: {
              color: '#f8fafc',
            },
            strong: {
              color: '#f8fafc',
            },
            code: {
              color: '#f8fafc',
              backgroundColor: '#1e293b',
              padding: '0.2em 0.4em',
              borderRadius: '0.25rem',
            },
            blockquote: {
              color: '#e2e8f0',
              borderLeftColor: '#3b82f6',
            },
          },
        },
      },
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        base: 'var(--base-color)',
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
        neutral: 'var(--neutral-color)'
      },
      backgroundImage: {
        'gradient-right': 'var(--gradient-color-right)',
        'gradient-left': 'var(--gradient-color-left)'
      },
      fontSize: {
        small: '0.8rem',
        'main-title': '2.5rem',
        paragraph: '0.938rem',
        subtitle: '2rem'
      }
    }
  },
  plugins: []
}

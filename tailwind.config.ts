import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        chard: {
          '50': '#f1f8f3',
          '100': '#deede1',
          '200': '#bedcc7',
          '300': '#93c2a4',
          '400': '#65a27d',
          '500': '#42815d',
          '600': '#32694b',
          '700': '#28543d',
          '800': '#214432',
          '900': '#1c382a',
          '950': '#0f1f17',
        },
      },
    },
  },
  plugins: [],
}
export default config

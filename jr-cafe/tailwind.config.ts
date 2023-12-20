import type { Config } from 'tailwindcss'
const {nextui} = require("@nextui-org/react");
const {nextuitheme} = require("@nextui-org/theme");
const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/components/button.js", 
    "./node_modules/@nextui-org/theme/dist/components/input.js", 
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'sans': ['Roboto','Medula_One', 'Maven_Pro', 'Bad_Script','ui-sans-serif', 'system-ui','Arial'],
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}
export default config

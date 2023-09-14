import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // primary
        primaryMain: '#2196F3',
        primaryLight: '#BBDEFB',
        primaryDark: '#0D47A1',
        // secondary
        secondaryMain: '#00BCD4',
        secondaryLight: '#B2EBF2',
        secondaryDark: '#006064',
        // assent
        assentMain: '#651FFF',
        assentLight: '#EDE7F6',
        assentDark: '#4527A0',
        // paper
        paperLight: '#FFFFFF',
        paperDark: '#424242',
        // default
        defaultDark: '#303030',
        defaultLight: '#DEDEDE',
        // text
        textPrimary: '#000000',
        textSecondary: '#000000 54%',
        textSecondaryDark: '#DEDEDE',
        textDisabled: '#000000 48%',
        textField: '#000000 42%',
        textDanger: 'red',
      },
      fontFamily: {
        regular: ['Roboto Regular', 'sans-serif'],
        medium: ['Roboto Medium', 'sans-serif'],
        bold: ['Roboto Bold', 'sans-serif'],
        condensed: ['Roboto Condensed Bold', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config;

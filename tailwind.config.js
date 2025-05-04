const { nextui } = require('@nextui-org/react')

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {}
  },
  darkMode: 'class',
  plugins: [
    nextui({
      layout: {
        disabledOpacity: '0.3', // opacity-[0.3]
        borderWidth: {
          small: '1px', // border-small
          medium: '1px', // border-medium
          large: '2px' // border-large
        }
      },
      themes: {
        dark: {
          colors: {
            primary: {
              DEFAULT: '#5ea500',
              50: '#f7fee7',
              100: '#ecfcca',
              200: '#d8fa99',
              300: '#bbf451',
              400: '#9ae600',
              500: '#7ccf00',
              600: '#5ea500',
              700: '#497d00',
              800: '#3c6300',
              900: '#35530e'
            },
            secondary: {
              DEFAULT: '#5ea500',
              50: '#f7fee7',
              100: '#ecfcca',
              200: '#d8fa99',
              300: '#bbf451',
              400: '#9ae600',
              500: '#7ccf00',
              600: '#5ea500',
              700: '#497d00',
              800: '#3c6300',
              900: '#35530e'
            }
          }
        },
        light: {
          colors: {
            primary: {
              DEFAULT: '#5ea500',
              50: '#f7fee7',
              100: '#ecfcca',
              200: '#d8fa99',
              300: '#bbf451',
              400: '#9ae600',
              500: '#7ccf00',
              600: '#5ea500',
              700: '#497d00',
              800: '#3c6300',
              900: '#35530e'
            },
            secondary: {
              DEFAULT: '#5ea500',
              50: '#f7fee7',
              100: '#ecfcca',
              200: '#d8fa99',
              300: '#bbf451',
              400: '#9ae600',
              500: '#7ccf00',
              600: '#5ea500',
              700: '#497d00',
              800: '#3c6300',
              900: '#35530e'
            }
          }
        }
      }
    })
  ]
}

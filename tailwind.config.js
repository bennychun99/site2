module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'current': "url('/bg/bg31.png')",
        'arte1': "url('/bg/bg29.png')",
        'arte2': "url('/bg/bg30.png')",
        'capa1': "url('/bg/bg32.png')",
        'capa2': "url('/bg/bg33.png')",
        'arte-clara1': "url('/bg/bg34.png')",
        'arte-clara2': "url('/bg/bg35.png')",
        
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

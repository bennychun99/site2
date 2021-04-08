module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'capa1': "url('/bg/capa1.png')",
        'capa2': "url('/bg/capa2.png')",
        'capa3': "url('/bg/capa3.png')",
        'arte1': "url('/bg/arte1.png')",
        'arte2': "url('/bg/arte2.png')",
        'arte1m': "url('/bg/arte1m.png')",
        'arte2m': "url('/bg/arte2m.png')",
        'gaiola': "url('/bg/gaiola.png')",


        
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

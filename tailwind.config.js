module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
            'deep-blue' : '#111827',
            'med-blue' : '#1F2937',
            'light-gray' : '#F9FAFD',
            'med-gray' : '#9CA3AF'
        },
        fontFamily : {
            'work' : '"Work Sans", ui-serif, Georgia, Cambria, "Times New Roman", Times, serif', 
        }
    },
  },
  plugins: [],
}

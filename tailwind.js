module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'auth-pages': "url('https://delgnnnzzjz4p.cloudfront.net/20210604.1/img/bg-dashboard.png')"
      }),
      backgroundColor: theme => ({
        'brand-bg': '#727cf5'
      })
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
    require('@tailwindcss/forms')
  ]
}

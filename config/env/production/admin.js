module.exports = ({ env }) => ({
  admin: {
    path: '/admin',
    build: {
      backend: env('PRODUCTION_URL', 'https://enoteria-platon-298abb099da9.herokuapp.com/'),
    },
  },
})
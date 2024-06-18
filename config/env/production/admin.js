module.exports = ({ env }) => ({
  url: env('MY_FRONTEND_URL'),
  serveAdminPanel: false,
  admin: {
    path: '/admin',
    build: {
      backend: env('PRODUCTION_URL', 'https://enoteria-platon-298abb099da9.herokuapp.com/'),
    },
  },
})
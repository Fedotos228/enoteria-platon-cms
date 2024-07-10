module.exports = ({ env }) => ({
  proxy: true,
  host: "0.0.0.0",
  port: process.env.PORT,
  url: process.env.MY_HEROKU_URL.split(", "),

  app: {
    keys: env.array('APP_KEYS')
  },
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET'),
    },
  },
})
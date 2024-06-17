module.exports = ({ env }) => ({
  url: "http://localhost:3000/", // Note: The administration will be accessible from the root of the domain (ex: http://yourfrontend.com/)
  serveAdminPanel: false, // http://yourbackend.com will not serve any static admin files
})
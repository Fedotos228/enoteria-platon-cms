module.exports = {
  async afterCreate(event) {
    const { result } = event

    try {
      await strapi.plugin['email'].services.email.send({
        to: 'tudor.onceanu@gmail.com',
        from: 'noreply@enoteriaplaton.wine',
        subject: 'Mesaj nou de la ' + result.fullname,
        text: result.message
      })
    } catch (err) {
      console.error(err)
    }
  }
}
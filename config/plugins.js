module.exports = () => ({
  slugify: {
    enabled: true,
    config: {
      contentTypes: {
        news: {
          field: 'slug',
          references: 'title',
        },
        products: {
          field: 'slug',
          references: 'title',
        },
        merchandise: {
          field: 'slug',
          references: 'title',
        },
        subcategory: {
          field: 'slug',
          references: 'title',
        },
        category: {
          field: 'slug',
          references: 'title',
        }
      },
    },
  },
})

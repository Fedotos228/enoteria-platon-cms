module.exports = ({ env }) => ({
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
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
})

'use strict'

/**
 * product controller
 */

const { createCoreController } = require('@strapi/strapi').factories


module.exports = createCoreController('api::product.product', ({ strapi }) => ({
  async findOne(ctx) {
    const { id: slug } = ctx.params
    const { query } = ctx
    // @ts-ignore
    if (!query.filters) query.filters = {}
    // @ts-ignore
    query.filters.slug = { '$eq': slug }
    const entity = await strapi.service('api::product.product').find(query)
    // @ts-ignore
    const { results } = await this.sanitizeOutput(entity, ctx)

    return this.transformResponse(results[0])
  }
}))

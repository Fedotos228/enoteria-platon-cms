'use strict'

/**
 * merchandise controller
 */

const { createCoreController } = require('@strapi/strapi').factories

module.exports = createCoreController('api::merchandise.merchandise', ({ strapi }) => ({
  async findOne(ctx) {
    const { id: slug } = ctx.params
    const { query } = ctx
    // @ts-ignore
    if (!query.filters) query.filters = {}
    // @ts-ignore
    query.filters.slug = { '$eq': slug }
    const entity = await strapi.service('api::merchandise.merchandise').find(query)
    // @ts-ignore
    const { results } = await this.sanitizeOutput(entity, ctx)

    return this.transformResponse(results[0])
  }
}))
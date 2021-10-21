'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    
  async getProcedure(ctx) {
    const { id } = ctx.params;
    const procedure = await strapi.plugins['groupe'].services.groupe.getProcedure(
      id
    );


    if (_.isEmpty(procedure)) {
      return ctx.badRequest(null, [{ messages: [{ id: `Procedure don't exist` }] }]);
    }

    ctx.send({ procedure });
  },
};

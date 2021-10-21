'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-services)
 * to customize this service
 */

module.exports = {
    async getProcedure(prodcedureID) {
        const role = await strapi
          .query('groupe', 'users-permissions')
          .findOne({ id: prodcedureID }, ['groupe']);
    
        if (!role) {
          throw new Error('Cannot find this role');
        }
    
        return {
          ...role,
        };
      },
    
};

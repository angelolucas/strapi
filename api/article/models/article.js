'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#lifecycle-hooks)
 * to customize this model
 */

 const axios = require('axios');
 const netlifyWebhook = 'https://api.netlify.com/build_hooks/605a774d941fd700b79863f0';

 module.exports = {
   lifecycles: {
     async afterCreate(_, __) {
       netlifyWebhook && axios.post(netlifyWebhook);
     },
     async afterUpdate(_, __, ___) {
       netlifyWebhook && axios.post(netlifyWebhook);
     },
   },
 };

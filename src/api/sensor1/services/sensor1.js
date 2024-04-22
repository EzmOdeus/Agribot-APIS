'use strict';

/**
 * sensor1 service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::sensor1.sensor1');

'use strict';

/**
 * order routes
 */

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/orders', // Get all orders
      handler: 'order.find',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/orders/:id', // Get a specific order by ID
      handler: 'order.findOne',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'POST',
      path: '/orders', // Create a new order
      handler: 'order.create',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'PUT',
      path: '/orders/:id', // Update an existing order by ID
      handler: 'order.update',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'DELETE',
      path: '/orders/:id', // Delete an order by ID
      handler: 'order.delete',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};

const { Router } = require('express');

const storeRoutes = new Router();

const stores = [{
  id: 1,
  name: 'Store 1'
}]

storeRoutes.get('/stores', (req, res) => {
  return res.json(stores);
});

module.exports = { storeRoutes };
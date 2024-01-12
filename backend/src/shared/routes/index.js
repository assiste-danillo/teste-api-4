const { Router } = require('express');

const { userRoutes } = require('../../modules/user/routes');
const { storeRoutes } = require('../../modules/store/routes');

const routes = new Router();

routes.use(userRoutes);
routes.use(storeRoutes);

module.exports = { routes };
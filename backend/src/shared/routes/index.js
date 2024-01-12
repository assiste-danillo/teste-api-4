const { Router } = require('express');

const { userRoutes } = require('../../modules/user/routes');
const { postRoutes } = require('../../modules/post/routes');
const { storeRoutes } = require('../../modules/store/routes');

const routes = new Router();

routes.use(userRoutes);
routes.use(postRoutes);
routes.use(storeRoutes);

module.exports = { routes };
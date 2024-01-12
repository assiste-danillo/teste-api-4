const { Router } = require('express');

const { userRoutes } = require('../../modules/user/routes');
const { postRoutes } = require('../../modules/post/routes');

const routes = new Router();

routes.use(userRoutes);
routes.use(postRoutes);

module.exports = { routes };
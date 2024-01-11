const { Router } = require('express');

const { userRoutes } = require('../../modules/user/routes');

const routes = new Router();

routes.use(userRoutes);

module.exports = { routes };
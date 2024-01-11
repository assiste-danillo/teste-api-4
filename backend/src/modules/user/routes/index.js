const { Router } = require('express');

const userRoutes = new Router();

const users = [{
  id: 1,
  name: 'Jonh Due'
}]

userRoutes.get('/users', (req, res) => {
  return res.json(users);
});

userRoutes.get('/users/:id', (req, res) => {

})

module.exports = { userRoutes };
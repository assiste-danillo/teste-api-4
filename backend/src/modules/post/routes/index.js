const { Router } = require('express');

const postRoutes = new Router();

const users = [{
  id: 1,
  description: 'Post 1'
}]

postRoutes.get('/posts', (req, res) => {
  return res.json(users);
});

module.exports = { postRoutes };
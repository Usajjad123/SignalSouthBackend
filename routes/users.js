var express = require('express');
var router = express.Router();

var { getUsers, getUserById, deleteUserById } = require('./../data/users');

/* GET users listing. */
router.get('/', function(req, res, next) {
  const users = getUsers();
  res.send(users);
});

router.get('/:id', function(req, res, next) {
  const { id } = req.params;
  const user = getUserById(id);
  res.send(user);
});

router.post('/new', function(req, res, next) {
  res.send(req.body);
})

router.delete('/:id', function(req, res, next) {
  const { id } = req.params;
  const user = deleteUserById(id);
  res.send(user);
});

router.post(':/id', function(req, res, next) {
  const { id } = req.params;
  res.send(req.body)
})

module.exports = router;

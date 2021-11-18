var express = require('express');
var router = express.Router();

var conn = require('./../db/conn');

var { getUsers, getUserById, deleteUserById } = require('./../data/users');

/* GET users listing. */
router.get('/', function(req, res, next) {
  const users = await getUsers();
  res.send(users);
});

router.get('/:id', function(req, res, next) {
  const { id } = req.params;
  const user = await getUserById(id);
  res.send(user);
});

router.post('/new', function(req, res, next) {
  res.send(req.body);
})

router.delete('/:id', function(req, res, next) {
  const { id } = req.params;
  const user = await deleteUserById(id);
  res.send(user);
});

router.post(':/id', function(req, res, next) {
  const { id } = req.params;
  res.send(req.body)
})

module.exports = router;

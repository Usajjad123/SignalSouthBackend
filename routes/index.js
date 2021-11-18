var express = require('express');
const { isAdmin, isValidUser } = require('../data/users');
var router = express.Router();

/* GET home page. */
router.post('/login', function (req, res, next) {
  var { username: email, password } = req.body;
  if (email && password) {
    const admin = isAdmin(email, password);
    if (admin) {
      return res.send(admin);
    } else {
      const user = isValidUser(email, password);
      if (user) {
        return res.send(user);
      }
    }
  }
  return res.sendStatus(301);
});

module.exports = router;

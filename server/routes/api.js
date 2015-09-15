var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Animal = require('../models/animals');


router.get('/animals', function(req, res, next) {
  res.send('hello!');
});







module.exports = router;

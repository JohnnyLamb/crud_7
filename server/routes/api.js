var express = require('express');
var router = express.Router();
var Animal = require('../models/animals.js');
var mongoose = require('mongoose');


router.get('/animals', function(req, res, next) {
  res.render('index', { title: 'Express' });
});







module.exports = router;

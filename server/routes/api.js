var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Animal = require('../models/animals');

// GET ALL animals
router.get('/animals', function(req, res, next) {
  Animal.find(function(err,data){
    if(err){
      res.json({'message':err,});
      } else {
        res.json(data);
      }

  });
});

// POST Animals
router.post('/animals', function(req, res, next) {
  newAnimal = new Animal({
    name:req.body.name,
    age:req.body.age
  });
  newAnimal.save(function(err,data){
    if(err){
      res.json({'message':err});
    } else{
      res.json(data);
    }
  });
});

// PUT SINGLE ANIMAL
router.put('/animal/:id', function(req, res, next) {
  Animal.findByIdAndUpdate(req.params.id, req.body, function(err,data){
    if(err){
      res.json({
        'message':err
      });
    } else{
      res.json(data);
    }
  });
});

// DELETE SINGLE ANIMAL
router.delete('/animal/:id', function(req, res, next) {
  Animal.findByIdAndRemove(req.params.id,function(err,data){
      if(err){
        res.json({
          'message':err
        });
      } else {
        res.json(data);
      }

  });
});






module.exports = router;

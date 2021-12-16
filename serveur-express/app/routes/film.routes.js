const { mongoose } = require('../models/connexion.js');

module.exports = app => {
  const films = require('../controllers/film.controller.js');
  var router = require('express').Router();


  //les ROUTES CRUD :
  router.post('/', films.create);
  router.get("/published", films.findAllPublished); 
  router.get('/', films.findAll);
  router.get('/:id', films.findOne);
  router.get('/no', films.findNoPub);
  router.delete('/', films.deleteAll);
  //router.update('/:id', films.update);
  router.delete('/:id', films.delete);
  //---------------------------------------
  app.use('/api/films', router);

};
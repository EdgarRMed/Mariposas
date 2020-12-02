'use strict'

var express = require('express');
var ProjectController = require('../controllers/project');

var router = express.Router();

var multipart = require('connect-multiparty');
var multipartMiddelware = multipart({uploadDir: './uploads'});

// Ejemplo del metodo get del protocolo http
router.get('/home', ProjectController.home);
// Peticion post para agregar una nueva mariposa
router.post('/agregarEjemplar', ProjectController.agregarEjemplar);
// Peticion para guargar la foto de la mariposa
router.post('/uploadImage/:id', multipartMiddelware, ProjectController.uploadImage); 

module.exports = router;
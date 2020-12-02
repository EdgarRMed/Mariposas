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
// Peticion post para guargar la foto de la mariposa
router.post('/uploadImage/:id', multipartMiddelware, ProjectController.uploadImage); 
// Peticion get para devolver la lista de ejemplares
router.get('/ejemplares', ProjectController.getEjemplares);
// Preticion get para devolver la fotografia de cada ejemplar
router.get('/getImage/:file', ProjectController.getImageFile);
// Perticion delete para eliminar un ejemplar
router.delete('/ejemplar/:id', ProjectController.eliminarEjemplar);

module.exports = router;
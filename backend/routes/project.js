'use strict'

var express = require('express');
var ProjectController = require('../controllers/project');

var router = express.Router();

// Ejemplo del metodo get del protocolo http
router.get('/home', ProjectController.home);
// Haciendo una peticion post para agregar una nueva mariposa
router.post('/agregarEjemplar', ProjectController.agregarEjemplar);

module.exports = router;
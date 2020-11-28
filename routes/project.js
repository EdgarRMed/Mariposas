'use strict'

var express = require('express');
var ProjectController = require('../controllers/project');

var router = express.Router();

router.get('/home', ProjectController.home);
module.exports = router;
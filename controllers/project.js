'use strict'

//var Project = require('../models/proyect');

var controller = {

    home: function(req, res){
        return res.status(200).send({
            message: 'Api corriendo correctamente'
        });
    },
};

module.exports = controller;

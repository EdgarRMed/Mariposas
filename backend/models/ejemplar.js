'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Clase NuevoEjemplar que se encuentra en el diagrama de clases
var NuevoEjemplar = Schema({
    nombre: String,
    genero: String,
    region: String,
    especie: Number,
    familia: String,
    subespecie: String,
    fotografia: String
});

module.exports = mongoose.model('NuevoEjemplar', NuevoEjemplar);
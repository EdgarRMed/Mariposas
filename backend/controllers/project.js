'use strict'

var NuevoEjemplar = require('../models/ejemplar');
var fs = require('fs');
var path = require('path');

var controller = {

    // Estte es un metodo de ejemplo sobre el metodo get de http
    home: function(req, res){
        return res.status(200).send({
            message: 'Api corriendo correctamente'
        });
    },

    /* Aqui se agrega un nuevo ejemplar a la base de datos
    por medio del metodo post del protocolo http, se crea
    una instancia de la case nuevo ejempar que se encuentra en
    el modelo, a continuacion se crea una variable llamada params
    que recoje el cuerpo del request, que en estes caso son los 
    datos que se introducieron previamente en el formulario para 
    crear un nuevo ejemplar, una vez se agrea con exito, se le regresa 
    un mensaje de exito al servidor */
    
    agregarEjemplar: function(req, res){
        var nuevoEjemplar = new NuevoEjemplar();
        var params = req.body;

        nuevoEjemplar.nombre = params.nombre;
        nuevoEjemplar.genero = params.genero;
        nuevoEjemplar.region = params.region;
        nuevoEjemplar.especie = params.especie;
        nuevoEjemplar.familia = params.familia;
        nuevoEjemplar.subespecie = params.subespecie;
        nuevoEjemplar.fotografia = params.fotografia;

        // Implementando la funcinalidad para buscar si existe o no...
        
        nuevoEjemplar.save((err, nuevoEjemplarStored) =>{
            if(err) return res.status(500).send({message: 'Error al guardar'});

            if(!nuevoEjemplarStored) return res.send(404).send({message: 'No se ha podido guardar el ejemplar'});

            return res.status(200).send({nuevoEjemplar: nuevoEjemplarStored});
        });

    },

    // Metodo del controlador para guardar las imagenes 
    uploadImage: function(req, res){
        var ejemparId = req.params.id;
        var fileName = 'Imagen no subida...'

        if(req.files){
            var filePath = req.files.imagen.path;
            var fileSplit = filePath.split('\\');
            var fileName = fileSplit[1];

            NuevoEjemplar.findByIdAndUpdate(ejemparId, {fotografia: fileName}, {new: true}, (err, ejemplarUpdated)=>{
                if(err) return res.status(500).send({message: 'La imagen no se ha subido'});
            
                if(!ejemplarUpdated) return res.status(404).send({message: 'El elemento no existe'});

                return res.status(200).send({
                    nuevoEjemplar: ejemplarUpdated
                });
            });

        
        } else {
            return res.status(200).send({
                message: fileName
            });
        }
    },

    // Aqui va getEjemplares()...
    getEjemplares: function(req, res){
        NuevoEjemplar.find({}).exec((err, ejemplares) =>{
            if(err) return res.status(500).send({message: 'Error al devolver los datos.'});
            if(!ejemplares) return res.status(404).send({message: 'No hay Ejemplares que mostrar'});
            return res.status(200).send({ejemplares}) ;
        });
    },
    // Fin mgetEjemplares


    // Aqui va eliminarEjemplar()..
    eliminarEjemplar: function(req, res){
        var ejemplarId = req.params.id;
        NuevoEjemplar.findByIdAndRemove(ejemplarId, (err, ejemplarRemoved)=>{
            if(err) return res.status(500).send({message: "No se ha podido borrar el Ejemplar"});
            if(!ejemplarRemoved) return res.status(404).send({message: "No se puedes eliminar ese Ejemplar"});
           // Probable cambio
            return res.status(200).send({ejemplar: ejemplarRemoved});
        });
    },
    // Fin eliminarEjemplar


    // Aqui va getImageFile()...
    getImageFile: function(req, res){
        var file = req.params.file;
        console.log(req.params);
        var path_file = './uploads/'+file;
        
        fs.access(path_file, fs.constants.F_OK, (err) =>{
            if(err){
                return res.status(200).send({message: "No exite la imagen..."});
            }else{
                return res.sendFile(path.resolve(path_file));
            }
        });
    }
    // Fin getImageFile

};

module.exports = controller;

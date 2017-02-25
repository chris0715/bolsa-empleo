var  mongoose = require('mongoose');

var schemaPuestp = mongoose.Schema({
    localizacion: String,
    puesto: String,
    compania: String,
    informacion: String
})

module.exports= mongoose.model('modeloPuesto',schemaPuestp);
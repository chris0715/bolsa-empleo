var  mongoose = require('mongoose');

var schemaPuestp = mongoose.Schema({
    localizacion:{type: String, required: true},
    puesto: {type: String, required: true},
    compania: {type: String, required: true},
    informacion: {type: String, required: true}
})

module.exports= mongoose.model('modeloPuesto',schemaPuestp);
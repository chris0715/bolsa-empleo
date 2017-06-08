const  mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const schemaPuestp = mongoose.Schema({
    localizacion:{type: String, required: true},
    puesto: {type: String, required: true},
    compania: {type: String, required: true},
    informacion: {type: String, required: true}
})

module.exports = mongoose.model('modeloPuesto',schemaPuestp);
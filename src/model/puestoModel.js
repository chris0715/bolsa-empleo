import  mongoose from 'mongoose';
mongoose.Promise = global.Promise;

const schemaPuestp = mongoose.Schema({
    localizacion:{type: String, required: true},
    puesto: {type: String, required: true},
    compania: {type: String, required: true},
    informacion: {type: String, required: true}
})

export default mongoose.model('modeloPuesto',schemaPuestp);
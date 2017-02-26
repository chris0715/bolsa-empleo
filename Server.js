//Dependencias 
var express= require('express');
var webpackmide =require('webpack-dev-middleware');
var webpack =require( 'webpack');
var BodyParser = require('body-parser');
var mongoose = require('mongoose');
var ObjetoID = require('mongoose').Types.ObjectId;

let app = express();
let compiler = webpack(require('./webpack.config.js'));
app.use(express.static(__dirname+'/public'));
app.use(BodyParser.json());
app.use(webpackmide(compiler))

app.set('view engine', 'ejs');

let serverPort = process.env.PORT || 5000;

var  ModeloPuesto = require( './src/model/puestoModel');
mongoose.connect('mongodb://localhost/myapp');
//'mongodb://chris:123456@ds161209.mlab.com:61209/mitrabajodb'
mongoose.connection.on('error', function(error){
    console.log(error);
})




app.get('/api/puestos', BodyParser.urlencoded({extended:false}),function(req,res){

    console.log(req.query.id);

    if(req.query.id  !== undefined){
        console.log("Objeto ID"+ id);
        ModeloPuesto.findById(req.query.id).then((dataa)=>{console.log("con parametros "+dataa); res.json(dataa)})
    }
    else{
    ModeloPuesto.find().then((data)=>{ console.log("sin parametros"+data); res.json(data)})
    }
    

})

app.post('/api/puestos', function (req,res) {

    console.log(req.body)
    console.log(req.query)

    new ModeloPuesto({
    
    localizacion: req.body.LocalizacionF,
    puesto: req.body.puestoF,
    compania: req.body.companiaF,
    informacion: req.body.datosF
    }).save();

    res.status(200);

})

app.get('*', function(req,res){
    console.log(process.env)
    res.render('index');
})


app.listen(serverPort, ()=>{console.log('escuchando en el puerto :'+serverPort)})

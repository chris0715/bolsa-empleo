var express= require('express');
var webpackmide =require('webpack-dev-middleware');
var webpack =require( 'webpack');

let app = express();
let compiler = webpack(require('./webpack.config.js'));
app.use(express.static(__dirname+'/public'));
app.set('view engine', 'ejs');

let serverPort = 5000;


app.use(webpackmide(compiler))
app.get('/', function(req,res){
    console.log(process.env)
    res.render('index');
})

app.get('/api/puesto/:id', function(req,res){
    
    res.render('puesto');
})


app.listen(serverPort, ()=>{console.log('escuchando en el puerto :'+serverPort)})

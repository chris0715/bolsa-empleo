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
    
    res.render('index');
})

app.listen(serverPort, ()=>{console.log('escuchando en el puerto :'+serverPort)})

//Dependencias 
const express= require('express');
const webpackmide =require('webpack-dev-middleware');
const webpack =require( 'webpack');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const ObjetoID = require('mongoose').Types.ObjectId;
const Jwt = require('express-jwt') ;

import passport from 'passport';
import sConfig from './src/config';
import ModeloPuesto from './src/model/puestoModel';
import { Strategy as LocalStrategy } from 'passport-local';

const PORT = process.env.PORT || 5000;
const app = express();

let compiler = webpack(require('./webpack.config.js'));

app.set('view engine', 'ejs');

app.use(express.static(__dirname+'/public'));
app.use(bodyParser.urlencoded({ extended:false }))
app.use(webpackmide(compiler))

//Here we add the required passport configuration
app.use(passport.initialize());

const options = {
    usernameField: "email",
    passwordField: "password",
    session: false
}

passport.use('local',new LocalStrategy(options,(username, password, done) => {
    done(null, {
        username: 'ediaz',
        token: 'hoaholaholahoala'
    })
}))

passport.serializeUser((user, done)=>{
    done(null,user.username );
})

// --------------------------------------------------------

app.post('/login', passport.authenticate('local'), (req, res) => {

    console.log(req.user);
    res.json({ 
        object: {
            username: req.user.username,
            token: req.user.token
        }
    })
})

app.get('/api/puestos', bodyParser.urlencoded({extended:false}),function(req,res){
    if (req.query.id) {
        ModeloPuesto.findById(req.params.id).then((dataa)=>{console.log("con parametros "+dataa); res.json(dataa)})
    } else {
        ModeloPuesto.find().then((data)=>{ console.log("sin parametros"); res.json(data)})
    }
})

app.get('/api/puestos/:id',function(req,res){

    console.log("parametros lado servidor" +req.params.id);
    if(req.params.id  !== undefined){
        ModeloPuesto.findById(req.params.id).then((dataa)=>{console.log("con parametros"); res.json(dataa)})
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
    res.render('index');
})


app.listen(PORT, () => {
    console.log('escuchando en el puerto : %s', PORT)
})

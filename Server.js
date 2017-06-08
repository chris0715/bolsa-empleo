//Dependencias 
const express= require('express');
const webpack =require( 'webpack');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const ObjetoID = require('mongoose').Types.ObjectId;
const Jwt = require('express-jwt') ;
const Router = require('./router')

const ModeloUsuarion = require ('./src/model/userModel');
const passport  = require('passport');
const sConfig = require('./src/config');

//const webpackmide = require('webpack-dev-middleware') || '';

// Connection to the database. 
mongoose.connect(sConfig.externalDatabase);
mongoose.connection.on('error', function(err){
    console.log(err);
})

//-----------------------------------------------------

const LocalStrategy = require('passport-local').Strategy ;

const PORT = process.env.PORT || 5000;
const app = express();

let compiler = webpack(require('./webpack.config.js'));

app.set('view engine', 'ejs');

// middleware initialization
app.use(express.static(__dirname+'/public'));
app.use(bodyParser.urlencoded({ extended:false }))
app.use(bodyParser.json())


app.use(express.session({secret:'this is madness'}))


//Here we add the required passport configuration ------------------------------
app.use(passport.initialize());
app.use(passport.session())

const options = {
    usernameField: "email",
    passwordField: "password",
    session: false
}

passport.use('local',new LocalStrategy(options,(username, password, done) => {
    
    ModeloUsuarion.findOne({email: username}, function(err,data){
        if (err) {
            console.log(err);
            return done(err)
        }

        if(!data){
            return done(null, false)
        }

        return done(null, data);
        

    })
}))

passport.serializeUser((user, done)=>{
    done(null,user._id );
})

passport.deserializeUser((id, done)=>{
        ModeloUsuarion.findById(id,(err, user)=>{
            done(err,user)
        })
        
    
})

// --------------------------------------------------------

app.use(Router)


app.listen(PORT, () => {
    console.log('escuchando en el puerto : %s', PORT)
})

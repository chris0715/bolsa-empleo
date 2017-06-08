var Router = require( 'express' )
const passport = require('passport') 


//Models for database Interactions
const ModeloPuesto = require('./src/model/puestoModel');
const ModeloUsuarion = require('./src/model/userModel');
// -------------------------------------------------

const router =  new Router()

router.post('/login', passport.authenticate('local'), (req, res) => {
    
    console.log(req.session)
    console.log(req.user)
  if(req.session)
  res.status(200).send('Ingreso exitoso!')
  else{
        res.status(401).send('Indenditad invalida')

  }

})
router.get('/auth/userdata',(req,res)=>{
  if(req.isAuthenticated())
  {
    res.status(200).json({user:req.user})

  }
  else
    res.status(401).json({})


})
router.post('/registro', function(req,res){
    console.log(req.body)
    new ModeloUsuarion({ 
        email: req.body.email,
        password: req.body.password,
        nombre: req.body.nombre

    }).save((err)=>{
        if(err){
            console.log(err);
            res.status(500).send(err);
        }
        else
        res.status(200).send('it went thru')
    })

});
router.get('/api/puestos',function(req,res){
    if (req.query.id) {
        ModeloPuesto.findById(req.params.id).then((dataa)=>{console.log("con parametros "+dataa); res.json(dataa)})
    } else {
        ModeloPuesto.find().then((data)=>{ console.log("sin parametros"); res.json(data)})
    }
})

router.get('/api/puestos/:id',function(req,res){

    console.log("parametros lado servidor" +req.params.id);
    if(req.params.id  !== undefined){
        ModeloPuesto.findById(req.params.id).then((dataa)=>{console.log("con parametros"); res.json(dataa)})
    }

})

router.post('/api/puestos', function (req,res) {

  new ModeloPuesto({
        localizacion: req.body.LocalizacionF,
        puesto: req.body.puestoF,
        compania: req.body.companiaF,
        informacion: req.body.datosF
    }).save();

    res.status(200);

})

router.get('*', function(req,res){
    res.render('index');
})

module.exports = router
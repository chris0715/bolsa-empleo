var express= require('express');


let app = express();
app.use(express.static(__dirname+'/public'));
app.set('view engine', 'ejs');
let serverPort = 5000;



app.get('/', function(req,res){
    
    res.render('index');
})

app.listen(serverPort, ()=>{console.log('escuchando en el puerto :'+serverPort)})

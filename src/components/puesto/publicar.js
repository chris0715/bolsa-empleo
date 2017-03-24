import React from 'react';
import { browserHistory } from 'react-router';
import $ from 'jquery';
import Ktop from 'isomorphic-fetch';

export default class AA extends React.Component{
    constructor(){
        super();
        this.state ={puesto:{}};
        
    }
    
     manejarPuesto(event){
        const estado= this.state.puesto;
        const objecto = event.target.name;
        estado[objecto] = event.target.value;
        this.setState={puesto:estado}
        
        
    }

    enviarPuesto(event){
        event.preventDefault();
        // ajax request that sends the form data to the server.
      $.ajax({url:'/api/puestos',
        type:'POST',
        contentType: 'application/json',
        data:JSON.stringify(this.state.puesto)
        });
    
    // it allows a few minutes after submission to send it to the homepage. 
    event.target.reset();
    setTimeout(function(){
        browserHistory.push('/');
    }, 2000);

    }
    
    render(){
        return <div className="container">
        <div className="row">
        <div className="col-md-offset-4 col-md-4 ">
        <form method="post" onSubmit={this.enviarPuesto.bind(this)}>
            <div className="form-group">
            <label>Puesto</label>
            <input className="form-control" required name="puestoF" onChange={this.manejarPuesto.bind(this)} />
            </div>

            <div className="form-group">
            <label>Localizacion</label>
            <input className="form-control" required name="LocalizacionF" onChange={this.manejarPuesto.bind(this)} />
            </div>

            <div className="form-group">
            <label>compania</label>

            <input className="form-control" required name="companiaF" onChange={this.manejarPuesto.bind(this)} />
            </div>

            <div className="form-group">
            <label>Datos:</label>
            <textarea className="form-control" required name="datosF" onChange={this.manejarPuesto.bind(this)} />
            </div>

            <input type="submit" value="Enviar" />


        </form>
            </div>
        </div>
    </div>}
}
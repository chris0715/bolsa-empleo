import React from 'react';

import $ from 'jquery';

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
        $.ajax({url:'/api/puestos',
        type:'POST',
        contentType: 'application/json',
        data:JSON.stringify(this.state.puesto)
        
    });
    event.target.reset();
    }
    
    render(){
        return <div className="container">
        <div className="row">
        <div className="col-md-offset-4 col-md-4 ">
        <form method="post" onSubmit={this.enviarPuesto.bind(this)}>
            <div className="form-group">
            <label>Puesto</label>
            <input className="form-control" name="puestoF" onChange={this.manejarPuesto.bind(this)} />
            </div>

            <div className="form-group">
            <label>Localizacion</label>
            <input className="form-control" name="LocalizacionF" onChange={this.manejarPuesto.bind(this)} />
            </div>

            <div className="form-group">
            <label>compania</label>

            <input className="form-control" name="companiaF" onChange={this.manejarPuesto.bind(this)} />
            </div>

            <div className="form-group">
            <label>Datos:</label>
            <textarea className="form-control" name="datosF" onChange={this.manejarPuesto.bind(this)} />
            </div>

            <input type="submit" value="Enviar" />


        </form>
            </div>
        </div>
    </div>}
}
import React from 'react';

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
    
    render(){
        return <div className="container">
        <div className="row">
        <div className="col-md-offset-4 col-md-4 ">
        <form>
            <div className="form-group">
            <label>Puesto</label>
            <input className="form-control" name="puestoF" onChange={this.manejarPuesto.bind(this)} />
            </div>
        </form>
            </div>
        </div>
    </div>}
}
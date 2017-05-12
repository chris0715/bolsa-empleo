import React from 'react';
import fetch from 'isomorphic-fetch';

class Puesto extends React.Component{
    
    constructor(){
        super();
        this.state= {trabajo:{}}
    }

  componentDidMount(){
    const myId = this.props.params.puestoid;
    console.log("this is the id"+myId);
    fetch(`/api/puestos/${myId}`, { method:'GET' })
    .then((response)=>{
      response.json().then((data)=>{
      this.setState({trabajo:data});
            })
        });

    }
  render(){

        
  return(
    <div className="container">
      <div  className="panel panel-default puesto">
          <div className="panel-heading"><h3 className="text-center"> {this.state.trabajo.puesto}</h3></div>
               <div className="panel panel-body">
                <h5>Localizacion:</h5><span>{this.state.trabajo.localizacion}</span>
                <div>
                 <span><h3>Descripcion de puesto:</h3></span> 
                 <div><p>{this.state.trabajo.informacion}</p></div>
                </div>
               </div>
               </div>
          </div>
        )
    }
}

export default Puesto;
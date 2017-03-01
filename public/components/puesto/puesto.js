import React from 'react';
import $ from 'jquery';

class Puesto extends React.Component{
    
    constructor(){
        super();
        this.state= {trabajo:{}}
    }

    componentDidMount(){
        console.log(this.props.params.puestoid);
        $.ajax({url:'/api/puestos',
        type: 'GET',
        contentType: 'application/x-www-form-urlencoded',
        data:{id:this.props.params.puestoid},
        dataType: 'json'
        }).then((data)=>{
            console.log('este es el valor retornado al cliente '+data);
            this.setState({trabajo:data});
        })

    }
   
    render(){
        const estiloDescripcion ={backgroundColor:" #8084cc"};
        return(<div className="container">
               <div className="panel panel-default">
               <div className="panel-heading"><h2 className="text-center"> {this.state.trabajo.puesto}</h2></div>
               <div className="panel panel-body">
                <span><h3>Localizacion:</h3> {this.state.trabajo.localizacion}</span>
                <div>
                 <span style={estiloDescripcion} ><h3>Descripcion de puesto:</h3></span> <div>{this.state.trabajo.informacion}</div>
                </div>
               </div>
               </div>
            </div>
        )
    }
}

export default Puesto;
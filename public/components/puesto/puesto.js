import React from 'react';
import $ from 'jquery';

class Puesto extends React.Component{
    
    constructor(){
        super();
        this.state= {trabajo:{}}
    }

    componentDidMount(){
        console.log(this.props.params.puestoid);
        var elId = {idk:this.props.params.puestoid }
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
        
        return(<div className="container">
               <div className="panel panel-default">
               <div className="panel-heading"><h2> Pocision:{this.state.trabajo.puesto}</h2></div>
               <div className="panel panel-body">
                <div>
                 Descripcion de puesto: <div>{this.state.trabajo.informacion}</div>
                </div>
               </div>
               </div>
            </div>
        )
    }
}

export default Puesto;
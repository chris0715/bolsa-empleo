import React from 'react';
import $ from 'jquery';

class Puesto extends React.Component{
    

    componentDidMount(){
        var id = this.props.params.id;
        $.ajax({url:'api/puestos',
        type: 'GET',
        contentType: 'application/json',
        data:JSON.stringify(id)
    
        })

    }
   
    render(){
        
        return(<div className="container">
               <div className="panel panel-default">
               <div className="panel-heading"><h2> Pocision:</h2></div>
               <div className="panel panel-body">
                <div>
                 Descripcion de puesto:
                </div>
               </div>
               </div>
            </div>
        )
    }
}

export default Puesto;
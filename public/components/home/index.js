import React from 'react';
import {Link} from 'react-router';
import $ from 'jquery';

class Index extends React.Component{

    constructor(){
        super();
        this.state = {puestos:[]}
         
    }

componentDidMount(){
 $.get('/api/puestos').done((data)=>{
     this.setState({puestos: data});
 })
}

    render(){
        return(
       //Contenido princicipal de la pagina
            <div className="container">
                
                <Link to="publicar"><button className="btn btn-default">Publicar Empleo</button></Link>
                
                
                <table className="table table-hover">
                <thead>
                    <tr>
                    <th></th>
                    <th>Localizacion</th>
                    <th>Puesto</th>
                    <th>Compania</th>
                    </tr>
                </thead>
                    <tbody>
                    {/*<tr>
                        
                        <td></td>
                        <td>Santo Domingo</td>
                        <td><Link to="puesto/45">Programador</Link>  </td>
                        <td>NewTech</td>
                           
                    </tr>*/}
                    {
                        this.state.puestos.map(valor=>{
                            return <tr>

                                <td></td>
                                <td>{valor.localizacion}</td>
                                <td><Link to="puesto/45">{valor.puesto}</Link>  </td>
                                <td>{valor.compania}</td>

                            </tr>
                        })
                    }
                    </tbody>
                </table>
            </div>
//             Final del  Contenido princicipal de la pagina                
        )
    }
}

export default Index;
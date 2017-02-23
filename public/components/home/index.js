import React from 'react';
import {Route,Link} from 'react-router';


class Index extends React.Component{
    
    render(){
        return(
       //Contenido princicipal de la pagina
            <div className="container">
                
                <Link to="puesto"><button className="btn btn-default">Publicar Empleo</button></Link>
                
                
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
                    <tr>
                        
                        <td></td>
                        <td>Santo Domingo</td>
                        <td><Link to="/puesto/45">Programador</Link>  </td>
                        <td>NewTech</td>
                           
                    </tr>
                    </tbody>
                </table>
            </div>
//             Final del  Contenido princicipal de la pagina                
        )
    }
}

export default Index;
import React from 'react';
import Login from '../auth/LoginContainer';

class Modal extends React.Component{


    render(){


        const Estilos = {
            height: "500px",
            width: "500px",
            position: "absolute",
            top: "50%",
            left: "50%",
            marginTop: "-150px",
            marginLeft: "-150px",
            background: "#fff"

        }
        if(this.props.evento=== true)
        {return(
            
            <div  style={Estilos}>
            
            <Login />
            </div>
        );}
        else return null;

    }
}

export default Modal;
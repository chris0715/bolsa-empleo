import React, {Component} from 'react';
import LoginForm from '../shared/login';


class LoginContainer extends Component{
    constructor(){
        super();

        this.state = { mensaje:""}

        this.ManejarLogin = this.ManejarLogin.bind(this);
    }

    ManejarLogin(event){
        event.preventDefault();
        this.setState({mensaje:"Usuario o contrasena incorrectos"})
    }

    render(){
            return(
                <LoginForm mensaje={this.state.mensaje} onSubmit={this.ManejarLogin} />
            );
    }
}


export default LoginContainer;
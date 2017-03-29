import React, {Component} from 'react';
import LoginForm from './loginForm';
import fetch from 'isomorphic-fetch';
import {connect} from 'react-redux';

class LoginContainer extends Component{
    constructor(){
        super();

        this.state = { mensaje:"", formData:{}}
        this.ManejarLogin = this.ManejarLogin.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        const inputName = event.target.name;
        const theState = this.state.formData;
        theState[inputName] = event.target.value;
        this.setState({formData: theState });
        console.log(this.state.formData);            

    }
    ManejarLogin(event){
        event.preventDefault();


        $.ajax({url:'/login',
        type:'POST',
        contentType: 'application/x-www-form-urlencoded',
        headers: {authorization: 'Bearer ' + localStorage.getItem('token')},
        data:{email: this.state.formData.email, password: this.state.formData.password}
    }).done((dataz)=>{
            localStorage.setItem('token', dataz.token)
            this.setState({mensaje:dataz.success })
    });
    
                
            
       
    }

    render(){
            return(
                <div>
                
                <span className="right"><i className="fa fa-lg fa-window-close"></i></span>
                <LoginForm mensaje={this.state.mensaje} onChange={this.handleChange} onSubmit={this.ManejarLogin} />
                </div>
            );
    }
}

function mapStateToProps(state){
    return {
        userData: state.userData
    }
}

function mapDispatchToProps(){
    return {}
}


export default connect(mapStateToProps, mapDispatchToProps) (LoginContainer);
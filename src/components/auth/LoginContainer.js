import React, {Component} from 'react';
import LoginForm from './loginForm';
import { browserHistory } from 'react-router'

class LoginContainer extends Component{
    constructor(props, context){
        super();

        this.state = { mensaje:"", formData:{}}
        this.formSubmit = this.formSubmit.bind(this);
        this.formHandle = this.formHandle.bind(this);
    }

    formHandle(event){
        const inputName = event.target.name;
        const theState = this.state.formData;
        theState[inputName] = event.target.value;
        this.setState({formData: theState });
        console.log(this.state.formData);            

    }
  formSubmit(event){
    event.preventDefault();
    const dataToSend ={email: this.state.formData.email, password: this.state.formData.password}
    const vm = this;
    $.ajax({
        url:'/login',
        method:'POST',
        headers: {authorization: 'Bearer ' + localStorage.getItem('token')},
        data:dataToSend })
     .done((dataz)=>{
        console.log(dataz)
          localStorage.setItem('token', dataz.token)
          this.setState({mensaje:dataz})
            this.context.router.push('/')            
    });
    }

  render(){
    return(
      <div>
        <span className="right"><i className="fa fa-lg fa-window-close"></i></span>
        <LoginForm mensaje= {this.state.mensaje} onChange= {this.formHandle} onSubmit ={ this.formSubmit } />
      </div>
            );
    }
}

LoginContainer.contextTypes = {
    router: React.PropTypes.func.isRequired
};

export default LoginContainer;
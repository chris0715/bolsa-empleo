import React from 'react';
import AccessForm from './signupForm';
import $ from 'jquery';


export default class SingupContainer extends React.Component{

    constructor(){
        super();
        this.state ={
            error:{},
            formData:{},
            message: '^' 
        }

        window.elmensaje = this.state.message
    }
    FormChange(event){
        const name = event.target.name;
        const value = event.target.value;
        const State = this.state.formData;
        State[name] = value;
        
        this.setState({formData:State});

    }
    noposible(){

    }
    FormHandler(event){
        // here we will send the requesto to the server route registro to be able to call 
        // send the client form data to the server and for it to be send to the database throught the model
        event.preventDefault()
        const dataToSend= {nombre: this.state.formData.nombre, 
            email:this.state.formData.email, 
            password: this.state.formData.password}

        const vm = this;
        $.ajax({
            url: "/registro",   
            method: "POST",
            data: dataToSend
        }).done((response)=>{
           vm.setState({message:"Registro existoso"})
        });
        
    }

    render(){
        return (
            <AccessForm message={this.state.message} formSubmit={this.FormHandler.bind(this)} formChange={this.FormChange.bind(this)} />
        );
    }
}
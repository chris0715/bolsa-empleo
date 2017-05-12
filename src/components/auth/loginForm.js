import React from 'react';



const Login = (props)=>{

    const myStyle={
        marginTop:'20px'
    }

    return(
    <div  className="container">
        
        <form style={myStyle}  method="post" onSubmit={props.onSubmit}>
        <div className="form-group">
            <label>Email:</label>
            <input className="form-control" onChange={props.onChange} name="email" type="email" />
        </div>

        <div className="form-group">
            <label>Contrasena:</label>
            <input className="form-control" onChange={props.onChange} name="password" type="password" />
        </div>

        <input className="btn btn-success" type="submit" value="acceder" />
        </form>
        <span className="text-danger">{props.mensaje}</span>
    </div>);
}

export default  Login;
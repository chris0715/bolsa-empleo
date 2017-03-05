import React from 'react';


const Login  = (props)=>{

    return (<div className="container">
        
        <form onSubmit={props.onSubmit}>
        <div className="form-group">
            <label>Usuario:</label>
            <input className="form-control" type="text" />
        </div>

        <div className="form-group">
            <label>Contrasena:</label>
            <input className="form-control" type="password" />
        </div>

        <input className="btn btn-success" type="submit" value="acceder" />
        </form>
        <span className="text-danger">{props.mensaje}</span>
    </div>);
}

export default Login;
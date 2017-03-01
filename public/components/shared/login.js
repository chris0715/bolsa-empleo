import React from 'react';


const Login  = (props)=>{

    return (<div className="container">
        <div className="form-group">
            <label>Usuario:</label>
            <input className="form-control" type="text" />
        </div>

        <div className="form-group">
            <label>Contrasena:</label>
            <input className="form-control" type="password" />
        </div>

        <input className="btn btn-success" type="submit" value="acceder" />
    
    </div>);
}

export default Login;
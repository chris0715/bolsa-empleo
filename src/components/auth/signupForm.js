import React from 'react';


const Form = (props)=>{

  return (
    <div  className ="container">
      <form onSubmit={props.formSubmit} method="POST">
        <div className="input-field">
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" name="nombre" onChange={props.formChange} />
        </div>

          <div className="input-field col s3">
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" onChange={props.formChange} />
          </div>

          <div>
            <label htmlFor="password">Contrasena:</label>
            <input type="password" name="password" onChange={props.formChange} />
          </div>
                    
                    
                    <button>Aceptar</button> <input type="reset" value="cancelar"/>
                </form>
                <span>{props.message}</span>
        </div>
    )
}


export default Form;
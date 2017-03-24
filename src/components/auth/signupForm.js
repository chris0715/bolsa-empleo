import React from 'react';


const Form = ()=>{

    return (
        <div>
                <form  method="POST">

                    <div>
                      <label htmlFor="nombre">Nombre:</label>
                      <input type="text" name="nombre" />
                    </div>

                    <div>
                      <label htmlFor="email">Email:</label>
                      <input type="email" name="email" />
                    </div>

                    <div>
                      <label htmlFor="password">Contrasena:</label>
                      <input type="password" name="password" />
                    </div>
                    
                    <button>Aceptar</button> <input type="reset" value="cancelar"/>
                </form>
        </div>
    )
}


export default Form;
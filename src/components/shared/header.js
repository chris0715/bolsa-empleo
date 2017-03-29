import React from 'react';
import {Link} from 'react-router';
import Dialog from 'material-ui/Dialog';
import MiuTheme from 'material-ui/styles/MuiThemeProvider';
class Header extends React.Component{
   
   constructor(){
     super();
     this.state ={modalIsOpen:false , isLoggedin:false, userData:{}};
   }
   componentDidMount(){

   }

   handleDialog(){
      this.setState({modalIsOpen: !this.state.modalIsOpen})

   }
   
   manejarClick(e){
     e.preventDefault();
     this.setState({modalIsOpen:true})
   }

    render(){

      return(
        <div>
        <nav>
  <div className="nav-wrapper">
   
      <Link className="brand-logo" to="/">Bolsa De Empleos</Link>

    
      <ul className="right hide-on-med-and-down">
        <li className="active"><Link to="/">Home</Link></li>

      <li>
      <form className="navbar-form navbar-left">
        <div className="input-field" >
          <input type="search"  placeholder="Search" />
        </div>
      </form>
      </li>
       {
        this.state.isLoggedin ?   (<div></div>) : (<div className="right"><li><Link to="/registro">Registrarse</Link></li>
      <li><button className="btn" onClick={this.handleDialog.bind(this)}>Acceder</button></li> </div>)
      }
       </ul>
     
  
  </div>
</nav>
<MiuTheme >
    <Dialog open={this.state.modalIsOpen} modal={true}  >
          <div className="modal-content">
        
        <form  method="post" >
        <div className="form-group">
            <label>Email:</label>
            <input className="form-control"  name="email" type="email" />
        </div>

        <div className="form-group">
            <label>Contrasena:</label>
            <input className="form-control"  name="password" type="password" />
        </div>

        <input className="btn btn-success" type="submit" value="acceder" />
        </form>
        <span className="text-danger"></span>
    </div>
     </Dialog>
     </MiuTheme>
  </div>
);
    }
     

}

export default Header;
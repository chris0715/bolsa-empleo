import React from 'react';
import {Link} from 'react-router';
import Modal from './modal';

class Header extends React.Component{
   
   constructor(){
     super();
     this.state ={modalIsOpen:false , isLoggedin:false};
   }
   componentDidMount(){
   }
   
   manejarClick(e){
     e.preventDefault();
     this.setState({modalIsOpen:true})
   }

  


    render(){

      let notloggedIn;
      
      if(this.state.isLoggedin){
        notloggedIn = <li>Bienbenido</li>;
      } 
      else
        notloggedIn =<ul className="right">
      <li><Link to="/registro">Registrarse</Link></li>
      <li><a href="#">Acceder</a></li>);
      </ul>;
      

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
       </ul>
      {notloggedIn}
  
  </div>
</nav>
    <Modal evento={this.state.modalIsOpen} />
  </div>
);
    }
     

}

export default Header;
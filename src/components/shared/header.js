import React from 'react';
import {Link} from 'react-router';
import Dialog from 'material-ui/Dialog';
import MiuTheme from 'material-ui/styles/MuiThemeProvider';
import $ from 'jquery'
class Header extends React.Component{
   
   constructor() {
     super();
     this.state = {  isLoggedin:false, userData:{} };
   } 
   componentDidMount(){
    $.get('/auth/userdata', (data)=>{
      console.log(data)
        if(data.hasOwnProperty('user')){
          this.setState({isLoggedin:true, userData:data})
        }
        
    })
   }

   handleDialog(){
      this.setState({ modalIsOpen: !this.state.modalIsOpen  })

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
        <div className="input-field left" >
          <input type="search"   placeholder="Search" />
        </div>
      </form>
      </li>
       {
        this.state.isLoggedin ?   (<div className="left">Bienbendio <strong> {this.state.userData.user.nombre}</strong></div>) : 
        (<div className="right"><li><Link to="/registro">Registrarse</Link></li>
      <li><Link to="/login" className="btn" >Acceder</Link></li> </div>)
      }
       </ul>
  </div>
</nav>
</div>
);
    }
     

}

export default Header;
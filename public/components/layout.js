import Header from './shared/header.js';
import React  from 'react';

class Layout extends React.Component{
    
    render(){
        return(<div>
         <Header />
            
               <div>{this.props.children}</div>
               </div>
            
        )
    }
}



export default Layout;
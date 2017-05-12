import Header from './shared/header.js';
import React  from 'react';
import jquery from 'jquery';
import Footer from './shared/footer'

class Layout extends React.Component{
    
    constructor(){
        super()
    }

    componentDidMount(){
    }

    render(){
        return(<div>
         <Header />
            
               <div>{this.props.children}</div>
               
        <Footer />
        </div>
            
        )
    }
}



export default Layout;
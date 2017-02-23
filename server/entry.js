import React from 'react';
import ReactDom from 'react-dom';
//import bootstrap from './../public/css/bootstrap.min.css';
import Layout from '../public/components/layout.js';
import {IndexRoute,Router, Route, browserHistory} from 'react-router';
import Puesto from '../public/components/puesto/puesto.js';
import Index from '../public/components/home/index.js';


ReactDom.render(<Router history={browserHistory}>
    <Route path="/" component={Layout}>
        <IndexRoute component={Index}  />
        <Route path="puesto/:id" component={Puesto} />
    </Route></Router>,document.getElementById('app'));
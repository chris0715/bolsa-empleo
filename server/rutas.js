import Layout from '../public/components/layout.js';
import Puesto from '../public/components/puesto/puesto.js';
import Publicar from '../public/components/puesto/publicar.js';
import Index from '../public/components/home/index.js';
import Login from '../public/components/auth/LoginContainer';
import {IndexRoute, Route } from 'react-router';

import React from 'react';

export default (

    <Route path="/" component={Layout}>
        <IndexRoute component={Index}  />
        <Route path="puesto/:puestoid" component={Puesto} />
        <Route path="publicar" component={Publicar} />
        <Route path="login" component={Login} />
        
    </Route>)
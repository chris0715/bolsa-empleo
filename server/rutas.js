import Layout from '../src/components/layout.js';
import Puesto from '../src/components/puesto/puesto.js';
import Publicar from '../src/components/puesto/publicar.js';
import Index from '../src/components/home/index.js';
import Login from '../src/components/auth/LoginContainer';
import Registro from '../src/components/auth/signUpContainer';

import {IndexRoute, Route } from 'react-router';

import React from 'react';

export default (

    <Route path="/" component={Layout}>
        <IndexRoute component={Index}  />
        <Route path="puesto/:puestoid" component={Puesto} />
        <Route path="publicar" component={Publicar} />
        <Route path="login" component={Login} />
        <Route path="registro" component={Registro} />
        
    </Route>)
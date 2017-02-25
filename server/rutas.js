import Layout from '../public/components/layout.js';
import Puesto from '../public/components/puesto/puesto.js';
import Publicar from '../public/components/puesto/publicar.js';
import Index from '../public/components/home/index.js';
import {IndexRoute, Route } from 'react-router';
import React from 'react';

export default (

    <Route path="/" component={Layout}>
        <IndexRoute component={Index}  />
        <Route path="puesto/:id" component={Puesto} />
        <Route path="publicar" component={Publicar} />
    </Route>)
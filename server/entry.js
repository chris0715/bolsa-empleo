import React from 'react';
import ReactDom from 'react-dom';
import {Router, browserHistory} from 'react-router';

import Rutas from './rutas';




ReactDom.render(<Router history={browserHistory}>
    {Rutas}
    </Router>,document.getElementById('app'));
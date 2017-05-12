import React from 'react';
import ReactDom from 'react-dom';
import {Router, browserHistory} from 'react-router';
import Rutas from './rutas';
import {Provider} from 'react-redux';
import myStore from '../src/store/store';



ReactDom.render(<Provider store={myStore}>
<Router history={browserHistory}>
  {Rutas}
</Router>
</Provider>,document.getElementById('app'));
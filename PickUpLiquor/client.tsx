import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import './client.css';

import Home from './component/Home';
import store from './store';


ReactDom.render(
    <Provider store={store}>
        <Home />
    </Provider>
, document.querySelector('#root'));
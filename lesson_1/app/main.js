import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './Component/App';
import store from './store';
//Render
const rootElement=document.getElementById('app');
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    rootElement
);
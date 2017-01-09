import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';
import App from './Components/App';

let rootEle=document.querySelector('#lesson2');
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    rootEle
);
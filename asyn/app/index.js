import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import {Provider} from 'react-redux';
import App from './Components/App';
import {requestList,receiveList,fetchList,addList} from './Actions/actions';

let rootElement=document.getElementById('asyn');
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    rootElement
)
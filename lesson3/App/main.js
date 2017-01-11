import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router,Route,hashHistory} from 'react-router';
import store from './store';
import Index from './Components/Index';
import App from './Components/App';
import About from './Components/About';

let rootEle=document.querySelector('#lesson3');
ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={Index}>
                <Route path="app" component={App}/>
                <Route path="about" component={About}/>
            </Route>
        </Router>
    </Provider>,
    rootEle
);
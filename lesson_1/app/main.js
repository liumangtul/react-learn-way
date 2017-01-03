import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

//Component
import Nav from './Component/Nav';
import Index from './Component/Index';
import App from './Component/App';

import store from './store';
import {Router,Route,hashHistory} from 'react-router';

//Render
const rootElement=document.getElementById('app');

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={Nav}>
                <Route path="/index" component={Index}/>
                <Route path="/app" component={App} />
            </Route>
        </Router>
    </Provider>,
    rootElement
);
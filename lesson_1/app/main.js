import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './Component/App';
import store from './store';
import {Router,Route,hashHistory,Link} from 'react-router';

//Render
const rootElement=document.getElementById('app');

class Nav extends React.Component{
    render(){
        return(
            <div>
                <Link to="/index"> Index </Link>
                <Link to="/app"> App </Link>
                {this.props.children}
            </div>
        )
    }
}

class Index extends React.Component{
    render(){
        return(
            <div>
                <h1>Index Page</h1>
            </div>
        )
    }
}


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
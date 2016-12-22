import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,Link} from 'react-router';

class App extends React.Component{
    render(){
        return
            <div>
                <div>
                    <Link to="/">首页</Link>
                    <Link to="/tv">电视</Link>
                </div>
                {this.props.children}
            </div>
    }
}

class TV extends React.Component{
    render(){
        return
            <div>
                <h1>电视节目列表</h1>
                {this.props.children}
            </div>
    }
}

class Show extends React.Component{
    render(){
        return
            <h3>节目</h3>
    }
}

let rootElement=document.getElementById('app');
ReactDOM.render(
    (<Router>
        <Route path="/" component={App}>
            <Route path="/tv" component={TV}>
                <Route path="shows/:id" component={Show}/>
            </Route>
        </Route>
    </Router>),
    rootElement
)
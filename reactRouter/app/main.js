import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,Link,hashHistory,IndexRoute,Redirect} from 'react-router';

class App extends React.Component{
    render(){
        console.log(this.props.children)
        return(
            <div>
                <div>
                    <Link to="/">首页</Link>
                    <Link to="/tv">电视</Link>
                </div>
                {this.props.children}
            </div>
        )
    }
}

class TV extends React.Component{
    render(){
        return(
            <div>
                <h1>电视节目列表</h1>
                {this.props.children}
            </div>
        )
    }
}

function handleEnter() {
    console.log('onEnter')
}

function handleLeave() {
    console.log('onLeave')
}

class Show extends React.Component{
    constructor(props){
        super(props);
        console.log(this.props.params);
    }
    render(){
        return(
            <h3>节目:{this.props.params.id}</h3>
        )
    }
}

class Home extends React.Component{
    render(){
        return(
            <div>HomeDefault</div>
        )
    }
}
class ShowIndex extends React.Component{
    render(){
        return(
            <div>ShowIndex</div>
        )
    }
}




let rootElement=document.getElementById('app');
ReactDOM.render((
    <Router  history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="/tv" component={TV}
                   onEnter={handleEnter}
                   onLeave={handleLeave}
            >
                <IndexRoute component={ShowIndex}/>
                <Route path="shows/:id" component={Show}/>
                <Redirect from="/shows/:id" to="shows/:id"/>
            </Route>
        </Route>
    </Router>),
    rootElement
);
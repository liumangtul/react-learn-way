/*
import { createStore,combineReducers } from 'redux';
import {connect,Provider} from 'react-redux';

const ADD_TODO='ADD_TODO';

//Reducers
function todos(state=[],action) {
    switch (action.type){
        case ADD_TODO:
            return [
                ...state,
                action.text
            ]
            break;
        default:
            return state;
            break;
    }
}
let reducers=combineReducers({
    todos
});

//actionCreators
function addTodo(text) {
    return {
        type:ADD_TODO,
        text
    }
}

//Store
let store=createStore(reducers);


function mapStateToProps(state) {//传入的state就是redux当前的state，这个是实时自动的（在reducers可以查看到初始的）
    //这里的todos属性就是总props里面的属性字段，跟reducers里的combindReducers的连接同名
    console.log(state)
    return {
        todos:state.todos//这个是返回值todos =>表示的是需要merge进props的state
    }
}
function mapDispatchToProps(dispatch) {
    return {
        actions:bindActionCreators(TodoActions,dispatch)//返回值表示的是 =>需要merge进props的actionCreators，这里的actionCreators应该是已经被包装了dispatch了的，推荐使用redx的bindActionCreator
    }
}
connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
*/

import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,combineReducers,bindActionCreators} from 'redux';
import {Provider,connect} from 'react-redux';

const HELLO='HELLO';

//ActionCreator
function changeHello(text) {
    return {
        type:HELLO,
        text
    }
}

//Reducer
function hello(state='',action) {
    switch (action.type){
        case HELLO:
            return action.text;
        default:
            return state
    }
}
let rootReducer=combineReducers({
    hello
},window.devToolsExtension ? window.devToolsExtension() : undefined);

//Store
let store=createStore(rootReducer);

//Component
class Hello extends React.Component{
    constructor(props){
        super(props);
    }

    handleClick(){
        console.info('handleClick=>state,props',this.state,this.props);
        this.props.changeHello(parseInt(Math.random()*100))
    }

    componentDidMount(){
        this.props.changeHello('Hello React!!')
    }

    render(){
        //不要在render里写改变props或state的语句
        console.info('render=>state,props',this.state,this.props);
        return <div>
            <h1>{this.props.hello}</h1>
            <button onClick={()=>this.handleClick()}>touch me!</button>
        </div>
    }
}

//Connect
function mapStateToProps(state) {
    console.info('mapStateToProps=>state:',state);
    return {
        hello:state.hello
    }
}
function mapDispatchToProps(dispatch,ownProps) {
    console.info('mapDispatchToProps=>dispatch,ownProps,changeHello',dispatch,ownProps,changeHello);
    return bindActionCreators({
        changeHello:changeHello
    },dispatch)
    //return bindActionCreators(changeHello,dispatch)
}
const HelloRedux=connect(mapStateToProps,mapDispatchToProps)(Hello);

//Render
ReactDOM.render(
    <Provider store={store} key="redux">
        <HelloRedux/>
    </Provider>,
    document.getElementById('app')
);
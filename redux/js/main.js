import React from 'react';
import ReactDOM from 'react-dom';


//redux

//initialState
const initialState={
    todos:[]
};

//reducer
const todos=(previousState=initialState,action)=>{
    switch (action.type){
        case 'a':
            break;
        case 'b':
            break;
        default:
            break;
    }
};

import {createStore} from 'redux';
const store = createStore(reducers);//创建store对象
/*
* 包含四个方法
* getState()获取store中当前的状态
* disoatch（action）分发一个action，并返回这个action，这是唯一能改变store中数据的方式
* subscribe（listener）注册一个监听者，他在store发生变化时被调用
* replaceReducer（nextReducer）更新当前sotre里的reducer，一般只会在开发模式调用改方法
* */

/*
* react-redux
* 他提供了一个组件和一个API -帮助react与redux进行绑定
* 1.组件：<Provider/>
* 2.API: connect()
* 关于他们：只需要知道的是，
* 1=><Provider/>接受一个store作为props，他是整个redux应用的顶层组件
* 2=>connect()提供了在整个React应用的任意组件中获取store中数据的功能
* */

/*
* Redux middleware
* */


export default class App extends React.Component{
    constructor(props){
        super(props);
        this.state={};
    }
    render(){
        return <div>
            App
        </div>
    }
}


ReactDOM.render(
    <App/>,
    document.getElementById('app')
)
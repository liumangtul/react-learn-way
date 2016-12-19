

import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,combineReducers,bindActionCreators} from 'redux';
import {Provider,connect} from 'react-redux';

const SHOW_COUNT='SHOW_COUNT';
const ADD_COUNT='ADD_COUNT';
const REMOVE_COUNT='REMOVE_COUNT';

//ActionCreators
function showCount(count) {
    return {
        type:SHOW_COUNT,
        count
    }
}
function addCount(count) {
    return {
        type:ADD_COUNT,
        count
    }
}
function removeCount(count) {
    return {
        type:REMOVE_COUNT,
        count
    }
}

//Reducers
function countReducer(state=0,action) {
    //如果是Object.assgin({},state,...)就报错。
    switch(action.type){
        case SHOW_COUNT:
            return action.count;
        case ADD_COUNT:
            return  action.count+1;
        case REMOVE_COUNT:
            return action.count-1;
        default:
            return state;
    }
}
let rootReducer=combineReducers({
    countReducer
},window.devToolsExtension ? window.devToolsExtension() : undefined);


//Store
let store=createStore(rootReducer);

//Components
class Demo1 extends React.Component{
    constructor(props){
        super(props);
        /*this.state={
            count:0
        }*/
    }

    componentDidMount(){
        this.props.showCount(1)
    }

    handleAddCount(){
        let count=this.props.count;
        this.props.addCount(count);
    }

    handleRemoveCount(){
        this.props.removeCount(this.props.count);
    }

    render(){
        console.log(this.state,this.props)
        return <div>
            <h1>Counter Demo</h1>
            <h2>{this.props.count}</h2>
            <button onClick={()=>this.handleAddCount()}>ADD</button>
            <br/>
            <button onClick={()=>this.handleRemoveCount()}>REMOVE</button>
            <br/>
        </div>
    }
}

//Connect
let mapStateToProps=(state)=>{
    return {
        count:state.countReducer
    }
};
let mapDispatchToProps=(dispatch,ownProps)=>{
    return bindActionCreators({
        showCount:showCount,
        addCount:addCount,
        removeCount:removeCount
    },dispatch)
};
const DemoA=connect(mapStateToProps,mapDispatchToProps)(Demo1);

//Render
const rootElement=document.getElementById('counter');
ReactDOM.render(
    <Provider store={store}>
        <DemoA/>
    </Provider>,
    rootElement
)
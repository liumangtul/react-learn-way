

import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,combineReducers,bindActionCreators} from 'redux';
import {Provider,connect} from 'react-redux';

const SHOW_COUNT='SHOW_COUNT';
const ADD_COUNT='ADD_COUNT';
const REMOVE_COUNT='REMOVE_COUNT';

//ActionCreators
function showCount(name) {
    return {
        type:SHOW_COUNT,
        name
    }
}
function addCount(name) {
    return {
        type:ADD_COUNT,
        name
    }
}
function removeCount(name) {
    return {
        type:REMOVE_COUNT,
        name
    }
}

//Reducers
function countReducer(state=['王岩','流氓兔'],action) {
    //如果是Object.assgin({},state,...)就报错。
    console.log(action)
    switch(action.type){
        case SHOW_COUNT:
            return Object.assign([],state,[
                ...state,
                ...action.name
            ]);
        case ADD_COUNT:
            return  Object.assign([],state,[
                ...state,
                action.name
            ]);
        case REMOVE_COUNT:
            return state.slice(1);
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
    }

    componentDidMount(){
        this.props.showCount(['张三','王五','赵四'])
    }

    handleAddCount(){
        let name='程序猿'+parseInt(Math.random()*100)+'号';
        this.props.addCount(name);
    }

    handleRemoveCount(){
        this.props.removeCount();
    }

    render(){
        console.log(this.state,this.props)
        return <div>
            <h1>Counter Demo</h1>
            <h2>{this.props.name.join(';')}</h2>
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
        name:state.countReducer
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
);
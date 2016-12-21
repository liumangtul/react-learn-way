import React from 'react';
import ReactDOM from 'react-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {requestList,receiveList,fetchList,addList} from '../Actions/actions';
import store from '../store';

class App extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        store.dispatch(addList())
    }

    render(){
        console.log(this.state,this.props,'RENDER')
        let list=this.props.list.map(item=>{
            return (
                <p key={item.name}>{item.name}</p>
            )
        })
        return <div>
            {list}
        </div>
    }
}

export default connect(state=>{
    return {
        list:state.list
    }
},dispatch=>({
    ...bindActionCreators({
        requestList:requestList,
        receiveList:receiveList,
        fetchList:fetchList
    },dispatch)
}))(App);
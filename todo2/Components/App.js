import React from 'react';
import {connect} from 'react-redux';
import UserItem from '../Components/UserItem';
import AddUser from '../Components/AddUser';
import {bindActionCreators} from 'redux';
import {showTodo} from '../Actions/ActionsCreators';

//App Components
class App extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.showTodo([{
            name:'岩',
            age:18
        },{
            name:'朋',
            age:19
        }])
    }
    render(){
        console.log(this.props,'App');
        return <div>
            <UserItem/>
            <AddUser/>
        </div>
    }
}

export default connect(state=>({
    list:state.todoList
}),dispatch=>({
    ...bindActionCreators({
        showTodo:showTodo
    },dispatch)
}))(App);
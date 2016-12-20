import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {addTodo} from '../Actions/ActionsCreators';

//添加用户Component
class AddUser extends React.Component{

    handleAddTodo(name,age){
        this.props.addTodo({
            name:name,
            age:age
        });
        this.refs.Name.value='';
        this.refs.Age.value='';
    }

    render(){
        console.log(this.props,'AddUser');
        return <div>
            <input type="text" placeholder="Name" ref="Name"/>
            <input type="number" placeholder="Age" ref="Age"/>
            <button onClick={()=>this.handleAddTodo(this.refs.Name.value,this.refs.Age.value)}>ADD</button>
        </div>
    }
}
export default connect(state=>({
    list:state.todoList
}),dispatch=>({
    ...bindActionCreators({
        addTodo:addTodo
    },dispatch)
}))(AddUser);
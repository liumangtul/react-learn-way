import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {delTodo,editTodo} from '../Actions/ActionsCreators';

//用户信息Component
class UserItem extends React.Component{

    handleDelTodo(name){
        this.props.delTodo(name);
    }

    handleEditTodo(name,editName){
        this.props.editTodo(name,editName);
    }

    render(){
        console.log(this.props,'UserItem');
        let userList=[];
        if(this.props.list.length>0){
            userList=this.props.list.map( (item)=> {
                return(
                    <li key={item.name} ref={item.name} name={item.name}>
                        姓名:{item.name},年龄:{item.age}岁;
                        <span onClick={()=>this.handleDelTodo(this.refs[item.name].getAttribute('name'))}>DEL</span>
                        <span onClick={()=>this.handleEditTodo(this.refs[item.name].getAttribute('name'),this.refs['edit_'+item.name].value)}>EDIT</span>
                        <input type="text" placeholder="EDIT" ref={'edit_'+item.name}/>
                    </li>
                )
            });
            return <ul>
                {userList}
            </ul>;
        }else{
            return <h1>暂无数据</h1>
        }
    }
}
export default connect(state=>({
    list:state.todoList
}),dispatch=>({
    ...bindActionCreators({
        delTodo:delTodo,
        editTodo:editTodo
    },dispatch)
}))(UserItem);
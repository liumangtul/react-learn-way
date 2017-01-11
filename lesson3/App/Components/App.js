import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {userList,addUser,removeUser,editUser} from '../Actions/userList';
import {style} from '../style/style';

class App extends React.Component{
    constructor(props){
        super(props);
        this.handleAdd=this.handleAdd.bind(this);
    }

    componentDidMount(){
        this.props.userList(0);
    }

    handleAdd(e){
        let user={
            name:this.refs.name.value,
            age:this.refs.age.value
        };
        this.props.addUser(1,user)
    }

    handleEdit(index,e){
        let name=this.refs.name.value;
        let age=this.refs.age.value;
        if(/^\s+$/.test(name) || /^\s+$/.test(age) || name==='' || age===''){
            alert('不能为空')
            return;
        }
        let userId=this.refs.userListBox.querySelectorAll('tbody tr')[index].getAttribute('data-tid');
        this.props.editUser(0,{
            name:this.refs.name.value,
            age:this.refs.age.value
        },userId,index)
    }

    handleRemove(ind,e){
        let userId=this.refs.userListBox.querySelectorAll('tbody tr')[ind].getAttribute('data-tid');
        this.props.removeUser(0,ind,userId);
    }

    render(){
        console.info(this.props)
        let userList=this.props.data.list.map((item,ind)=>{
            return(
                <tr key={item.id} data-tid={item.id}>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                    <td>
                        <div>
                            <button onTouchEnd={this.handleEdit.bind(this,ind)}>EDIT</button>
                            <button onTouchEnd={this.handleRemove.bind(this,ind)}>REMOVE</button>
                        </div>
                    </td>
                </tr>
            )
        });
        return(
            <section>
                <button onTouchEnd={this.handleAdd}>NEW</button>
                <table style={style.tr} ref="userListBox">
                    <thead>
                        <tr>
                            <td>Name</td>
                            <td>Age</td>
                            <td>Edit</td>
                        </tr>
                    </thead>
                    <tbody>
                       {userList}
                    </tbody>
                </table>
                <div>
                    <label>Name:<input type="text" ref="name"/></label>
                    <label>Age:<input type="text" ref="age"/></label>
                </div>
            </section>
        )
    }
}

export default connect(state=>({
    data:state.userList
}),dispatch=>({
    ...bindActionCreators({
        addUser:addUser,
        removeUser:removeUser,
        editUser:editUser,
        userList:userList
    },dispatch)
}))(App);
import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {userList} from '../Actions/userList';
import {style} from '../style/style';
import $ from 'n-zepto';

class App extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.userList([
            {
                id:1,
                name:'wangYan',
                age:'18'
            },{
                id:2,
                name:'liPeng',
                age:'19'
            }
        ])
    }

    handleAdd(){
        alert('add')
    }

    handleEdit(e,obj){
        let userId=$(e.target).parents('tr').attr('data-tid');
        console.log(e,obj,this)
        alert('edit')
    }

    handleRemove(e){
        let userId=$(e.target).parents('tr').attr('data-tid');
        alert('remove'+'|->userId:'+userId)
    }

    render(){
        console.log(this.props)
        let userList=this.props.data.list.map((item,key)=>{
            return(
                <tr key={item.id} data-tid={item.id}>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                    <td>
                        <div>
                            <button onTouchEnd={this.handleEdit.bind(this)}>EDIT</button>
                            <button onTouchEnd={this.handleRemove}>REMOVE</button>
                        </div>
                    </td>
                </tr>
            )
        });
        return(
            <section>
                <button onTouchEnd={this.handleAdd}>NEW</button>
                <table style={style.tr}>
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
            </section>
        )
    }
}

export default connect(state=>({
    data:state.userList
}),dispatch=>({
    ...bindActionCreators({
        userList:userList
    },dispatch)
}))(App);
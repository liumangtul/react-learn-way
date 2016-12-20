import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,combineReducers,bindActionCreators} from 'redux';
import {Provider,connect} from 'react-redux';

const ADD_TODO='ADD_TODO';
const DEL_TODO='DEL_TODO';
const SHOW_TODO='SHOW_TODO';
const EDIT_TODO='EDTI_TODO';

//ActionCreators
function addTodo(item) {
    return {
        type:ADD_TODO,
        list:item
    }
}
function delTodo(item) {
    return {
        type:DEL_TODO,
        list:item
    }
}
function showTodo(item) {
    return {
        type:SHOW_TODO,
        list:item
    }
}
function editTodo(name,editName) {
    return {
        type:EDIT_TODO,
        name:name,
        editName:editName
    }
}

//Reducers
function todoList(state=[],action) {
    switch (action.type){
        case SHOW_TODO:
            return Object.assign([],state,[
                ...state,
                ...action.list
            ]);
        case ADD_TODO:
            return Object.assign([],state,[
                ...state,
                action.list
            ]);
        case DEL_TODO:
            {
                let index=state.findIndex((obj)=>obj.name==action.list);
                let newList=Object.assign([],state,{
                    ...state
                });
                newList.splice(index,1);
                return newList;
            }
        case EDIT_TODO:
            {
                console.log(action)
                let index=state.findIndex((obj)=>obj.name==action.name);
                let item=state.find((obj)=>obj.name==action.name);
                let newList=Object.assign([],state,[
                    ...state
                    ]
                );
                newList[index]['name']=action.editName;
                return newList;
            }
        default:
            return state;
    }
}
let rootReducers=combineReducers({
    todoList
});

//Store
let store=createStore(rootReducers);

//Components
class App extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.showTodo([{
            name:'Yan',
            age:18
        },{
            name:'Peng',
            age:19
        }])
    }
    render(){
        console.log(this.props,'App');
        return <div>
            <UserItemConnect/>
            <AddUserConnect/>
        </div>
    }
}
let AppConnect=connect(state=>({
    list:state.todoList
}),dispatch=>({
    ...bindActionCreators({
        showTodo:showTodo
    },dispatch)
}))(App);

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
let UserItemConnect=connect(state=>({
    list:state.todoList
}),dispatch=>({
    ...bindActionCreators({
        delTodo:delTodo,
        editTodo:editTodo
    },dispatch)
}))(UserItem);

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
let AddUserConnect=connect(state=>({
    list:state.todoList
}),dispatch=>({
    ...bindActionCreators({
        addTodo:addTodo
    },dispatch)
}))(AddUser);

//Connect
//merge state(Redux) to Props(React)
/*let mapStateToProps=(state)=>{
    return {
        list:state.todoList
    }
};
//merge ActionCreator(Redux) to Props(React)
let mapDispatchToProps=(dispatch)=>{
    return bindActionCreators({
        showTodo:showTodo
    },dispatch)
};*/

//Render
const rootElement=document.getElementById('todo');
ReactDOM.render(
    <Provider store={store}>
        <AppConnect/>
    </Provider>,
    rootElement
);
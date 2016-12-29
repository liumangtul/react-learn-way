import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {showTodo} from '../Action/actionCreator';

class App extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.showTodo([{
            id:1,
            title:'Node',
            content:'噼里啪啦。。。'
        },{
            id:2,
            title:'Angular',
            content:'哔哩哔哩，小熊熊。。。'
        },{
            id:3,
            title:'React',
            content:'View Home FackBook Youtube。。。'
        }])
    }

    render(){
        let articleList=this.props.list.map((item,key)=>{
                return (
                    <li key={item.id}>
                        <h3><strong>{key+1}.</strong>{item.title}</h3>
                        <article>
                            <p>{item.content}</p>
                        </article>
                    </li>
                )
            })
        return <div>
            {articleList}
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
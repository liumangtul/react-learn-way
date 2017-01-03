import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchPosts} from '../Action/actionCreator';

class App extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchPosts();
    }

    render(){
        let articleList=this.props.data.items.map((item,key)=>{
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
    data:state.todoList
}),dispatch=>({
    ...bindActionCreators({
        fetchPosts:fetchPosts
    },dispatch)
}))(App);
import React from 'react';
import Comment from './Comment';

class CommentList extends React.Component{
    render(){
        let commentNodes=this.props.data.map(comment=>{
            return(
                <Comment name={comment.name} text={comment.text} key={comment.name}></Comment>
            )
        })
        return(
            <div>
                {commentNodes}
            </div>
        )
    }
}

export { CommentList as default};
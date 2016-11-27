import React from 'react';
import CommentList from './CommentList';
import CommentForm from './CommentForm';

class CommentBox extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:[]
        };
        var _this=this;
        setTimeout(function () {
            _this.setState({data:[
                {
                    name:'yan',
                    text:'pilipala'
                },{
                    name:'peng',
                    text:'piu,.sfiwjeofjw'
                }
            ]})
        },1000);
    }

    handleCommentSubmit(comment){
        console.log(comment)
    }
    render(){
        return (
            <div className="commentBox">
                <h1>评论：</h1>
                <div className="commentChild">
                    <CommentList data={this.state.data}></CommentList>
                    <CommentForm onCommentSubmit={this.handleCommentSubmit}></CommentForm>
                </div>
            </div>
        );
    }
}

export {CommentBox as default};
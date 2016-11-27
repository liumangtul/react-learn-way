import React from 'react';

class CommentForm extends React.Component{
    handleSubmit(e){
        let name='testTitle',
            text='testTet';
        this.props.onCommentSubmit({name,text})
    }

    render(){
        return(
            <div>
                <div>
                    name: <input type="text" placeholder="NAME"/>
                </div>
                <div>
                    talk: <textarea cols="30" rows="10"></textarea>
                </div>
                <div>
                    <button onClick={this.handleSubmit.bind(this)}>提交评论</button>
                </div>
            </div>
        )
    }
}

export {CommentForm as default};
import React from 'react';

class Comment extends React.Component{
    render(){
        return(
            <div className="comment">
                <div className="author">{this.props.name}</div>
                <div className="text">{this.props.text}</div>
            </div>
        )
    }
}

export {Comment as default};
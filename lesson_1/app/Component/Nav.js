import React from 'react';
import {Link} from 'react-router';

export default class Nav extends React.Component{
    render(){
        return(
            <div>
                <Link to="/index"> Index </Link>
                <Link to="/app"> App </Link>
                {this.props.children}
            </div>
        )
    }
}
import React from 'react';
import {Link} from 'react-router';
import {style} from '../style/style';

export default class NavBar extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div style={style.navBar}>
                <Link style={style.navBar.Link} to="/app">APP</Link>
                <Link style={style.navBar.Link} to="/about">ABOUT</Link>
            </div>
        )
    }
}
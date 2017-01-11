import React from 'react';
import {style} from '../style/style';

export default class Footer extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div style={style.Footer}>
                <h1 style={style.Footer.h1}>Footer</h1>
            </div>
        )
    }
}
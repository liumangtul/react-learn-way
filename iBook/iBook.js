import React,{Component} from 'react';
import {reactDOM} from 'react-dom';

class Hello extends Component{
    render(){
        return <div>{this.props.name}</div>
    }
}
reactDOM.render(
    <Hello/>,document.getElementById('app')
);

import React from 'react';
import ReactDOM from 'react-dom';

class Hello extends React.Component{
    render(){
        return <div>
            <h1>HELLO React!!!!</h1>
            <input type="text"/>
        </div>
    }
}

ReactDOM.render(<Hello/>,document.getElementById('hello'));
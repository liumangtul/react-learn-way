import React from 'react';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';

export default class Index extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <NavBar/>
                {this.props.children}
                <Footer/>
            </div>
        )
    }
}
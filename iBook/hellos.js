import React from 'react';
import {findDOMNode} from 'react-dom';
class Hello extends React.Component{
    constructor(props){ 
        super(props);
        this.state={
            like:'电脑游戏'
        }
    }

    handleCLick(a,b,event){
        this.setState({like:'全境封锁'});
        console.log(a,b,event)
    }

    componentWillMount(){
            console.log(`componentWillMount:
            只会在装载之前调用一次，
            在 render 之前调用，
            你可以在这个方法里面调用 setState 改变状态，
            并且不会导致额外调用一次 render`)
    }

    componentDidMount(){
        //组件的dom
        console.log(findDOMNode(this))
        //组件内的refs访问dom元素
        console.log('组件内的refs访问dom元素',this.refs.test)
        this.refs.test.innerHTML='test';

        console.log(`componentDidMount:
            只会在装载完成之后调用一次，
        在 render 之后调用，
        从这里开始可以通过 ReactDOM.findDOMNode(this) 获取到组件的 DOM 节点。`)
    }


    render(){
        return <div>我叫{this.props.name},今年{this.props.age}岁。我喜欢{this.state.like} <button onClick={this.handleCLick.bind(this,'A',this.state)}>button</button><div ref="test"></div><div ref="test"></div></div>
    }
}
export {Hello};


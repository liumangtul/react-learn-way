import React from 'react'
import { connect } from 'react-redux'
//请注意这里面引入了action
import {increaseAction} from '../redux/action'
let {Component,PropTypes}  = React
class Index extends Component{
    //这一步是检查传入的各个prop类型是否正确
    ProTypes = {
        count:PropTypes.number.isRequired,
    }
    constructor(props){
        super(props)
    }
    handleClick(){
        /*
         这一步输入this.props可以看到，其实里面有两个东西
         在下面的render里面我们用到了this.props.count这个
         那么这里我们要用到dispatch
         */
        console.log(this.props)
        let {dispatch} = this.props
        //粗暴简单的使用
        dispatch(increaseAction)
    }
    render(){
        let {count} = this.props
        return <div onClick = {this.handleClick.bind(this)}  style={styles.circle}>{count}</div>
    }
}
//样式文件，不用细看
let styles = {
    circle:{
        width:'100px',
        height:'100px',
        position:'absolute',
        left:'50%',
        top:'50%',
        margin:'-50px 0 0 -5px',
        borderRadius:'50px',
        fontSize:'60px',
        color:'#545454',
        backgroundColor:'#fcfcfc',
        lineHeight:'100px',
        textAlign:'center',
    }
}
export default Index
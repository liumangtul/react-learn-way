import React from 'react'
import { createStore } from 'redux'
import { Provider,connect } from 'react-redux'

//这个index.js文件会在在下一步创建
import Index from '../component/index'
import reducers from '../redux/reducer'

//创建store
let store = createStore(reducers);
/*
 mapStateToProps你可以理解成在下面connect的时候为组件提供一个props，这个props的值是redux的state
 */
let mapStateToProps = (state) =>{
    return {count:state.count}
}
//连接你的state和最外层的组件
let Content = connect(mapStateToProps)(Index)

let {Component} = React

//使用Provider来把新的App组件打包出来
class App extends Component{
    render(){
        return <Provider store={store}><Content /></Provider>
    }
}

export default App
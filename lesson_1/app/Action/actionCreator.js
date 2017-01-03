import fetch from 'isomorphic-fetch';
import 'babel-polyfill'

const REQUEST_TODO="REQUEST_TODO";
const RECEVIE_TODO="RECEVIE_TODO";

/*同步actionCreator*/
//开始请求todo时
function requestTodo(state) {
    console.log('开始请求');
    return {
        type:REQUEST_TODO,
        state
    }
}

//收到请求todo时
function receiveTodo(json) {
    console.log('收到请求');
    return {
        type:RECEVIE_TODO,
        items:json
    }
}

/*异步actionCreator*/
//处理请求Fetch
function fetchPosts() {

    return (dispatch)=> {

        //开始请求todo
        dispatch(requestTodo('load...'));

        //fetch API 需要深入研究
        return fetch(`/json.json`)
            .then(response=>{
                if(response.status==404){
                    console.error('请求404错误！')
                }
                return response.json()
            })
            .then(json=>dispatch(receiveTodo(json.result)));
        //尚未设计failure的情况
    }
}

export {REQUEST_TODO,RECEVIE_TODO,requestTodo,receiveTodo,fetchPosts};
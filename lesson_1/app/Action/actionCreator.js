import fetch from 'isomorphic-fetch';
import 'babel-polyfill'

const REQUEST_TODO="REQUEST_TODO";
const RECEVIE_TODO="RECEVIE_TODO";

/*同步actionCreator*/
//开始请求todo时
function requestTodo(state) {
    return {
        type:REQUEST_TODO,
        state
    }
}

//收到请求todo时
function receiveTodo(state,json) {
    return {
        type:RECEVIE_TODO,
        state,
        items:json
    }
}

/*异步actionCreator*/
//处理请求Fetch
function fetchPosts(state) {

    return (dispatch)=> {

        //开始请求todo
        dispatch(requestTodo(state));

        //fetch API 需要深入研究
        return fetch(`/json.json`)
            .then(response=>{
                if(response.status==404){
                    console.error('请求404错误！')
                }
                return response.json()
            })
            .then(json=>dispatch(receiveTodo(1,json.result)));
        //尚未设计failure的情况
    }
}

export {REQUEST_TODO,RECEVIE_TODO,requestTodo,receiveTodo,fetchPosts};
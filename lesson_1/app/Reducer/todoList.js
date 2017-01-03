import {REQUEST_TODO,RECEVIE_TODO} from '../Action/actionCreator';

function todoList(state={
    isLoaded:true,
    items:[]
},action) {
    switch (action.type){
        //开始请求todo
        case REQUEST_TODO:
            return Object.assign({},state,{
                isLoaded:true
            })
        //收到请求todo
        case RECEVIE_TODO:
            return Object.assign({},state,{
                isLoaded:false,
                items:action.items
            })
        default:
            return state;
    }
}
export {todoList};
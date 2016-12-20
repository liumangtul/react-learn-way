import {ADD_TODO,DEL_TODO,SHOW_TODO,EDIT_TODO}  from './liang';
//ActionCreators
function addTodo(item) {
    return {
        type:ADD_TODO,
        list:item
    }
}
function delTodo(item) {
    return {
        type:DEL_TODO,
        list:item
    }
}
function showTodo(item) {
    return {
        type:SHOW_TODO,
        list:item
    }
}
function editTodo(name,editName) {
    return {
        type:EDIT_TODO,
        name:name,
        editName:editName
    }
}

export {addTodo,delTodo,showTodo,editTodo};
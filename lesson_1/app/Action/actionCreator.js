import {SHOW_TODO} from '../Reducer/todoList';

function showTodo(item) {
    return {
        type:SHOW_TODO,
        item
    }
}
export {showTodo};
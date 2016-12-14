//Action
/*
* Action
 就如之前提到的，action 是一个描述事件的简单对象，
 它是改变 store 中 state 的唯一方法，
 它通过 store.dispatch() 方法来将 action 传到 store 中。
 */

//下面就是一个 action 的例子，它表示添加一个新的 todo 项。
/*const ADD_TODO = 'ADD_TODO'
// action
{
    type: ADD_TODO,
        text: 'Build my first Redux app'
}*/
//可以看到 action 就是一个简单的 JavaScript 对象。
//用一个字符串类型的 type 字段来表示将要执行的动作，type 最好用常量来定义，当应用扩大时，可以使用单独的模块来存放 action。

//在现实场景中，action 所传递的值很少会是一个固定的值，都是动态产生的。所以，要为每个 action 创建它的工厂方法，工厂方法返回一个 action 对象。

//上面的那个例子就会变为：
function addTodo(text) {
    return {
        type: ADD_TODO,
        text
    }
}

/*
* Reducer
 Action 只是一个描述事件的简单对象，并没有告诉应用该如何更新 state，
 而这正是 reducer 的工作。
 */

const initialState = {
    todos: []
}
// todos reducer
let todos = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    text: action.text,
                    completed: false
                }
            ]
        case TOGGLE_TODO:
            return state.map((todo, index) => {
                if (index === action.index) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    } // 时刻谨记不要修改 state，保证 reducer 是纯函数
                }
                return todo
            })
        default:
            return state
    }
}


// main reducer
const todoApp = combineReducers({
    todos // 等价于 todos: todos(state.todos, action)
})

/*
*
* Store
 Store 用来存放整个应用的 state，并将 action 和 reducer 联系起来。它主要有以下几个职能：

 存储整个应用的 state
 提供 getState() 方法获取 state
 提供 dispatch(action) 方法更新 state
 提供 subscribe(listener) 来注册、取消监听器

 */

/*
* 根据已有的 reducer 来创建 store 非常容易，只需将 reducer 作为参数传递给 createStore() 方法。
* */
import { createStore } from 'redux'
import todoApp from './reducers'
let store = createStore(todoApp)

//这样，整个应用的 store 就创建完成了。虽然还没有界面，但我们已经可以测试数据处理逻辑了。

import { addTodo, toggleTodo } from './actions'

// 打印初始状态
console.log(store.getState())

// 注册监听器，在每次 state 更新时，打印日志
const unsubscribe = store.subscribe(() =>
    console.log(store.getState())
)

// 发起 actions
store.dispatch(addTodo('Learn about actions'))
store.dispatch(addTodo('Learn about reducers'))
store.dispatch(addTodo('Learn about store'))
store.dispatch(actions.toggleTodo(0))
store.dispatch(actions.toggleTodo(1))

// 停止监听
unsubscribe();
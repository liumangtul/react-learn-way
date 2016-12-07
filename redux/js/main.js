import {createStore} from 'redux';

const initialState={
    todos:[]
};
function todos(previousState=initialState,action) {
    switch(action.type){
        case 'XXX':
            //return XXX
            break;
        default:
            return previousState;
    }
}

const store=createStore(reducers);

//store.getState();
//store.dispatch(action);分发action，并返回这个action，这是唯一能改变store中数据的方式
//store.subscribe(listener)注册一个监听者，他在store发生变化时被调用；
//replaceReducer(nextReducer);更新当前store里的reducer，一般只会在开发模式中调用改方法
/*
* 最常用的时getState和dispatch这个两个方法。
* subscribe 和replaceReducer 与react桥接时会用；
* */
import {createStore,applyMiddleware} from 'redux';
import rootReducer from './Reducer/rootReducer';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

export default createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware,//允许我们dispatch()函数
        createLogger()//用于打印action日志
    )
);
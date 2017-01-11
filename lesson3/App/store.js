import {createStore,applyMiddleware} from 'redux';
import rootReducer from './Reducers/rootReducer';
import thunkMiddelware from 'redux-thunk';
import createLogger from 'redux-logger';

export default createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddelware,
        createLogger()
    )
);
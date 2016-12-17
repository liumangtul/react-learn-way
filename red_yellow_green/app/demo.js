import {createStore} from 'redux';
import {changeGreen, changeYellow, changeRed} from './actions';
import lightReducer from './reducers';

import {connect} from 'react-redux';

let store = createStore(lightReducer);

/*
let unsubscribe = store.subscribe(() =>
    console.log(store.getState())
);

store.dispatch(changeGreen());
store.dispatch(changeYellow());
store.dispatch(changeRed());

*/

class Hello extends React.Component{
    render(){
        return <div>
            <h1>HELLO React!!!!</h1>
            <input type="text"/>
        </div>
    }
}



const mapStateToProps = (state,props) => {
    return {
        count: 1
    }
}

/*const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch({
                type: 'SET_VISIBILITY_FILTER',
                filter: ownProps.filter
            });
        }
    };
};*/
const mapDispatchToProps = {
    onClick: (filter) => {
        return {
            type: 'CHANGE_RED'
        }
    }
}


const VisibleTodoList = connect(
    mapStateToProps,//输入逻辑 将state映射到 UI 组件的参数（props）
    mapDispatchToProps//输出逻辑 将用户对 UI 组件的操作映射成 Action
)(Hello)

ReactDOM.render(
    <Provider store={store}>
        <Hello/>
    </Provider>,
    document.getElementById('app')
);
import {REQUEST_LIST,RECEIVE_LIST,requestList,receiveList,fetchList,addList} from '../Actions/actions';

export default function list(state=[],action) {
    switch (action.type){
        case RECEIVE_LIST:
            return Object.assign([],state,[
                ...state,
                ...action.list
            ]);
        default:
            return state;
    }
}
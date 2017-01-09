import {USER_LIST} from '../Actions/userList';

export default function userList (state={
    list:[]
},action) {
    switch (action.type){
        case USER_LIST:
            return Object.assign({},state,{
                list:action.list
            });
        default:
            return state;
    }
}
import {
    REQUEST_LIST,
    RECEVIE_LIST,

    REQUEST_ADD_USER,
    RECEVIE_ADD_USER,

    REQUEST_REMOVE_USER,
    RECEVIE_REMOVE_USER,

    REQUEST_EDIT_USER,
    RECEVIE_EDIT_USER
} from '../Actions/userList';

export default function userList (state={
    list:[],
    user:{},
    index:null
},action) {
    switch (action.type){
        //User -> List
        case REQUEST_LIST:
            return Object.assign({},state,{
                state:1
            });
        case RECEVIE_LIST:
            return Object.assign({},state,{
                state:2,
                list:action.list
            });

        //User -> Add
        case REQUEST_ADD_USER:
            return Object.assign({},state,{
                state:1
            });
        case RECEVIE_ADD_USER:
            return Object.assign({},state,{
                list:[
                    ...state.list,
                    action.user
                ]
            });

        //User -> Remove
        case REQUEST_REMOVE_USER:
            return Object.assign({},state,{
                state:1
            });
        case RECEVIE_REMOVE_USER:
            if(action.status==1){
                let list1=Object.assign([],state.list);
                list1.splice(action.index,1);
                return Object.assign({},state,{
                    list:list1
                });
            }else{
                alert('删除失败');
                return state;
            }

        //User -> Edit
        case REQUEST_EDIT_USER:
            return Object.assign({},state,{
                state:1
            });
        case RECEVIE_EDIT_USER:
            let list=Object.assign([],state.list);
            action.user.id=list[action.index].id;
            let user=action.user;
            list.splice(action.index,1,user);
            console.log(list,'list')
            return Object.assign({},state,{
                state:2,
                list:list
            });

        default:
            return state;
    }
}
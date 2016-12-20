import {ADD_TODO,DEL_TODO,SHOW_TODO,EDIT_TODO} from '../Actions/liang';
//Reducers
export default function todoList(state=[],action) {
    switch (action.type){
        case SHOW_TODO:
            return Object.assign([],state,[
                ...state,
                ...action.list
            ]);
        case ADD_TODO:
            return Object.assign([],state,[
                ...state,
                action.list
            ]);
        case DEL_TODO:
        {
            let index=state.findIndex((obj)=>obj.name==action.list);
            let newList=Object.assign([],state,{
                ...state
            });
            newList.splice(index,1);
            return newList;
        }
        case EDIT_TODO:
        {
            console.log(action)
            let index=state.findIndex((obj)=>obj.name==action.name);
            let item=state.find((obj)=>obj.name==action.name);
            let newList=Object.assign([],state,[
                    ...state
                ]
            );
            newList[index]['name']=action.editName;
            return newList;
        }
        default:
            return state;
    }
}
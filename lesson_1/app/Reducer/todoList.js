const SHOW_TODO="SHOW_TODO";

function todoList(state=[],action) {
    switch (action.type){
        case SHOW_TODO:
            return Object.assign([],state,[
                ...action.item
            ])
        default:
            return state;
    }
}
export {todoList,SHOW_TODO};
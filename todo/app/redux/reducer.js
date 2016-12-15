let reducer = (state={count:0},action)=>{
    let count = state.count;
    switch(action.type){
        case 'increase':
            return {count:count+1};
            break;
        default:
            return state;
            break;
    }
}
export default reducer
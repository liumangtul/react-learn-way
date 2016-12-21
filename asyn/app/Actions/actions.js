import fetch from 'isomorphic-fetch';
import 'babel-polyfill'

//请求list
const REQUEST_LIST='REQUEST_LIST';
function requestList(state) {
    return {
        type:REQUEST_LIST,
        state
    }
}

//收到list
const RECEIVE_LIST='RECEIVE_LIST';
function receiveList(list,json) {
    console.log(list,json,'ACTION')
    return {
        type:RECEIVE_LIST,
        list:json
    }
}

//asyn Action-thunk Action
function fetchList(list) {
    return dispatch=> {
        dispatch(requestList('laod'));

        return fetch('/json.txt')
            .then(response => response.json())
            .then(json =>dispatch(receiveList(list, json.result)))
    }
}

function addList(list) {
    return dispatch=>{
        return dispatch(fetchList(list))
            .then(res=>{
                console.log(res,'res___________');
                return res.list;
            })
    }
}


export {REQUEST_LIST,RECEIVE_LIST,requestList,receiveList,fetchList,addList}
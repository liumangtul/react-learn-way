import fetch from 'isomorphic-fetch';
import 'babel-polyfill'

const REQUEST_ADD_USER='REQUEST_ADD_USER';
const RECEVIE_ADD_USER='RECEVIE_ADD_USER';

const REQUEST_EDIT_USER='REQUEST_EDIT_USER';
const RECEVIE_EDIT_USER='RECEVIE_EDIT_USER';

const REQUEST_REMOVE_USER='REQUEST_REMOVE_USER';
const RECEVIE_REMOVE_USER='RECEVIE_REMOVE_USER';

const REQUEST_LIST='REQUEST_LIST';
const RECEVIE_LIST='RECEVIE_LIST';

//User -> Add
function requestAddUser(state) {
    return {
        type:REQUEST_ADD_USER,
        state
    }
}
function recevieAddUser(state,user,info) {
    return {
        type:RECEVIE_ADD_USER,
        state,
        user:{
            id:user.userId,
            name:info.name,
            age:info.age
        }
    }
}
function addUser(state,info) {
    return dispatch=>{
        dispatch(requestAddUser(state))

        return fetch('../../addUser.json')
            .then(response=>response.json())
            .then(json=>dispatch(recevieAddUser(1,json.result,info)));
    }
}

//User -> Remove
function requestRemoveUser(state) {
    return {
        type:REQUEST_REMOVE_USER,
        state
    }
}
function recevieRemoveUser(state,json,index) {
    return {
        type:RECEVIE_REMOVE_USER,
        index,
        status:json.state
    }
}
function removeUser(state,index,userId) {
    alert('userId:'+userId);
    return dispatch=>{
        dispatch(requestRemoveUser(state))

        return fetch('../../removeUser.json')
            .then(response=>response.json())
            .then(json=>dispatch(recevieRemoveUser(1,json,index)))
    }
}


//User -> Edit
function requestEditUser(state) {
    return {
        type:REQUEST_EDIT_USER,
        state
    }
}
function recevieEditUser(state,user,userId,index) {
    return {
        type:RECEVIE_EDIT_USER,
        user:{
            name:user.name,
            age:user.age,
            id:userId
        },
        index
    }
}
function editUser(state,user,userId,index) {
    return dispatch=>{
        dispatch(requestEditUser(state))

        return fetch('../../editUser.json')
            .then(response=>response.json())
            .then(json=>dispatch(recevieEditUser(1,user,userId,index)))
    }
}

//User -> List
function requestList(state) {
    return {
        type:REQUEST_LIST,
        state
    }
}

function recevieList(state,list) {
    return {
        type:RECEVIE_LIST,
        state,
        list
    }
}

function userList(state) {
    return dispatch=>{
            dispatch(requestList(state));

        return fetch('../../userList.json')
            .then(response=>{
                console.log(response);
                return response.json()
            })
            .then(json=>dispatch(recevieList(1,json.result)));
    }
}

export {
    REQUEST_LIST,
    RECEVIE_LIST,

    REQUEST_ADD_USER,
    RECEVIE_ADD_USER,

    REQUEST_REMOVE_USER,
    RECEVIE_REMOVE_USER,

    REQUEST_EDIT_USER,
    RECEVIE_EDIT_USER,

    addUser,
    removeUser,
    editUser,
    userList
};
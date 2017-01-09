const USER_LIST='USER_LIST';

function userList(list) {
    return {
        type:USER_LIST,
        list
    }
};

export {USER_LIST,userList};
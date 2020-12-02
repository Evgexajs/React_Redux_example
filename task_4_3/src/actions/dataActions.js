import { USER, TODOLIST, POSTSLIST } from './actionTypes'

export function usersFetchDataSuccess(users) {
    return {
        type: USER,
        users
    };
};

export function usersFetchData(url) {
    return (dispatch) => {
        fetch(url)
            .then(response => {
                if(!response.ok) {
                    throw new Error(resonse.statusText)
                }
                return response;
            })
            .then(response => response.json())
            .then(users => dispatch(usersFetchDataSuccess(users)))
    };
};

export function todosFetchDataSuccess(todos) {
    return {
        type: TODOLIST,
        todos
    };
};

export function todosFetchData(url) {
    return (dispatch) => {
        fetch(url)
            .then(response => {
                if(!response.ok) {
                    throw new Error(resonse.statusText)
                }
                return response;
            })
            .then(response => response.json())
            .then(todos => dispatch(todosFetchDataSuccess(todos)))
    };
};

export function postsFetchDataSuccess(posts) {
    return {
        type: POSTSLIST,
        posts
    };
};

export function postsFetchData(url) {
    return (dispatch) => {
        fetch(url)
            .then(response => {
                if(!response.ok) {
                    throw new Error(resonse.statusText)
                }
                return response;
            })
            .then(response => response.json())
            .then(posts => dispatch(postsFetchDataSuccess(posts)))
    };
};
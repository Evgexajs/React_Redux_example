import { USER } from './actionTypes'

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
import { TODOLIST } from './actionTypes'

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
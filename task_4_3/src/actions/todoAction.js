import { TODOLIST } from './actionTypes'
import axios from 'axios';

export function todosFetchDataSuccess(todos) {
    return {
        type: TODOLIST,
        todos
    };
};

export function todosFetchData() {
    return (dispatch) => {        
        axios.get("https://jsonplaceholder.typicode.com/todos")
        .then(response =>{
            const todos = response.data
            dispatch(todosFetchDataSuccess(todos))
        })
        .catch(error => {
            const errorMsg = error.message
            dispatch(fetchFailure(errorMsg))
        })
    };
};
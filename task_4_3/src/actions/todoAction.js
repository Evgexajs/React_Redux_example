import { TODOLIST, ERROR } from './actionTypes'
import axios from 'axios';

export function todosFetchData() {
    return (dispatch) => {        
        axios.get("https://jsonplaceholder.typicode.com/todos")
        .then(response =>{
            const todos = response.data
            dispatch({
                type: TODOLIST,
                todos
            })
        })
        .catch(error => {
            const errors = error.message
            dispatch({
                type: ERROR,
                errors
            })
        })
    };
};
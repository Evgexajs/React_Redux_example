import { USERTODOS, ERROR } from '../actionTypes'
import axios from 'axios';

export function userTodosFetchData(userId) {
    return (dispatch) => {
        axios.get("https://jsonplaceholder.typicode.com/users/" + userId + "/todos")
        .then(response =>{
            const userTodos = response.data
            dispatch({
                type: USERTODOS,
                userTodos
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
import { USER, ERROR } from './actionTypes'
import axios from 'axios';

export function userFetchData(userId) {
    return (dispatch) => {        
        axios.get("https://jsonplaceholder.typicode.com/users/" + userId)
        .then(response =>{
            const user = response.data
            dispatch({
                type: USER,
                user
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
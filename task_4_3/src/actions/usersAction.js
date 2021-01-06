import { USERS, ERROR } from './actionTypes'
import axios from 'axios';

export function usersFetchData() {    
    return (dispatch) => {        
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(response =>{
            const users = response.data
            dispatch({
                type: USERS,
                users
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
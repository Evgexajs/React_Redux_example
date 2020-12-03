import { USER } from './actionTypes'
import axios from 'axios';

export function usersFetchDataSuccess(users) {
    return {
        type: USER,
        users
    };
};

export function usersFetchData() {    
    return (dispatch) => {        
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(response =>{
            const users = response.data
            dispatch(usersFetchDataSuccess(users))
        })
        .catch(error => {
            const errorMsg = error.message
            dispatch(fetchFailure(errorMsg))
        })
    };
};
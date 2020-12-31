import { USER } from './actionTypes'
import axios from 'axios';

export function usersFetchData() {    
    return (dispatch) => {        
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(response =>{
            const users = response.data
            dispatch({
                type: USER,
                users
            })
        })
        .catch(error => {
            const errorMsg = error.message
            dispatch(fetchFailure(errorMsg))
        })
    };
};
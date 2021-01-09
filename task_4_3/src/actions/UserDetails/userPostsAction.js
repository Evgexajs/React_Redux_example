import { USERPOSTS, ERROR } from '../actionTypes'
import axios from 'axios';

export function userPostsFetchData(userId) {
    return (dispatch) => {
        axios.get("https://jsonplaceholder.typicode.com/users/" + userId + "/posts")
        .then(response =>{
            const userPosts = response.data
            dispatch({
                type: USERPOSTS,
                userPosts
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
import { POSTSLIST, ERROR } from './actionTypes'
import axios from 'axios';

export function postsFetchData() {
    return (dispatch) => {        
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(response =>{
            const posts = response.data
            dispatch({
                type: POSTSLIST,
                posts
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
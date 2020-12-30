import { POSTSLIST } from './actionTypes'
import axios from 'axios';

export function postsFetchDataSuccess(posts) {
    return {
        type: POSTSLIST,
        posts
    };
};

export function postsFetchData() {
    return (dispatch) => {        
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(response =>{
            const posts = response.data
            dispatch(postsFetchDataSuccess(posts))
        })
        .catch(error => {
            const errorMsg = error.message
            dispatch(fetchFailure(errorMsg))
        })
    };
};
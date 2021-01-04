import { ADDPOST, ERROR } from './actionTypes'
import axios from 'axios';

export function addPostFetchData(formData) {
    return (dispatch) => {
        axios.post("https://jsonplaceholder.typicode.com/posts", formData)
            .then(response =>{
                const post = response.data
                dispatch({
                    type: ADDPOST,
                    post
                });
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
import { ADDPOST } from './actionTypes'
import axios from 'axios';

export function addPostFetchData(formData) {
    return (dispatch) => {
        axios.post("https://jsonplaceholder.typicode.com/posts", formData)
            .then(response =>{
                const post = response.data
                console.log(response);
                dispatch({
                    type: ADDPOST,
                    post
                });
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(fetchFailure(errorMsg))
            })
    };
};
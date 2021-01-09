import { USERALBUMS, ERROR } from '../actionTypes'
import axios from 'axios';

export function userAlbumsFetchData(userId) {
    return (dispatch) => {
        axios.get("https://jsonplaceholder.typicode.com/users/" + userId + "/albums")
        .then(response =>{
            const userAlbums = response.data
            dispatch({
                type: USERALBUMS,
                userAlbums
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
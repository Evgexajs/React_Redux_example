import { TODOLIST } from './actionTypes'
import axios from 'axios';

export function todosFetchData() {
    return (dispatch) => {        
        axios.get("https://jsonplaceholder.typicode.com/todos")
        .then(response =>{
            const todos = response.data
            dispatch({
                type: TODOLIST,
                todos
            })
        })
        .catch(error => {
            const errorMsg = error.message
            dispatch(fetchFailure(errorMsg))
        })
    };
};
import { POSTSLIST, TODOLIST, USER } from "../actions/actionTypes";

export function data (state = [], action) {
    switch (action.type) {
        case USER:
            return action.users;
        case TODOLIST:
            return action.todos;
        case POSTSLIST:
            return action.posts;
        default:
            return state;
    }
}
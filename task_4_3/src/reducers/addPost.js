import { ADDPOST } from "../actions/actionTypes";

export function addPost (state = [], action) {
    switch (action.type) {
        case ADDPOST:
            return action.post;
        default:
            return state;
    }
}

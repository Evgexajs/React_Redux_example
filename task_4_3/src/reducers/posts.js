import { POSTSLIST } from "../actions/actionTypes";

export function post (state = [], action) {
    switch (action.type) {
        case POSTSLIST:
            return action.posts;
        default:
            return state;
    }
}

import { USERPOSTS } from "../../actions/actionTypes";

export function userPosts (state = [], action) {
    switch (action.type) {
        case USERPOSTS:
            return action.userPosts;
        default:
            return state;
    }
}

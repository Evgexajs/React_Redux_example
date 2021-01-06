import { USER } from "../actions/actionTypes";

export function user (state = [], action) {
    switch (action.type) {
        case USER:
            return action.user;
        default:
            return state;
    }
}

import { USER } from "../actions/actionTypes";

export function user (state = [], action) {
    switch (action.type) {
        case USER:
            return action.users;
        default:
            return state;
    }
}

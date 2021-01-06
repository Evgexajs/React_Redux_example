import { USERS } from "../actions/actionTypes";

export function users (state = [], action) {
    switch (action.type) {
        case USERS:
            return action.users;
        default:
            return state;
    }
}

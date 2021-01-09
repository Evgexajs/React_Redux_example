import { USERTODOS } from "../../actions/actionTypes";

export function userTodos (state = [], action) {
    switch (action.type) {
        case USERTODOS:
            return action.userTodos;
        default:
            return state;
    }
}

import { TODOLIST } from "../actions/actionTypes";

export function todo (state = [], action) {
    switch (action.type) {
        case TODOLIST:
            return action.todos;
        default:
            return state;
    }
}

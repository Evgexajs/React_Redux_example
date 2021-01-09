import { USERALBUMS } from "../../actions/actionTypes";

export function userAlbums (state = [], action) {
    switch (action.type) {
        case USERALBUMS:
            return action.userAlbums;
        default:
            return state;
    }
}

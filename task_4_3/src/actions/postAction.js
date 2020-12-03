import { POSTSLIST } from './actionTypes'

export function postsFetchDataSuccess(posts) {
    return {
        type: POSTSLIST,
        posts
    };
};

export function postsFetchData(url) {
    return (dispatch) => {
        fetch(url)
            .then(response => {
                if(!response.ok) {
                    throw new Error(resonse.statusText)
                }
                return response;
            })
            .then(response => response.json())
            .then(posts => dispatch(postsFetchDataSuccess(posts)))
    };
};
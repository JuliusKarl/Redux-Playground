export const ADD_POST = "ADD_POST";
export const GET_POSTS = "GET_POSTS";
export const DELETE_POST = "DELETE_POST";
export const CLEAR_ALL = "CLEAR_ALL"
export const CHANGE_POST = "CHANGE_POST"; // To Edit a post -> dont know how to do it yet

export function addPost(x, y) {
    return {
        type: ADD_POST,
        post: x,
        id: y
    }
}

export function getPosts() {
    return {
        type: GET_POSTS
    }
}

export function deletePost(x) {
    return {
        type: DELETE_POST,
        id: x
    }
}

export function clearAll() {
    return {
        type: CLEAR_ALL
    }
}


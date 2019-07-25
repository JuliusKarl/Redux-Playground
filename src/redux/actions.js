export const ADD_POST = "ADD_POST";
export const GET_POSTS = "GET_POSTS";
export const CHANGE_POST = "CHANGE_POST";

export function addPost(x) {
    return {
        type: ADD_POST,
        post: x
    }
}

export function getPosts() {
    return {
        type: GET_POSTS
    }
}




import { ADD_POST, GET_POSTS, DELETE_POST, CLEAR_ALL } from "./actions";

const initialState = {
    postList: []
};

export function rootReducer (state = initialState, action) {
    switch(action.type) {
        case ADD_POST:
            return {
                ...state, 
                postList: [...state.postList, action]
            }
        case DELETE_POST:
            return {
                ...state, 
                postList: [...state.postList].filter(post => post.id != action.id)
            }
        case CLEAR_ALL:
            return {
                postList: []
            }
        case GET_POSTS:
            return state;
        default:
            return state;
    }
}

export default rootReducer;
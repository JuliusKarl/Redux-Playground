import { ADD_POST, GET_POSTS } from "./actions";

export function rootReducer (state, action) {
    switch(action.type) {
        case ADD_POST:
            return {
                ...state, 
                postList: [...state.postList, action.post]
            }
        case GET_POSTS:
            return state;
        default:
            return state;
    }
}

export default rootReducer;
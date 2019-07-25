import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './root';

const middleWare = [thunk];

const initialState = {
    postList: ['first', 'second']
};

const store = createStore(
    rootReducer, 
    initialState,
    applyMiddleware(...middleWare)
);

export default store;
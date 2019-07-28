import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

import rootReducer from './root';

const persistConfig = {
    key: 'root',
    storage,
};

const middleWare = [thunk];

const pReducer = persistReducer(persistConfig, rootReducer);


export const store = createStore(pReducer, compose(applyMiddleware(...middleWare)));
export const persistor = persistStore(store);


/*
const middleWare = [thunk];

const initialState = {
    postList: []
};

const store = createStore(
    rootReducer, 
    initialState,
    compose(applyMiddleware(...middleWare))
);

export default store;*/
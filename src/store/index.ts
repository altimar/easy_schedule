import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import { loadState, LocalStorageMiddleware } from './localstorage'

const localStorageKey = 'easy-schedule';

const initialState = Object.assign({}, loadState(localStorageKey))

const middleWare = applyMiddleware(LocalStorageMiddleware(localStorageKey));

const store = createStore(rootReducer, initialState, middleWare);

export default store;
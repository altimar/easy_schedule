import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import data_generator from './demo';
import { loadState, LocalStorageMiddleware } from './localstorage'

const localStorageKey = 'easy-schedule';

const initialState = Object.assign(data_generator(5, 2, 6), loadState(localStorageKey))

const middleWare = applyMiddleware(LocalStorageMiddleware(localStorageKey));

const store = createStore(rootReducer, initialState, middleWare);

export default store;
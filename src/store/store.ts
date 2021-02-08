import {createStore, combineReducers} from 'redux';
import { counterReducer } from './counterReducer';


const rootReducer = combineReducers({
    counter: counterReducer
 });

export const store = createStore(rootReducer);

export type RootStateType = ReturnType<typeof rootReducer>;

 // @ts-ignore
window.store = store
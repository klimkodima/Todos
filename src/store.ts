import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import todosReducer from './reducers/todosReducer';
import notificationReducer from './reducers/notificationReducer';
import filterReducer from './reducers/filterReducer';

  
const reducer = combineReducers({
    todos: todosReducer,
    notification: notificationReducer,
    filter: filterReducer
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import app from './app';

const rootReducer = combineReducers({
  app
});

export default createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));
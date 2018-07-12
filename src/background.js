import { createStore, applyMiddleware } from 'redux';
import { wrapStore } from 'react-chrome-redux';
import logger from 'redux-logger';
import reducer, { initialState } from './reducers';

const storedState = localStorage.getItem('state');
const store = createStore(reducer, storedState ? JSON.parse(storedState) : initialState, applyMiddleware(logger));

wrapStore(store, { portName: 'futbudd' });

store.subscribe(() => {
  const state = JSON.stringify(store.getState());
  console.log('Persist state', store.getState());
  localStorage.setItem('state', state);
});

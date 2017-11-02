import { createStore, applyMiddleware } from 'redux';
import { wrapStore } from 'react-chrome-redux';
import logger from 'redux-logger';
import reducer from './reducers';

const store = createStore(reducer, { count: 0 }, applyMiddleware(logger));

wrapStore(store, { portName: 'futbudd' });

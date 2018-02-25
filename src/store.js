import {createStore, applyMiddleware} from 'redux';
import promisemiddleware from 'redux-promise-middleware';
import reducer from './ducks/reducer';

export default createStore(reducer, applyMiddleware(promisemiddleware()))
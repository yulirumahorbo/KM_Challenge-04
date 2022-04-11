import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { allReducer } from './allReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';

const config = {
  key: 'abcdefghijklmn',
  storage: AsyncStorage,
  timeout: null,
  whitelist: ['Login'],
};

const persistedReducer = persistReducer(config, allReducer);

const allMiddlewares = applyMiddleware(logger, thunk);

export const store = createStore(persistedReducer, {}, allMiddlewares);

export const persistedStore = persistStore(store);
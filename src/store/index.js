import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import Global from '../reduxGlobal/reducer';
import HomeReducer from '../screens/Home/redux/reducer';
import LoginReducer from '../screens/Login/redux/reducer';

const allReducer = combineReducers({
  login: LoginReducer,
  home: HomeReducer,
  global: Global,
});

const config = {
  key: 'abcdefghijklmn',
  storage,
  timeout: null,
  whitelist: ['Login'],
};

const persistedReducer = persistReducer(config, allReducer);

const allMiddlewares = applyMiddleware(logger, thunk);

export const store = createStore(persistedReducer, {}, allMiddlewares);

export const persistedStore = persistStore(store);

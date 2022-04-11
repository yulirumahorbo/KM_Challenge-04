import {combineReducers} from 'redux';
import Global from '../reduxGlobal/reducer';
import HomeReducer from '../screens/Home/redux/reducer';
import LoginReducer from '../screens/Login/redux/reducer'

export const allReducer = combineReducers({
    login: LoginReducer,
    home: HomeReducer,
    global: Global,
})
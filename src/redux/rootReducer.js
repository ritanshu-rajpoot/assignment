import {combineReducers} from "redux";
import * as userReducer from './reducer/user.reducer'


export const rootReducer = combineReducers({
    [userReducer.userFeatureKey] : userReducer.reducer,
});

import { combineReducers } from "redux";
import userReducer from "./use/reducer";


let rootReducers = combineReducers({
    userReducer
});

export default  rootReducers;
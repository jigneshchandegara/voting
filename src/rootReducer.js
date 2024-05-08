import { combineReducers } from "redux";
import { userReducer, electionReducer, voterReducer, connectionReducer } from "./use/reducer";

let rootReducers = combineReducers({
    userReducer,
    electionReducer,
    voterReducer,
    connectionReducer,
});

export default rootReducers;
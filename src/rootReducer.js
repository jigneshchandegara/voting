import { combineReducers } from "redux";
import { partyReducer, electionReducer, voterReducer, connectionReducer } from "./use/reducer";

let rootReducers = combineReducers({
    partyReducer,
    electionReducer,
    voterReducer,
    connectionReducer,
});

export default rootReducers;
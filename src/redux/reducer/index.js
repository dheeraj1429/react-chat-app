import { combineReducers } from "redux";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
    index: userReducer,
});

export default rootReducer;

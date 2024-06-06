import { combineReducers } from "redux";
import userReducer from "./user.reducer";
import authentificationReducer from "./authentification.reducer";

export default combineReducers({
    //reducers
    userReducer,
    authentificationReducer,
})
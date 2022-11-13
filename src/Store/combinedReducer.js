import {combineReducers} from "redux";
import userReducer from "./UserReducer";


let rootReducer =combineReducers({
  userReducer: userReducer
})

export default rootReducer

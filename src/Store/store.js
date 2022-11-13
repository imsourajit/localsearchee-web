import rootReducer from "./combinedReducer";
import {applyMiddleware, compose, createStore} from "redux";
import thunk from "redux-thunk";

let composeEnhancers = compose
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));


export default store

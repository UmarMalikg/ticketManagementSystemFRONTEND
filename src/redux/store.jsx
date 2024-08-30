import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk"; // Fixed import from 'redux-thunk' to 'thunk'
import bussesReducer from "./reducers/bus";

// Combine reducers
const rootReducer = combineReducers({
  busses: bussesReducer,
});

// Create store with middleware
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

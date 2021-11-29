import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import categoryReducer from "./category/reducers";
import userActionReducer from "./user_actions/reducers";
import itemsReducer from "./items/reducers"

import thunkMiddleware from "redux-thunk";
import { userEventMiddleware } from "./middleware";

let reducers = combineReducers({
    category: categoryReducer,
    items: itemsReducer,
    user_actions: userActionReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers,  composeEnhancers(applyMiddleware(thunkMiddleware, userEventMiddleware)));

export default store;
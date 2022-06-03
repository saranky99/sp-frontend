import { combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware } from "redux";

import thunk from "redux-thunk";
import { eventReducer } from "./reducers/eventReducer";

const rootReducer = combineReducers({
  eventReducer: eventReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;

import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import counterSchema from "./schema/counterSchema";
import counterReducer from "./reducers/counterReducer";

// Just like initial state
const schema = {
  counterData: counterSchema
};

const reducers = combineReducers({
  counterData: counterReducer
});

const middlewares = [thunk];

export const store = createStore(
  reducers,
  schema,
  applyMiddleware(...middlewares)
);

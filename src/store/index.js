import { createStore, combineReducers } from "redux";

import counterSchema from "./schema/counterSchema";
import counterReducer from "./reducers/counterReducer";

const schema = {
  counterData: counterSchema
};

const reducers = combineReducers({
  counterData: counterReducer
});

export const store = createStore(reducers, schema);

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./reducers/tasks";

const reducer = combineReducers({
  tasks: tasksReducer,
});

export const store = configureStore({
  reducer: reducer,
});

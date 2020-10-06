import { combineReducers } from "redux";
import { waterReducer } from "./reducers/waterReducer";

export const rootReducer = combineReducers({
  water: waterReducer,
});

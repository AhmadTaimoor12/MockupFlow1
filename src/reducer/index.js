import { combineReducers } from "redux";
import { AuthReducer } from "./Auth";

export const  AllReducers=combineReducers({AuthReducer:AuthReducer})
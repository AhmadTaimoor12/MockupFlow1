import { LOGIN_USER } from "../actions/types";
const initialState = {
  visibilityFilter: "SHOW_ALL",
  todos: [],
};
export const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return action;
    default:
      return state;
  }
};

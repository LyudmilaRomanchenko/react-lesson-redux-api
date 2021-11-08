import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import types from "./todos-types";
import actions from "./todos-actions";

// console.log(actions);

const items = createReducer([], {
  [actions.addTodo]: (state, { payload }) => [...state, payload],
  [actions.deleteTodo]: (state, { payload }) =>
    state.filter((todo) => todo.id !== payload),
});

// console.log(items());
// не реализован
const filter = (state = "", action) => {
  return state;
};

export default combineReducers({
  items,
  filter,
});

// Без toolkit

// const items = (state = [], { type, payload }) => {
//   console.log([...state, payload]);
//   switch (type) {
//     case types.ADD:
//       return [...state, payload];
//     case types.DELETE:
//       return state.filter((todo) => todo.id !== payload);
//     default:
//       return state;
//   }
// };

// // console.log(items());

// const filter = (state = "", action) => {
//   return state;
// };

// export default combineReducers({
//   items,
//   filter,
// });

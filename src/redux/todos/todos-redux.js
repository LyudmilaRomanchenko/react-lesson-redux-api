import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
// import types from "./todos-types";
// import actions from "./todos-actions";
// const { addTodoRequest, addTodoSuccsess, addTodoError, deleteTodo } = actions;

import {
  addTodoRequest,
  addTodoSuccsess,
  addTodoError,
  deleteTodoRequest,
  deleteTodoSuccsess,
  deleteTodoError,
  fetchTodoRequest,
  fetchTodoSuccsess,
  fetchTodoError,
} from "./todos-actions";

// console.log(actions);

const items = createReducer([], {
  [fetchTodoSuccsess]: (state, { payload }) => payload,
  [addTodoSuccsess]: (state, { payload }) => [...state, payload],
  [deleteTodoSuccsess]: (state, { payload }) =>
    state.filter((todo) => todo.id !== payload),
});

// console.log(items());
// не реализован
const filter = (state = "", action) => {
  return state;
};

const loading = createReducer(false, {
  [fetchTodoRequest]: () => true,
  [fetchTodoSuccsess]: () => false,
  [fetchTodoError]: () => false,
  [addTodoRequest]: () => true,
  [addTodoSuccsess]: () => false,
  [addTodoError]: () => false,
  [deleteTodoRequest]: () => true,
  [deleteTodoSuccsess]: () => false,
  [deleteTodoError]: () => false,
});

export default combineReducers({
  items,
  filter,
  loading,
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

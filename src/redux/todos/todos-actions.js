/* eslint-disable import/no-anonymous-default-export */
import { createAction } from "@reduxjs/toolkit";
import types from "./todos-types";
import shortid from "shortid";

const addTodo = createAction("todos/add", (text) => ({
  payload: {
    id: shortid.generate(),
    text,
    complited: false,
  },
}));

const deleteTodo = createAction("todos/delete");

export default { addTodo, deleteTodo };

// Без toolkit

// const addTodo = (text) => ({
//   type: types.ADD,
//   payload: {
//     id: shortid.generate(),
//     text,
//     complited: false,
//   },
// });

// const deleteTodo = (todoId) => ({
//   type: types.DELETE,
//   payload: todoId,
// });

// export default { addTodo, deleteTodo };

/* eslint-disable import/no-anonymous-default-export */
import { createAction } from "@reduxjs/toolkit";
// import types from "./todos-types";
// import shortid from "shortid";

export const addTodoRequest = createAction("todos/addTodoRequest");
export const addTodoSuccsess = createAction("todos/addTodoSuccses");
export const addTodoError = createAction("todos/addTodoError");

export const deleteTodoRequest = createAction("todos/deleteTodoRequest");
export const deleteTodoSuccsess = createAction("todos/deleteTodoSuccses");
export const deleteTodoError = createAction("todos/deleteTodoError");

export const fetchTodoRequest = createAction("todos/fetchTodoRequest");
export const fetchTodoSuccsess = createAction("todos/fetchTodoSuccses");
export const fetchTodoError = createAction("todos/fetchTodoError");

// const deleteTodo = createAction("todos/delete");

// const addTodoRequest = createAction("todos/addTodoRequest");
// const addTodoSuccsess = createAction("todos/addTodoSuccses");
// const addTodoError = createAction("todos/addTodoError");

// const deleteTodoRequest = createAction("todos/deleteTodoRequest");
// const deleteTodoSuccsess = createAction("todos/deleteTodoSuccses");
// const deleteTodoError = createAction("todos/deleteTodoError");

// export default {
//   addTodoRequest,
//   addTodoSuccsess,
//   addTodoError,
//   deleteTodoRequest,
//   deleteTodoSuccsess,
//   deleteTodoError,
// };

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

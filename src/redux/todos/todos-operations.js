/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";
// const axios = require("axios");

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

// С использованием thunk
import { createAsyncThunk } from "@reduxjs/toolkit";

// First, create the thunk
const fetchTodo = createAsyncThunk("todos/fetchTodos", async () => {
  const { data } = await axios.get("/todos");
  return data;
});

// const fetchTodo = () => async (dispatch) => {
//   dispatch(fetchTodoRequest());

//   try {
//     const { data } = await axios.get("/todos");
//     dispatch(fetchTodoSuccsess(data));
//   } catch (error) {
//     dispatch(fetchTodoError(error));
//   }
// };

// const fetchTodo = () => (dispatch) => {
//   dispatch(fetchTodoRequest());

//   axios
//     .get("/todos")
//     .then(({ data }) => dispatch(fetchTodoSuccsess(data)))
//     .catch((error) => dispatch(fetchTodoError(error)));
// };

axios.defaults.baseURL = "http://localhost:4040";

const addTodo = (text) => (dispatch) => {
  // const todos = { text, complited: false };

  const todo = {
    text,
    completed: false,
  };

  dispatch(addTodoRequest());

  axios
    .post("/todos", todo)
    .then(({ data }) => dispatch(addTodoSuccsess(data)))
    .catch((error) => dispatch(addTodoError(error)));
};

const deleteTodo = (todoId) => (dispatch) => {
  dispatch(deleteTodoRequest());

  axios
    .delete(`/todos/${todoId}`)
    .then(() => dispatch(deleteTodoSuccsess(todoId)))
    .catch((error) => dispatch(deleteTodoError(error)));
};

export default { addTodo, deleteTodo, fetchTodo };

//////////////////////////////////////

// import actions from "./todos-actions";
// const {
//   addTodoRequest,
//   addTodoSuccsess,
//   addTodoError,
//   deleteTodoRequest,
//   deleteTodoSuccsess,
//   deleteTodoError,
// } = actions;

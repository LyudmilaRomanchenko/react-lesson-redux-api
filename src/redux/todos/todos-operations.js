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
// import actions from "./todos-actions";
// const {
//   addTodoRequest,
//   addTodoSuccsess,
//   addTodoError,
//   deleteTodoRequest,
//   deleteTodoSuccsess,
//   deleteTodoError,
// } = actions;

axios.defaults.baseURL = "http://localhost:4040";

const fetchTodo = () => (dispatch) => {
  dispatch(fetchTodoRequest());

  axios
    .get("/todos")
    .then(({ data }) => dispatch(fetchTodoSuccsess(data)))
    .catch((error) => dispatch(fetchTodoError(error)));
};

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

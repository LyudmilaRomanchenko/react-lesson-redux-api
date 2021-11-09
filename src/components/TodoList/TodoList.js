import React from "react";
import { useState, useEffect } from "react";
// import { connect} from "react-redux";
import { useSelector, useDispatch } from "react-redux";

// import { deleteTodo } from "../../redux/todos/todos-operations";
import { getTodos } from "../../redux/todos/todos-selector";
import actions from "../../redux/todos/todos-operations";
const { deleteTodo, fetchTodo } = actions;

function TodoList() {
  const todos = useSelector(getTodos);
  const dispatch = useDispatch();
  const onDeleteTodo = (id) => dispatch(deleteTodo(id));
  const onFetchTodo = () => dispatch(fetchTodo());

  useEffect(() => {
    const a = onFetchTodo();
    console.log(a);
  }, []);

  // console.log(todos);

  return (
    <>
      <ul>
        {todos.map(({ id, text }) => (
          <li key={id}>
            <p>{text}</p>
            <button type="button" onClick={() => onDeleteTodo(id)}>
              Удалить
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default TodoList;

// const mapStateToProps = (state) => ({
//   todos: state.todos.items,
// });

// const mapDispatchToProps = (dispatch) => ({
//   onDeleteTodo: (id) => dispatch(todosActions.deleteTodo(id)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

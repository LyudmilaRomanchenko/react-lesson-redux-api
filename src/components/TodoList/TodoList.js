import React from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import todosActions from "../../redux/todos/todos-actions";
import { getTodos } from "../../redux/todos/todos-selector";

function TodoList() {
  // console.log(todos);

  const todos = useSelector(getTodos);
  const dispatch = useDispatch();
  const onDeleteTodo = (id) => dispatch(todosActions.deleteTodo(id));

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

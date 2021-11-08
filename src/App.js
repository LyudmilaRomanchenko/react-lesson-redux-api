// import logo from './logo.svg';
import "./App.css";
import Counter from "./components/Counter/Counter";
import DropDown from "./components/DropDown/DropDown";
// import ColorPicker f
// console.log(DropDown);
import ColorPicker from "./components/ColorPicker/ColorPicker";
import Clock from "./components/Clock";
import Input from "./components/Input/Input";
// import InputTest from "./components/InputTest";
import React from "react";
import TodoList from "./components/TodoList/TodoList";

// import store from "./redux/store";
// import { myAction } from "./redux/action";

// console.log(store);
// console.log(store.getState());
// console.log(store.dispatch(myAction(5)));
// console.log(store.dispatch(myAction(10)));

const colorPickerOptions = [
  { label: "red", color: "#F44336" },
  { label: "green", color: "#4CAF50" },
  { label: "blue", color: "#2196F3" },
  { label: "grey", color: "#607D8B" },
  { label: "pink", color: "#E91E63" },
  { label: "indigo", color: "#3F51B5" },
];

class App extends React.Component {
  state = {
    todos: [
      { id: 1, text: "Посмотреть", complited: false },
      { id: 2, text: "Выучить", complited: false },
      { id: 3, text: "Запомнить", complited: false },
    ],
  };

  // renderForm = (data) => {
  //   console.log(data);
  // };

  render() {
    const todos = this.state;
    // console.log(todos);
    return (
      <div className="App">
        <Counter />
        <DropDown />
        <ColorPicker options={colorPickerOptions} />
        {/* <InputTest onSubmit={this.renderForm} /> */}

        <Input />

        <TodoList />
        <Clock />
      </div>
    );
  }
}

export default App;

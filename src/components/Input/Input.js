import { useState, useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import todosActions from "../../redux/todos/todos-actions";

function Input() {
  const [name, setName] = useState("");

  const dispatch = useDispatch();

  const handleChange = (e) => {
    // const { name } = e.target;
    // console.log(e.currentTarget.value);
    const value = e.currentTarget.value;
    setName(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // onSubmit(name);
    dispatch(todosActions.addTodo(name));

    setName("");
  };

  console.log(name);

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Имя
        <input
          name="name"
          type="text"
          value={name}
          onChange={handleChange}
        ></input>
      </label>
      <button type="submit">Отправить</button>
    </form>
  );
}

export default Input;

// const mapDispatchToProps = (dispatch) => ({
//   onSubmit: (text) => dispatch(todosActions.addTodo(text)),
// });

// export default connect(null, mapDispatchToProps)(Input);

// Реализация на классах

// import React from "react";

// class Input extends React.Component {
//   state = {
//     name: "",
//     tag: "",
//     experience: "junior",
//     licence: {
//       white: false,
//       red: false,
//     },
//   };

//   handleChange = (event) => {
//     const { name, value } = event.currentTarget;
//     // console.log(event.currentTarget.name);
//     this.setState({ [name]: value });
//   };

//   handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(this.state);
//     this.props.onSubmit(this.state);
//     this.reset();
//   };

//   handleCheced = (event) => {
//     const { value } = event.currentTarget;
//     // console.log(value);
//     // this.setState({ [name]: value });
//     this.setState((prevState) => ({
//       licence: {
//         ...prevState.licence,
//         [value]: !prevState.licence[value],
//       },
//       //   [value]: !prevState.licence[value],
//     }));
//   };

//   //   console.log(prevState.licence[value])

//   // console.log(event.target.checked);
//   // console.log(event.target.value);

//   reset = () => {
//     this.setState({ name: "", tag: "" });
//   };

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Имя
//           <input
//             name="name"
//             type="text"
//             value={this.state.name}
//             onChange={this.handleChange}
//           ></input>
//         </label>
//         <label>
//           Прозвище
//           <input
//             name="tag"
//             type="text"
//             value={this.state.tag}
//             onChange={this.handleChange}
//           ></input>
//         </label>
//         <button type="submit">Отправить</button>

//         <p>Ваш уровень:</p>
//         <lable>
//           Junior
//           <input
//             name="experience"
//             type="radio"
//             value="junior"
//             onChange={this.handleChange}
//             checked={this.state.experience === "junior"}
//           ></input>
//         </lable>
//         <lable>
//           Middle
//           <input
//             name="experience"
//             type="radio"
//             value="middle"
//             onChange={this.handleChange}
//             checked={this.state.experience === "middle"}
//           ></input>
//         </lable>
//         <lable>
//           Senior
//           <input
//             name="experience"
//             type="radio"
//             value="senior"
//             onChange={this.handleChange}
//             checked={this.state.experience === "senior"}
//           ></input>
//         </lable>
//         <label>
//           {" "}
//           Белый
//           <input
//             name="licence"
//             type="checkbox"
//             value="white"
//             checked={this.state.licence.white}
//             onChange={this.handleCheced}
//           ></input>
//         </label>
//         <label>
//           {" "}
//           Красный
//           <input
//             name="licence"
//             type="checkbox"
//             value="red"
//             checked={this.state.licence.red}
//             onChange={this.handleCheced}
//           ></input>
//         </label>
//       </form>
//     );
//   }
// }

// export default Input;

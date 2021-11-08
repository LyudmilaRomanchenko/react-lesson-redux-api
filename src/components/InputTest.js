// Реализация на хуках

import { useState, useEffect } from "react";

// Кастомный хук
const useLocalStorage = (key, defaultValue) => {
  const [state, setState] = useState(() => {
    return JSON.parse(window.localStorage.getItem(key)) ?? defaultValue;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
};

export default function InputTest() {
  const [name, setName] = useLocalStorage("name", "");
  const [tag, setTag] = useLocalStorage("tag", "");

  //   // Управления состояниями без кастомного хука
  //   // const [name, setName] = useState(() => {
  //   //   return JSON.parse(window.localStorage.getItem("name")) ?? "";
  //   // });
  //   // const [tag, setTag] = useState(() => {
  //   //   return JSON.parse(window.localStorage.getItem("tag")) ?? "";
  //   // });

  //   // useEffect(() => {
  //   //   window.localStorage.setItem("name", JSON.stringify(name));
  //   // }, [name]);

  //   // useEffect(() => {
  //   //   window.localStorage.setItem("tag", JSON.stringify(tag));
  //   // }, [tag]);

  //   const [experience, setExperience] = useState("junior");
  //   console.log(name);
  //   console.log(setName);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(e.target.name);

    // if (name === "junior" || name === "middle" || name === "middle") {
    //   setExperience(value);
    // }

    switch (name) {
      case "name":
        setName(value);
        break;
      case "tag":
        setTag(value);
        break;
      // case "experience":
      //   setExperience(value);
      //   break;
      default:
        return;
    }

    /////////////// Альтернативный вариант switch/////////////
    // if (name === "name") {
    //   setName(value);
    // }

    // if (name === "tag") {
    //   setTag(value);
    // }
    ////////////////////////
  };

  return (
    <form>
      <label>
        Имя
        <input
          name="name"
          type="text"
          value={name}
          onChange={handleChange}
        ></input>
      </label>
      <label>
        Прозвище
        <input
          name="tag"
          type="text"
          value={tag}
          onChange={handleChange}
        ></input>
      </label>
      <button type="submit">Отправить</button>

      {/* <p>Ваш уровень:</p>
      <lable>
        Junior
        <input
          name="experience"
          type="radio"
          value="junior"
          //   onChange={handleChange}
          //   checked={experience === "junior"}
        ></input>
      </lable> */}
      {/* <lable>
        Middle
        <input
          name="experience"
          type="radio"
          value="middle"
          //   onChange={handleChange}
          //   checked={experience === "middle"}
        ></input>
      </lable>
      <lable>
        Senior
        <input
          name="experience"
          type="radio"
          value="senior"
          //   onChange={handleChange}
          //   checked={experience === "senior"}
        ></input>
      </lable> */}
      {/* <label>
        {" "}
        Белый
        <input
          name="licence"
          type="checkbox"
          value="white"
          checked={this.state.licence.white}
          onChange={this.handleCheced}
        ></input>
      </label>
      <label>
        {" "}
        Красный
        <input
          name="licence"
          type="checkbox"
          value="red"
          checked={this.state.licence.red}
          onChange={this.handleCheced}
        ></input>
      </label> */}
    </form>
  );
}

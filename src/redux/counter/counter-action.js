import { createAction } from "@reduxjs/toolkit";

// increment - это функция, если вызвать increment(100), результат будет
// {type: "counter/Increment", payload: 100}

export const increment = createAction("counter/Increment");

export const decrement = createAction("counter/Decrement");

// Без toolkit
// import actionTypes from "./counter-types";

// export const increment = (value) => ({
//   type: actionTypes.INCREMENT,
//   payload: value,
// });

// export const decrement = (value) => ({
//   type: actionTypes.DECREMENT,
//   payload: value,
// });

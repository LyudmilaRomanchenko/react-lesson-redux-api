import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";

import { increment, decrement } from "./counter-action";

const valueReducer = createReducer(0, {
  [increment]: (state, action) => state + action.payload,
  [decrement]: (state, action) => state - action.payload,
});

const stepReducer = (state = 5, action) => state;

const counterInitialState = combineReducers({
  value: valueReducer,
  step: stepReducer,
});

export default counterInitialState;

// Без toolkit
// import { combineReducers } from "redux";
// import actionTypes from "./counter-types";

// const valueReducer = (state = 0, action) => {
//   switch (action.type) {
//     case actionTypes.INCREMENT:
//       return state + action.payload;
//     case actionTypes.DECREMENT:
//       return state - action.payload;
//     default:
//       return state;
//   }
// };

// const stepReducer = (state = 5, action) => state;

// const counterInitialState = combineReducers({
//   value: valueReducer,
//   step: stepReducer,
// });

// export default counterInitialState;

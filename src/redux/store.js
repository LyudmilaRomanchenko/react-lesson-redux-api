/* eslint-disable no-undef */
/* eslint-disable import/no-anonymous-default-export */
import { createStore, combineReducers } from "redux";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
import counterReducer from "./counter/counter-reducer";
import todosReducer from "./todos/todos-redux";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

const todosPersistConfig = {
  key: "todos",
  storage,
  blacklist: ["filter"],
};

const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: persistReducer(todosPersistConfig, todosReducer),
  },
  middleware,
  // указываем, что devtools нужны только при разработке
  devTools: process.env.NODE_ENV === "development",
});

const persistor = persistStore(store);

export default { store, persistor };

// Без toolkit

// const rootReducer = combineReducers({
//   counter: counterReducer,
//   todos: todosReducer,
// });

// const store = createStore(rootReducer, composeWithDevTools());

// export default store;

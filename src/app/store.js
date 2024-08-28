import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSclice";

export const store = configureStore({
  reducer: todoReducer,
});

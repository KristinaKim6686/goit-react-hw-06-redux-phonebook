import { configureStore, createReducer, createAction } from "@reduxjs/toolkit";

const initialState = { todoList: [] };

export const addTodo = createAction("todo/addTodo");
export const changeTodo = createAction("todo/changeTodo");

const reducer = createReducer(initialState, {
  [addTodo]: (state, action) => ({
    todoList: [...state.todoList, action.payload],
  }),
  [changeTodo]: (state, action) => ({
    todoList: state.todoList.map((todo) => {
      return todo.id === action.payload.id ? action.payload : todo;
    }),
  }),
});

export const store = configureStore({
  reducer: reducer,
});

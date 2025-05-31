import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './todos/TodoSlice.js';

const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});

export default store;

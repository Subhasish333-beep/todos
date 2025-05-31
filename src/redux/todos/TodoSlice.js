// src/redux/todos/todosSlice.js
import { createSlice } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
  items: [],
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    setTodos: (state, action) => {
      state.items = action.payload;
    },
    addTodo: (state, action) => {
      state.items.push(action.payload);
    },
    toggleTodo: (state, action) => {
      const todo = state.items.find(t => t.id === action.payload);
      if (todo) todo.completed = !todo.completed;
    },
    deleteTodo: (state, action) => {
      state.items = state.items.filter(t => t.id !== action.payload);
    },
  },
});

export const { setTodos, addTodo, toggleTodo, deleteTodo } = todosSlice.actions;
export default todosSlice.reducer;

// Async function to load todos from AsyncStorage
export const loadTodos = () => async dispatch => {
  const data = await AsyncStorage.getItem('todos');
  if (data) dispatch(setTodos(JSON.parse(data)));
};

// Async middleware to persist todos
export const persistTodos = () => (dispatch, getState) => {
  const todos = getState().todos.items;
  AsyncStorage.setItem('todos', JSON.stringify(todos));
};

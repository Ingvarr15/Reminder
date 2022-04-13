import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {TTodo, TLink} from './types';

interface IMain {
  theme: string;
  todos: TTodo[];
  links: TLink[];
}

const initialState: IMain = {
  theme: 'orangeGreen',
  todos: [],
  links: [],
};

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    loadState: (state) => {
      if (localStorage.getItem('ToDo-List')) {
        const loadedState: IMain = JSON.parse(
          localStorage.getItem('ToDo-List') || '',
        );
        state.theme = loadedState.theme || initialState.theme;
        state.todos = loadedState.todos || initialState.todos;
        state.links = loadedState.links || initialState.links;
      }
    },
    saveState: (state) => {
      localStorage.setItem(
        'ToDo-List',
        JSON.stringify({
          theme: state.theme,
          todos: state.todos,
          links: state.links,
        }),
      );
    },
    setTheme: (state, {payload}: PayloadAction<string>) => {
      state.theme = payload;
    },
    addTodo: (state, {payload}: PayloadAction<TTodo>) => {
      state.todos.push(payload);
    },
    checkTodo: (state, {payload}: PayloadAction<string>) => {
      state.todos.forEach((todo) => {
        if (todo.id === payload) {
          todo.done = !todo.done;
        }
      });
    },
    editTodo: (state, {payload}: PayloadAction<{[key: string]: string}>) => {
      state.todos.forEach((todo) => {
        if (todo.id === payload.id) {
          todo.title = payload.title;
        }
      });
    },
    deleteTodo: (state, {payload}: PayloadAction<string>) => {
      const filteredTodos = state.todos.filter((todo) => todo.id !== payload);
      state.todos = filteredTodos;
    },
    addLink: (state, {payload}: PayloadAction<TLink>) => {
      state.links.push(payload);
    },
  },
});

export const {
  loadState,
  saveState,
  setTheme,
  addTodo,
  checkTodo,
  editTodo,
  deleteTodo,
  addLink,
} = mainSlice.actions;
export default mainSlice.reducer;

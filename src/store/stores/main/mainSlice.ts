import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {TTodo} from './types';

interface Main {
  theme: string;
  todos: TTodo[];
}

const initialState: Main = {
  theme: 'light',
  todos: [
    {
      badge: 'green',
      text: 'This is warning event.',
      date: new Date('3/5/22'),
      id: Math.random().toString().substring(2, 7),
    },
    {
      badge: 'red',
      text: '123',
      date: new Date('3/16/22'),
      id: Math.random().toString().substring(2, 7),
    },
  ],
};

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    setTheme: (state, {payload}: PayloadAction<string>) => {
      state.theme = payload;
    },
  },
});

export const {setTheme} = mainSlice.actions;
export default mainSlice.reducer;

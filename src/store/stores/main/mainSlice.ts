import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {TTodo} from './types';

interface Main {
  theme: string;
  todos: TTodo[];
}

const initialState: Main = {
  theme: 'orangeGreen',
  todos: [
    {
      badge: 'green',
      title: 'Go to the shop',
      date: '2022-03-31T13:07:38.083Z',
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

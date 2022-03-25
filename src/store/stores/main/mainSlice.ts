import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface Main {
  theme: string;
  todos: [];
}

const initialState: Main = {
  theme: 'light',
  todos: [],
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

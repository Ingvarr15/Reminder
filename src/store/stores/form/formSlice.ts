import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface IMain {
  inputValue: string;
  newTodoWithDate: boolean;
  newTodoWithTime: boolean;
  selectedDate: string;
  selectedTime: string;
}

const initialState: IMain = {
  inputValue: '',
  newTodoWithDate: false,
  newTodoWithTime: false,
  selectedDate: null,
  selectedTime: null,
};

export const mainSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setInputValue: (state, {payload}: PayloadAction<string>) => {
      state.inputValue = payload;
    },
    includeDate: (state, {payload}: PayloadAction<boolean>) => {
      state.newTodoWithDate = payload;
    },
    includeTime: (state, {payload}: PayloadAction<boolean>) => {
      state.newTodoWithTime = payload;
    },
    selectDate: (state, {payload}: PayloadAction<string>) => {
      state.selectedDate = payload;
    },
    selectTime: (state, {payload}: PayloadAction<string>) => {
      state.selectedTime = payload;
    },
  },
});

export const {setInputValue, includeDate, includeTime, selectDate, selectTime} =
  mainSlice.actions;
export default mainSlice.reducer;

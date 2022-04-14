import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {TLink} from '../main/types';

interface IMain {
  todoForm: {
    inputValue: string;
    newTodoWithDate: boolean;
    newTodoWithTime: boolean;
    selectedDate: string;
    selectedTime: string;
  };
}

const initialState: IMain = {
  todoForm: {
    inputValue: '',
    newTodoWithDate: false,
    newTodoWithTime: false,
    selectedDate: null,
    selectedTime: null,
  },
};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setInputValue: (state, {payload}: PayloadAction<string>) => {
      state.todoForm.inputValue = payload;
    },
    includeDate: (state, {payload}: PayloadAction<boolean>) => {
      state.todoForm.newTodoWithDate = payload;
    },
    includeTime: (state, {payload}: PayloadAction<boolean>) => {
      state.todoForm.newTodoWithTime = payload;
    },
    selectDate: (state, {payload}: PayloadAction<string>) => {
      state.todoForm.selectedDate = payload;
    },
    selectTime: (state, {payload}: PayloadAction<string>) => {
      state.todoForm.selectedTime = payload;
    },
    resetTodoForm: (state) => {
      state.todoForm = initialState.todoForm;
    },
  },
});

export const {
  setInputValue,
  includeDate,
  includeTime,
  selectDate,
  selectTime,
  resetTodoForm,
} = formSlice.actions;
export default formSlice.reducer;

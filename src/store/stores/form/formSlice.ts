import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface IMain {
  todoForm: {
    inputValue: string;
    newTodoWithDate: boolean;
    newTodoWithTime: boolean;
    selectedDate: string;
    selectedTime: string;
  };
  linkForm: {
    title: string;
    img: string;
    url: string;
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
  linkForm: {
    title: '',
    img: '',
    url: '',
  },
};

export const mainSlice = createSlice({
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
    setLinkTitle: (state, {payload}: PayloadAction<string>) => {
      state.linkForm.title = payload;
    },
    setLinkImg: (state, {payload}: PayloadAction<string>) => {
      state.linkForm.img = payload;
    },
    setLinkUrl: (state, {payload}: PayloadAction<string>) => {
      state.linkForm.url = payload;
    },
    resetForm: (state) => {
      state.linkForm.title = '';
      state.linkForm.img = '';
      state.linkForm.url = '';
    },
  },
});

export const {
  setInputValue,
  includeDate,
  includeTime,
  selectDate,
  selectTime,
  setLinkTitle,
  setLinkImg,
  setLinkUrl,
  resetForm,
} = mainSlice.actions;
export default mainSlice.reducer;

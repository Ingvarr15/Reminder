import React, {SyntheticEvent, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from 'store/hooks';

import Button from 'ui/Button';
import TodoFormOptions from './TodoFormOptions';

import {
  setInputValue,
  includeDate,
  includeTime,
  selectDate,
  resetTodoForm,
} from 'store/stores/form/formSlice';
import {addTodo} from 'store/stores/main/mainSlice';

const TodoForm = ({setCreateNew, edit}) => {
  const dispatch = useAppDispatch();
  const {
    inputValue,
    newTodoWithDate,
    newTodoWithTime,
    selectedDate,
    selectedTime,
  } = useAppSelector(({form}) => ({
    inputValue: form.inputValue,
    newTodoWithDate: form.newTodoWithDate,
    newTodoWithTime: form.newTodoWithTime,
    selectedDate: form.selectedDate,
    selectedTime: form.selectedTime,
  }));

  const toggleIncludeDate = (e: SyntheticEvent) => {
    e.preventDefault();
    if (newTodoWithDate) {
      dispatch(selectDate(null));
    }
    dispatch(includeDate(!newTodoWithDate));
  };

  const toggleIncludeTime = (e: SyntheticEvent) => {
    e.preventDefault();
    dispatch(includeTime(!newTodoWithTime));
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const trimedValue = inputValue.trim();

    if (trimedValue === '') {
      dispatch(setInputValue(''));
      return;
    }

    const newTodo = {
      id: Math.random().toString().substring(2, 7),
      title: trimedValue,
      done: false,
      date: selectedDate,
      time: selectedTime,
    };

    dispatch(addTodo(newTodo));
    dispatch(resetTodoForm());
  };

  useEffect(() => {
    return () => {
      dispatch(resetTodoForm());
    };
  }, []);

  useEffect(() => {
    if (!newTodoWithDate && newTodoWithTime) {
      dispatch(includeTime(false));
    }
  }, [newTodoWithDate]);

  return (
    <form className="todo-form">
      <div className="close-form" onClick={() => setCreateNew(false)}>
        <i className="fa-solid fa-xmark close-btn"></i>
      </div>
      <div className="todo-form-input">
        <input
          className="todo-form__input"
          type="text"
          value={inputValue}
          onChange={(e) => dispatch(setInputValue(e.currentTarget.value))}
        />
        <Button scale={1} onClick={handleSubmit} disabled={edit}>
          Add
        </Button>
      </div>
      <TodoFormOptions
        toggleIncludeDate={toggleIncludeDate}
        toggleIncludeTime={toggleIncludeTime}
      />
    </form>
  );
};

export default TodoForm;

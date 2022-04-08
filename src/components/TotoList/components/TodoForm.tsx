import React, {SyntheticEvent, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from 'store/hooks';
import TimePicker from 'react-time-picker';

import Button from 'ui/Button';

import {
  setInputValue,
  includeDate,
  includeTime,
  selectDate,
  selectTime,
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
    dispatch(selectDate(null));
    dispatch(includeDate(false));
    dispatch(includeTime(false));
    dispatch(setInputValue(''));
  };

  useEffect(() => {
    return () => {
      dispatch(includeDate(false));
      dispatch(includeTime(false));
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
        <i className="fa-solid fa-xmark"></i>
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
      <div className="todo-options">
        <Button className="todo-option__item" onClick={toggleIncludeDate}>
          <i className="fa-regular fa-calendar"></i>
        </Button>
        <Button
          className="todo-option__item"
          onClick={toggleIncludeTime}
          disabled={!newTodoWithDate}
        >
          <i className="fa-regular fa-clock"></i>
        </Button>
        {newTodoWithTime && (
          <TimePicker
            onChange={(value) => {
              if (value) {
                dispatch(selectTime(value.toString()));
              } else {
                dispatch(selectTime(null));
              }
            }}
            hourPlaceholder=""
            minutePlaceholder=""
            disableClock
            value={selectedTime}
          />
        )}
        <div className="form-tip">
          {!newTodoWithDate
            ? ''
            : newTodoWithDate && !selectedDate
            ? 'Select date on the calendar ->'
            : selectedDate}
        </div>
      </div>
    </form>
  );
};

export default TodoForm;

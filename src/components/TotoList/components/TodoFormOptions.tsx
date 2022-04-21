import React from 'react';
import TimePicker from 'react-time-picker';

import Button from 'ui/Button';

import {useAppDispatch, useAppSelector} from 'store/hooks';
import {selectTime} from 'store/stores/form/formSlice';

const TodoFormOptions = ({toggleIncludeDate, toggleIncludeTime}) => {
  const dispatch = useAppDispatch();
  const {newTodoWithDate, newTodoWithTime, selectedDate, selectedTime} =
    useAppSelector(({form}) => ({
      inputValue: form.inputValue,
      newTodoWithDate: form.newTodoWithDate,
      newTodoWithTime: form.newTodoWithTime,
      selectedDate: form.selectedDate,
      selectedTime: form.selectedTime,
    }));

  return (
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
  );
};

export default TodoFormOptions;

import React, {SyntheticEvent, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from 'store/hooks';

import Button from 'ui/Button';

import {includeDate, includeTime} from 'store/stores/main/mainSlice';

const TodoForm = ({value, setValue, handleSubmit, setCreateNew, edit}) => {
  const dispatch = useAppDispatch();
  const {newTodoWithDate, newTodoWithTime} = useAppSelector(({main}) => ({
    newTodoWithDate: main.newTodoWithDate,
    newTodoWithTime: main.newTodoWithTime,
  }));

  const toggleIncludeDate = (e: SyntheticEvent) => {
    e.preventDefault();
    dispatch(includeDate(!newTodoWithDate));
  };

  const toggleIncludeTime = (e: SyntheticEvent) => {
    e.preventDefault();
    dispatch(includeTime(!newTodoWithTime));
  };

  useEffect(() => {
    return () => {
      dispatch(includeDate(false));
      dispatch(includeTime(false));
    };
  }, []);

  return (
    <form className="todo-form">
      <div className="close-form" onClick={() => setCreateNew(false)}>
        <i className="fa-solid fa-xmark"></i>
      </div>
      <div className="todo-form-input">
        <input
          className="todo-form__input"
          type="text"
          value={value}
          onChange={(e) => setValue(e.currentTarget.value)}
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
      </div>
    </form>
  );
};

export default TodoForm;

import React, {useState} from 'react';
import Checkbox from 'react-checkbox-component';
import moment from 'moment';

import {useAppDispatch} from 'store/hooks';
import {checkTodo, deleteTodo} from 'store/stores/main/mainSlice';

const TodoItem = ({todo, edit, setEdit, handleSubmitEdit}) => {
  const [editValue, setEditValue] = useState('');
  const dispatch = useAppDispatch();

  return (
    <li className="todo-list__item">
      {edit === todo.id ? (
        <div className="todo-item__edit">
          <input
            type="text"
            autoFocus
            className="todo-edit__input"
            value={editValue}
            onChange={(e) => setEditValue(e.currentTarget.value)}
          />
          <div className="todo-control">
            <button
              className="control-button"
              onClick={(e) => handleSubmitEdit(e, editValue)}
            >
              <i className="fa-solid fa-check"></i>
            </button>
            <button
              className="control-button"
              onClick={() => {
                setEditValue('');
                setEdit(null);
              }}
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
        </div>
      ) : (
        <div className="todo-item__inner">
          <div className="todo-title">
            <span className="todo-title">{todo.title} </span>
            <span className="todo-date">
              {todo.date && moment(new Date(todo.date)).format('D MMMM')}
              {todo.time && ` in ${todo.time}`}
            </span>
          </div>
          <div className="todo-control">
            <Checkbox
              onChange={() => dispatch(checkTodo(todo.id))}
              isChecked={todo.done}
            />
            <button
              className="control-button"
              onClick={() => {
                setEditValue(todo.title);
                setEdit(todo.id);
              }}
            >
              <i className="fa-solid fa-pencil"></i>
            </button>
            <button
              className="control-button"
              onClick={() => dispatch(deleteTodo(todo.id))}
            >
              <i className="fa-solid fa-trash-can"></i>
            </button>
          </div>
        </div>
      )}
    </li>
  );
};

export default TodoItem;

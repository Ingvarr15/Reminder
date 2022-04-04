import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import Button from 'ui/Button';
import Checkbox from 'react-checkbox-component';

import StyledTodoList from './TodoList.style';
import {addTodo, checkTodo, deleteTodo} from 'store/stores/main/mainSlice';
import {useAppSelector} from 'store/hooks';

const TodoList = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  const {todos} = useAppSelector(({main}) => ({
    todos: main.todos,
  }));

  const handleAddTodo = (e: React.SyntheticEvent) => {
    e.preventDefault();

    const trimedValue = value.trim();
    if (trimedValue === '') {
      setValue('');
      return;
    }

    const newTodo = {
      title: trimedValue,
      done: false,
      date: new Date('2022-04-23T13:07:38.083Z'),
      id: Math.random().toString().substring(2, 7),
    };

    dispatch(addTodo(newTodo));
    setValue('');
  };

  return (
    <StyledTodoList>
      <h1>ToDo List</h1>
      <form className="todo-form">
        <div className="input-wrapper">
          <input
            className="todo-form__input"
            type="text"
            value={value}
            onChange={(e) => setValue(e.currentTarget.value)}
          />
        </div>
        <Button scale={1} onClick={handleAddTodo}>
          Add
        </Button>
      </form>
      <div className="todo-list">
        <ul className="todo-list__inner">
          {todos.map((todo) => (
            <li className="todo-list__item" key={todo.id}>
              <div className="todo-title">{todo.title}</div>
              <div className="todo-control">
                <Checkbox
                  onChange={() => dispatch(checkTodo(todo.id))}
                  isChecked={todo.done}
                />
                <i
                  className="fa-solid fa-trash-can"
                  onClick={() => dispatch(deleteTodo(todo.id))}
                ></i>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </StyledTodoList>
  );
};

export default TodoList;

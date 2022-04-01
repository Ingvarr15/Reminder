import React, {useState} from 'react';
import {useDispatch} from 'react-redux';

import Button from 'ui/Button';

import StyledTodoList from './TodoList.style';
import {addTodo} from 'store/stores/main/mainSlice';

const TodoList = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const handleAddTodo = (e: React.SyntheticEvent) => {
    e.preventDefault();

    const newTodo = {
      title: value,
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
    </StyledTodoList>
  );
};

export default TodoList;

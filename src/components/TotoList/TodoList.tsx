import React, {useState} from 'react';
import Button from 'ui/Button';
import Checkbox from 'react-checkbox-component';

import TodoForm from './components/TodoForm';

import StyledTodoList from './TodoList.style';
import {checkTodo, deleteTodo, editTodo} from 'store/stores/main/mainSlice';
import {useAppDispatch, useAppSelector} from 'store/hooks';

const TodoList = () => {
  const [createNew, setCreateNew] = useState(false);
  const [edit, setEdit] = useState(null);
  const [editValue, setEditValue] = useState('');
  const dispatch = useAppDispatch();
  const {todos} = useAppSelector(({main}) => ({
    todos: main.todos,
  }));

  const handleSubmitEdit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const trimedValue = editValue.trim();
    if (trimedValue === '') {
      return;
    }

    dispatch(editTodo({id: edit, title: editValue}));
    setEdit(null);
  };

  return (
    <StyledTodoList>
      <h1>ToDo List</h1>
      {createNew ? (
        <TodoForm setCreateNew={setCreateNew} edit={edit} />
      ) : (
        <div className="button-new">
          <Button width={100} onClick={() => setCreateNew(true)}>
            + New
          </Button>
        </div>
      )}

      <div className="todo-list">
        <ul className="todo-list__inner">
          {todos.map((todo) => (
            <li className="todo-list__item" key={todo.id}>
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
                      onClick={handleSubmitEdit}
                    >
                      <i className="fa-regular fa-check"></i>
                    </button>
                    <button
                      className="control-button"
                      onClick={() => {
                        setEditValue('');
                        setEdit(null);
                      }}
                    >
                      <i className="fa-regular fa-xmark"></i>
                    </button>
                  </div>
                </div>
              ) : (
                <div className="todo-item__inner">
                  <div className="todo-title">{todo.title}</div>
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
          ))}
        </ul>
      </div>
    </StyledTodoList>
  );
};

export default TodoList;

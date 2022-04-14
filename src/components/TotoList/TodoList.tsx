import React, {useState} from 'react';
import Button from 'ui/Button';

import TodoForm from './components/TodoForm';

import StyledTodoList from './TodoList.style';
import {editTodo} from 'store/stores/main/mainSlice';
import {useAppDispatch, useAppSelector} from 'store/hooks';
import TodoItem from './components/TodoItem';

const TodoList = () => {
  const [createNew, setCreateNew] = useState(false);
  const [edit, setEdit] = useState(null);
  const dispatch = useAppDispatch();
  const {todos} = useAppSelector(({main}) => ({
    todos: main.todos,
  }));

  const handleSubmitEdit = (e: React.SyntheticEvent, editValue: string) => {
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
            <TodoItem
              todo={todo}
              edit={edit}
              setEdit={setEdit}
              handleSubmitEdit={handleSubmitEdit}
              key={todo.id}
            />
          ))}
        </ul>
      </div>
    </StyledTodoList>
  );
};

export default TodoList;

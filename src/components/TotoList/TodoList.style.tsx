import styled from 'styled-components';

const StyledTodoList = styled.div`
  width: 30%;
  padding-right: 10px;

  h1 {
    font-family: 'Yanone Kaffeesatz', sans-serif;
    font-size: 60px;
    text-align: center;
    margin-bottom: 10px;
  }

  .todo-list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .todo-form {
    display: flex;
  }

  .todo-form__input {
    width: 300px;
    height: 30px;
    margin-right: 5px;
    padding: 4px;
    font-size: 20px;
    font-family: ${({theme}) => theme.font.family};
    color: ${({theme}) => theme.colors.font};
    border: 2px solid;
    border-radius: 3px;
    background-color: transparent;
    outline: none;

    &:focus {
      border-color: ${({theme}) => theme.colors.darken};
    }
  }

  .todo-list__inner {
    width: 350px;
    padding: 10px;
    list-style: none;
  }

  .todo-title {
    word-break: break-word;
  }

  .todo-list__item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 5px;
    padding: 5px 10px;
    border: 2px solid;
    border-radius: 3px;
  }

  .todo-control {
    display: flex;
    align-items: center;
  }

  .checkbox {
    border-color: ${({theme}) => theme.colors.primary};
    border-radius: 5px !important;
  }

  .checkbox-selected {
    background-color: ${({theme}) => theme.colors.primary};
    border-radius: 3px !important;
  }

  .fa-trash-can {
    color: red;
  }
`;

export default StyledTodoList;

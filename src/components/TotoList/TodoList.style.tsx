import styled from 'styled-components';

const StyledTodoList = styled.div`
  width: 30%;
  padding-right: 10px;
  background-color: ${({theme}) => theme.colors.background};

  h1 {
    font-family: 'Yanone Kaffeesatz', sans-serif;
    font-size: 60px;
    text-align: center;
    margin-bottom: 10px;
  }

  .todo-form {
    display: flex;
  }

  .input-wrapper {
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
    border-color: ${({theme}) => theme.colors.primary};
    border-radius: 3px;
    background-color: transparent;
    outline: none;

    &:focus {
      border-color: ${({theme}) => theme.colors.darken};
    }
  }

  .todo-list__inner {
    padding: 10px;
    list-style: none;
  }

  .todo-list__item {
    margin-bottom: 5px;
    padding: 5px;
    background-color: ${({theme}) => theme.colors.blur};
    border: 2px solid;
    border-color: ${({theme}) => theme.colors.primary};
    border-radius: 3px;
  }
`;

export default StyledTodoList;

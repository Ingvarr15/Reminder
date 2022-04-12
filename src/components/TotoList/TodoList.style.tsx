import styled from 'styled-components';

const StyledTodoList = styled.div`
  width: 35%;
  padding-right: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-family: 'Yanone Kaffeesatz', sans-serif;
    font-size: 60px;
    text-align: center;
    margin-bottom: 10px;
  }

  .todo-list {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .button-new {
    padding-left: 10px;
    align-self: flex-start;
  }

  .todo-form {
    width: 90%;
    position: relative;
    padding: 25px 15px 10px;
    border: 2px solid;
    border-color: ${({theme}) => theme.colors.font};
    border-radius: 3px;
  }

  .close-btn {
    font-size: 22px;
    &:hover {
      color: ${({theme}) => theme.colors.primary};
    }
  }

  .todo-form-input {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .todo-options {
    display: flex;
    align-items: center;
    padding-top: 10px;
  }

  .todo-option__item {
    margin-right: 5px;
  }

  .close-form {
    position: absolute;
    top: 0;
    right: 5px;
  }

  .view-state {
    position: relative;
    margin-top: 10px;
    text-align: center;
    font-style: italic;
  }

  .overall-state {
    opacity: 0.6;
  }

  .view-all {
    position: absolute;
    top: 0;
    right: 0;
    font-style: normal;
    color: ${({theme}) => theme.colors.primary};
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }

  .todo-form__input {
    width: 100%;
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
    padding: 10px;
    list-style: none;
  }

  .todo-title {
    word-break: break-word;
  }

  .todo-list__item {
    margin-bottom: 5px;
    padding: 5px 10px;
    border: 2px solid;
    border-radius: 3px;
  }

  .todo-edit__input {
    width: 100%;
    padding: 0;
    font-family: ${({theme}) => theme.font.family};
    font-size: ${({theme}) => theme.font.size};
    color: ${({theme}) => theme.colors.font};
    border: 0;
    background-color: transparent;
    outline: none;
  }

  .todo-item__edit {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .todo-item__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .todo-control {
    display: flex;
    align-items: center;
  }

  .checkbox {
    margin: 0 !important;
    border-color: ${({theme}) => theme.colors.primary};
    border-radius: 5px !important;
  }

  .checkbox-selected {
    background-color: ${({theme}) => theme.colors.primary};
    border-radius: 3px !important;
  }

  .fa-solid {
    cursor: pointer;
  }

  .control-button {
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 5px;
    color: ${({theme}) => theme.colors.font};
    background-color: ${({theme}) => theme.colors.primary};
    border: 1px solid;
    border-color: ${({theme}) => theme.colors.primary};
    border-radius: 3px;

    &:active {
      background-color: ${({theme}) => theme.colors.darken};
    }
  }

  .react-time-picker__wrapper {
    display: flex;
    align-items: center;
    border: 0;
  }

  .react-time-picker__inputGroup {
    min-width: auto;
    margin-right: 5px;
  }

  .react-time-picker__inputGroup__input {
    min-width: 20px;
    color: ${({theme}) => theme.colors.font};
    background-color: transparent;
    outline: none;
    border: 0;
    border-bottom: 2px solid;
    border-color: ${({theme}) => theme.colors.primary};
    appearance: none;
  }

  .react-time-picker__inputGroup__leadingZero {
    display: none;
  }

  .react-time-picker__inputGroup__input--hasLeadingZero {
    margin-left: 0;
    padding: 0px 1px;
  }

  .react-time-picker__button {
    display: none;
  }

  .form-tip {
    position: absolute;
    right: 10px;
  }

  .todo-date {
    font-size: ${({theme}) => parseInt(theme.font.size) * 0.7}px;
    opacity: 0.7;
  }
`;

export default StyledTodoList;

import styled from 'styled-components';

const StyledLeftSide = styled.div`
  width: 30%;

  .tab-switcher {
    display: flex;
    padding: 0 20px;
  }

  .tab-switcher__item {
    padding: 2px 5px 0;
    border: 2px solid ${({theme}) => theme.colors.font};
    border-bottom: 0;
    border-radius: 3px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    cursor: pointer;
    user-select: none;

    &:first-child {
      margin-right: 20px;
    }
  }

  .active {
    color: ${({theme}) => theme.colors.primary};
  }

  .left-side-inner {
    width: 85%;
    min-height: 260px;
    margin-bottom: 15px;
    position: relative;
    padding: 15px;
    border: 2px solid ${({theme}) => theme.colors.font};
    border-radius: 3px;
  }

  .links-header {
    position: relative;
    display: flex;
    justify-content: center;
    padding-left: 35px;
    margin-bottom: 10px 0;
  }

  .links-header__btn {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1000;
  }

  .links-form {
    width: 90%;
    position: relative;
    padding: 10px;
    border: 2px solid;
    border-color: ${({theme}) => theme.colors.font};
    border-radius: 3px;
  }

  .close-form {
    position: absolute;
    top: 0;
    right: 5px;
    cursor: pointer;
  }

  .close-btn {
    font-size: 22px;
    &:hover {
      color: ${({theme}) => theme.colors.primary};
    }
  }

  .links-list {
    display: flex;
    justify-content: center;
    list-style: none;
    flex-wrap: wrap;
  }

  .links-list__item {
    position: relative;
    padding: 10px;
    user-select: none;

    &:not(:nth-child(3n)) {
      margin-right: 5px;
    }

    &:hover .link-item__delete {
      opacity: 1;
    }

    &:hover .link-item__edit {
      opacity: 1;
    }
  }

  .links-item__input,
  .notes-form__input {
    width: 50%;
    margin-bottom: 10px;
    font-family: ${({theme}) => theme.font.family};
    color: ${({theme}) => theme.colors.font};
    border: 0;
    border-bottom: 2px solid;
    background-color: transparent;
    outline: none;
  }

  .link-item__delete {
    position: absolute;
    top: 0;
    right: 5px;
    z-index: 1000;
    opacity: 0;
  }

  .link-item__edit {
    position: absolute;
    top: 0;
    left: 5px;
    z-index: 1000;
    opacity: 0;
  }

  .delete-btn {
    font-size: ${({theme}) => parseInt(theme.font.size) * 0.7}px;
  }

  .edit-btn {
    font-size: ${({theme}) => parseInt(theme.font.size) * 0.5}px;
  }

  .link-item__icon {
    display: block;
    cursor: pointer;

    &:hover {
      color: ${({theme}) => theme.colors.primary};
    }
  }

  .link-item__a {
    width: 60px;
    height: 63px;
    display: flex;
    flex-direction: column;
    font-size: ${({theme}) => parseInt(theme.font.size) * 0.8}px;
    color: ${({theme}) => theme.colors.font};
    align-items: center;
    text-decoration: none;
    word-break: break-word;
    overflow: hidden;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }

  .link-item__img {
    height: 24px;
    margin-bottom: 5px;
  }

  .notes-form__input {
    width: 90%;
  }

  .input {
    margin-left: 2px;
  }

  .textarea {
    font-family: ${({theme}) => theme.font.family};
    border: 2px solid ${({theme}) => theme.colors.font};
    border-radius: 3px;
    appearance: none;
    resize: none;
    height: auto;
  }

  .notes-form__buttons {
    display: flex;
    justify-content: flex-end;
    padding-right: 23px;
  }

  .notes-list {
    margin-top: 10px;
    padding: 0;
    list-style: none;
  }

  .notes-list__item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
    border: 2px solid transparent;
    border-radius: 3px;
    cursor: pointer;

    &:hover {
      border-color: ${({theme}) => theme.colors.font};
    }
  }

  .section-is-empty {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    font-style: italic;
    opacity: 0.4;
  }

  .control-button {
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 5px;
    color: ${({theme}) => theme.colors.font};
    background-color: ${({theme}) => theme.colors.primary};
    border: 1px solid;
    border-color: ${({theme}) => theme.colors.primary};
    border-radius: 3px;
    cursor: pointer;

    &:active {
      background-color: ${({theme}) => theme.colors.darken};
    }
  }

  .fa-trash-can {
    pointer-events: none;
  }
`;

export default StyledLeftSide;

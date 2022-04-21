import styled from 'styled-components';

const StyledLinks = styled.div`
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

  .links-item__input {
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
`;

export default StyledLinks;

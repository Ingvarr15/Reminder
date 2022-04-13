import styled from 'styled-components';

const StyledLinks = styled.div`
  width: 30%;

  .links-form {
    position: relative;
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
`;

export default StyledLinks;

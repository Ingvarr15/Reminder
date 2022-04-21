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
    background-color: ${({theme}) => theme.colors.font};
  }

  .left-side-inner {
    width: 85%;
    min-height: 100px;
    padding: 15px;
    border: 2px solid ${({theme}) => theme.colors.font};
    border-radius: 3px;
  }
`;

export default StyledLeftSide;

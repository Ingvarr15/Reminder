import styled from 'styled-components';

const MainStyles = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${({theme}) => theme.colors.background};
  font-family: ${({theme}) => theme.font.family};
  font-size: ${({theme}) => theme.font.size};
  color: ${({theme}) => theme.colors.font};
  * {
    transition: all 0.2s ease;
  }

  transition: all 0.2s ease;

  button {
    font-family: ${({theme}) => theme.font.family};
    font-size: ${({theme}) => theme.font.size};
  }
`;

export default MainStyles;

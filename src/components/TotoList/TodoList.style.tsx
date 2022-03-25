import styled from 'styled-components';

const StyledTodoList = styled.div`
  width: 40%;
  padding-right: 10px;
  background-color: ${({theme}) => theme.colors.background};
`;

export default StyledTodoList;

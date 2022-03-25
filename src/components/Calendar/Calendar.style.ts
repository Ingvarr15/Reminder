import styled from 'styled-components';

const StyledCalendar = styled.div`
  width: 60%;
  padding-left: 10px;

  .react-calendar {
  }

  .calendar-item {
    width: 50px;
    height: 50px;
    position: relative;
  }

  .calendar-badge {
    position: absolute;
    bottom: 0;
    right: 10px;
    padding: 0 3px;
    background-color: green;
    border-radius: 10px;
    font-size: 10px;
    color: white;
  }
`;

export default StyledCalendar;

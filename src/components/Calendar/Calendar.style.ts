import styled from 'styled-components';

const StyledCalendar = styled.div`
  width: 60%;
  padding-left: 10px;

  .fc-daygrid-day-frame {
    max-height: 25px !important;
  }

  .fc-daygrid-event-dot {
    border: calc(var(--fc-daygrid-event-dot-width, 8px) / 2) solid #6c37d8;
  }

  .fc-daygrid-day-number {
    color: ${({theme}) => theme.colors.font} !important;
  }

  .fc-button-primary {
    background-color: ${({theme}) => theme.colors.primary};
    border-color: ${({theme}) => theme.colors.primary} !important;
  }

  .fc-button-active {
    background-color: ${({theme}) => theme.colors.darken} !important;
    border-color: ${({theme}) => theme.colors.darken} !important;
  }

  .fc-button[disabled] {
    background-color: ${({theme}) => theme.colors.darken};
    border-color: ${({theme}) => theme.colors.darken} !important;
  }

  .fc-day-today {
    background-color: ${({theme}) => theme.colors.primary + 43} !important;
  }

  .fc-daygrid-event-dot {
    border-color: ${({theme}) => theme.colors.primary} !important;
  }

  .fc-day-today .fc-daygrid-event-dot {
    border-color: gold !important;
  }
`;

export default StyledCalendar;

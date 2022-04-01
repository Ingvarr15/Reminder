import styled from 'styled-components';

const StyledCalendar = styled.div`
  width: 40%;
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

  /* -------------------------------------------------------------------- */

  .react-calendar {
  }

  .react-calendar__navigation__prev2-button,
  .react-calendar__navigation__next2-button {
    display: none;
  }

  .react-calendar__navigation {
    margin-bottom: 8px;
  }

  .react-calendar__month-view__weekdays__weekday abbr {
    text-decoration: none;
  }

  .react-calendar__navigation__arrow,
  .react-calendar__navigation__label {
    margin-right: 3px;
    padding: 5px 10px;
    font-family: ${({theme}) => theme.font.family};
    font-size: ${({theme}) => theme.font.size};
    color: ${({theme}) => theme.colors.font};
    background-color: ${({theme}) => theme.colors.primary};
    border: 1px solid;
    border: 1px solid;
    border-radius: 3px;
    border-color: ${({theme}) => theme.colors.primary};

    &:active {
      background-color: ${({theme}) => theme.colors.darken};
    }
  }

  .react-calendar__month-view__days {
    border: 1px solid;
  }

  .react-calendar__tile {
    height: 50px;
    position: relative;
    display: flex;
    padding-top: 5px;
    font-family: ${({theme}) => theme.font.family};
    font-size: ${({theme}) => theme.font.size};
    color: ${({theme}) => theme.colors.font};
    background-color: transparent;
    border: 1px solid;
    border-color: ${({theme}) => theme.colors.font};
  }

  .react-calendar__tile--now {
    background-color: ${({theme}) => theme.colors.blur};
  }

  .badge {
    width: ${({theme}) => parseInt(theme.font.size) * 1.1}px;
    height: ${({theme}) => parseInt(theme.font.size) * 1.1}px;
    position: absolute;
    right: 10%;
    bottom: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    background-color: ${({theme}) => theme.colors.primary};
    font-size: 12px;
    font-size: ${({theme}) => parseInt(theme.font.size) * 0.8}px;
    text-align: center;
  }

  .badge-inner {
    margin-top: 2px;
    margin-left: 1px;
  }
`;

export default StyledCalendar;

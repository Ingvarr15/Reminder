import React from 'react';
import {useAppDispatch, useAppSelector} from 'store/hooks';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import enGBlocale from '@fullcalendar/core/locales/en-gb';
import interactionPlugin, {DateClickArg} from '@fullcalendar/interaction';
import moment from 'moment';

import StyledCalendar from './Calendar.style';
import {RootState} from 'store/store';
import {setTheme} from 'store/stores/main/mainSlice';

moment.locale('en-gb');

const Calendar = () => {
  const dispatch = useAppDispatch();
  const {theme, todos} = useAppSelector(({main}: RootState) => ({
    theme: main.theme,
    todos: main.todos,
  }));

  const handleToggleTheme = () => {
    switch (theme) {
      case 'orangeGreen':
        dispatch(setTheme('bluePurple'));
        break;
      case 'bluePurple':
        dispatch(setTheme('orangeGreen'));
        break;
      // case 'dark':
      //   dispatch(setTheme('orangeGreen'));
      //   break;
    }
  };

  const handleDateClick = (props: DateClickArg) => {
    console.log(props);
  };

  return (
    <StyledCalendar>
      <FullCalendar
        locale={enGBlocale}
        eventDisplay="list-item"
        plugins={[dayGridPlugin, interactionPlugin]}
        displayEventTime={false}
        dayMaxEventRows={3}
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,dayGridWeek,dayGridDay',
        }}
        events={todos}
        dateClick={handleDateClick}
      />

      <button onClick={handleToggleTheme}>toggle theme</button>
    </StyledCalendar>
  );
};

export default Calendar;

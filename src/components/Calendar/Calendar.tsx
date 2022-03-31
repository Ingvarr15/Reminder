import React from 'react';
import {useAppDispatch, useAppSelector} from 'store/hooks';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import enGBlocale from '@fullcalendar/core/locales/en-gb';
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
        dispatch(setTheme('dark'));
        break;
      case 'dark':
        dispatch(setTheme('orangeGreen'));
        break;
    }
  };

  return (
    <StyledCalendar>
      <FullCalendar
        locale={enGBlocale}
        eventDisplay="list-item"
        plugins={[dayGridPlugin]}
        slotDuration={'00:45:00'}
        displayEventTime={false}
        handleWindowResize={true}
        themeSystem="bootstrap"
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,dayGridWeek,dayGridDay',
        }}
        events={todos}
        editable={true}
        droppable={true}
        selectable={true}
      />

      <button onClick={handleToggleTheme}>toggle theme</button>
    </StyledCalendar>
  );
};

export default Calendar;

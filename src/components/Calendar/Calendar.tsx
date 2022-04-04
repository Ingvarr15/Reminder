import React, {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from 'store/hooks';
import moment from 'moment';
import RCalendar from 'react-calendar';

import Button from 'ui/Button';

import StyledCalendar from './Calendar.style';
import {RootState} from 'store/store';
import {setTheme} from 'store/stores/main/mainSlice';

const Calendar = () => {
  const [date, setDate] = useState(new Date());
  const dispatch = useAppDispatch();
  const {theme, todos} = useAppSelector(({main}: RootState) => ({
    theme: main.theme,
    todos: main.todos,
  }));

  const renderBadges = () => {
    const tiles = document.querySelectorAll('.react-calendar__tile');

    tiles.forEach((tile) => {
      const dateLabel = tile.children[0]?.getAttribute('aria-label');
      const dayTodos = todos.filter(
        (todo) => moment(todo.date).format('DD MMMM YYYY') === dateLabel,
      );

      if (dayTodos.length !== 0) {
        if (tile.children.length < 2) {
          const badge = document.createElement('div');
          const badgeInner = document.createElement('span');
          badge.classList.add('badge');
          badgeInner.classList.add('badge-inner');
          badgeInner.innerHTML = dayTodos.length.toString();
          badge.appendChild(badgeInner);
          tile.appendChild(badge);
        } else {
          tile.children[1].innerHTML = dayTodos.length.toString();
        }
      } else {
        tile.children[1]?.remove();
      }
    });
  };

  useEffect(() => {
    renderBadges();
  }, [todos, date]);

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

  // const handleDateClick = (props: DateClickArg) => {
  //   console.log(props);
  // };

  return (
    <StyledCalendar>
      {/* <FullCalendar
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
      /> */}
      <RCalendar
        view="month"
        locale="en-GB"
        activeStartDate={date}
        // onActiveStartDateChange={}
        onDrillUp={() => setDate(new Date())}
        onActiveStartDateChange={({activeStartDate}) =>
          setDate(activeStartDate)
        }
      />

      <Button onClick={handleToggleTheme} scale={1}>
        toggle theme
      </Button>
    </StyledCalendar>
  );
};

export default Calendar;

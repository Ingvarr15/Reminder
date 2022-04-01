import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from 'store/hooks';
import moment from 'moment';
import RCalendar from 'react-calendar';

import Button from 'ui/Button';

import StyledCalendar from './Calendar.style';
import {RootState} from 'store/store';
import {setTheme} from 'store/stores/main/mainSlice';

const Calendar = () => {
  const dispatch = useAppDispatch();
  const {theme, todos} = useAppSelector(({main}: RootState) => ({
    theme: main.theme,
    todos: main.todos,
  }));

  const renderBadges = () => {
    const tiles = document.querySelectorAll('.react-calendar__tile');
    todos.forEach((todo) => {
      const todoDate = moment(todo.date).format('DD MMMM YYYY');
      const sameDayTodos = todos.filter((sameTodo) =>
        moment(sameTodo.date).format('DD MMMM YYYY'),
      );

      tiles.forEach((item) => {
        if (item.children[0].getAttribute('aria-label') === todoDate) {
          if (item.children.length < 2) {
            const badge = document.createElement('div');
            const badgeInner = document.createElement('span');
            badge.classList.add('badge');
            badgeInner.classList.add('badge-inner');
            badgeInner.innerHTML = sameDayTodos.length.toString();
            badge.appendChild(badgeInner);
            item.appendChild(badge);
          } else {
            item.children[1].innerHTML = sameDayTodos.length.toString();
          }
        }
      });
    });
  };

  useEffect(() => {
    renderBadges();
    console.log(123);
  }, [todos]);

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
      <RCalendar locale="en-GB" onActiveStartDateChange={renderBadges} />

      <Button onClick={handleToggleTheme} scale={1}>
        toggle theme
      </Button>
    </StyledCalendar>
  );
};

export default Calendar;

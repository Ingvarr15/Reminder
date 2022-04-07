import React, {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from 'store/hooks';
import RCalendar from 'react-calendar';
import OutsideClickHandler from 'react-outside-click-handler';
import {useTheme} from 'styled-components';

// import Button from 'ui/Button';
import DailyView from './components/DailyView';

import {getDayTitle, renderBadges, selectDay} from './Calendar.utils';
import StyledCalendar from './Calendar.style';
import {RootState} from 'store/store';
import {setTheme} from 'store/stores/main/mainSlice';
import moment from 'moment';
import {DAY_FORMAT} from 'constantsList';

const Calendar = () => {
  const [date, setDate] = useState(new Date());
  const [selected, setSelected] = useState(new Date());
  const [todayTodos, setTodayTodos] = useState([]);
  const [shownDate, setShownDate] = useState('');
  const dispatch = useAppDispatch();
  const currentTheme: any = useTheme();
  const {theme, todos} = useAppSelector(({main}: RootState) => ({
    theme: main.theme,
    todos: main.todos,
  }));

  useEffect(() => {
    renderBadges(todos);
  }, [todos, date]);

  useEffect(() => {
    setShownDate(getDayTitle(selected));
  }, [selected]);

  useEffect(() => {
    const filteredTodos = todos.filter(
      (todo) =>
        moment(todo.date).format(DAY_FORMAT) ===
        moment(selected).format(DAY_FORMAT),
    );
    setTodayTodos(filteredTodos);
  }, [todos, selected]);

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
  handleToggleTheme;

  return (
    <StyledCalendar>
      <OutsideClickHandler
        onOutsideClick={() => {
          selectDay(currentTheme, null);
          setSelected(new Date());
        }}
      >
        <RCalendar
          view="month"
          locale="en-GB"
          activeStartDate={date}
          onClickDay={(value: Date) => {
            selectDay(currentTheme, value);
          }}
          onDrillUp={() => {
            setDate(new Date());
            setSelected(new Date());
          }}
          onActiveStartDateChange={({activeStartDate}) =>
            setDate(activeStartDate)
          }
          onChange={(value: Date) => setSelected(value)}
        />

        <DailyView shownDate={shownDate} todayTodos={todayTodos} />

        {/* <Button onClick={handleToggleTheme} scale={1}>
          toggle theme
        </Button> */}
      </OutsideClickHandler>
    </StyledCalendar>
  );
};

export default Calendar;

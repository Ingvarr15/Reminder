import React, {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from 'store/hooks';
import RCalendar from 'react-calendar';
import OutsideClickHandler from 'react-outside-click-handler';
import {useTheme} from 'styled-components';

import Button from 'ui/Button';
import DailyView from './components/DailyView';

import {renderBadges, selectDay} from './Calendar.utils';
import StyledCalendar from './Calendar.style';
import {RootState} from 'store/store';
import {setTheme} from 'store/stores/main/mainSlice';
import moment from 'moment';

const Calendar = () => {
  const [date, setDate] = useState(new Date());
  const [dailyShown, setDailyShown] = useState(false);
  const [selected, setSelected] = useState(null);
  const [todayTodos, setTodayTodos] = useState([]);
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
    setTodayTodos(
      todos.filter(
        (todo) =>
          moment(todo.date).format('D MMMM YYYY') ===
          moment(selected).format('D MMMM YYYY'),
      ),
    );
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

  return (
    <StyledCalendar>
      <OutsideClickHandler
        onOutsideClick={() => {
          setDailyShown(false);
          selectDay(currentTheme, null);
          setTodayTodos([]);
        }}
      >
        <RCalendar
          view="month"
          locale="en-GB"
          activeStartDate={date}
          onClickDay={(value) => {
            setDailyShown(true);
            selectDay(currentTheme, value);
          }}
          onDrillUp={() => setDate(new Date())}
          onActiveStartDateChange={({activeStartDate}) =>
            setDate(activeStartDate)
          }
          onChange={(value: Date) => setSelected(value)}
        />

        <DailyView dailyShown={dailyShown} todayTodos={todayTodos} />

        <Button onClick={handleToggleTheme} scale={1}>
          toggle theme
        </Button>
      </OutsideClickHandler>
    </StyledCalendar>
  );
};

export default Calendar;

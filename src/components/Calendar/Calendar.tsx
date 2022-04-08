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
import {selectDate} from 'store/stores/form/formSlice';

const Calendar = () => {
  const [date, setDate] = useState(new Date());
  const [selected, setSelected] = useState(new Date());
  const [todayTodos, setTodayTodos] = useState([]);
  const [shownDate, setShownDate] = useState('');
  const dispatch = useAppDispatch();
  const currentTheme: any = useTheme();
  const {theme, todos, newTodoWithDate, selectedDate} = useAppSelector(
    ({main, form}: RootState) => ({
      theme: main.theme,
      todos: main.todos,
      newTodoWithDate: form.newTodoWithDate,
      selectedDate: form.selectedDate,
    }),
  );

  useEffect(() => {
    renderBadges(todos);
  }, [todos, date]);

  useEffect(() => {
    setShownDate(getDayTitle(selected));
  }, [selected]);

  useEffect(() => {
    const filteredTodos = todos.filter(
      (todo) => todo.date === moment(selected).format(DAY_FORMAT),
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

  const handleCkickDay = (value: Date) => {
    selectDay(currentTheme, value, newTodoWithDate);
    if (newTodoWithDate) {
      dispatch(selectDate(moment(value).format(DAY_FORMAT)));
    }
  };

  useEffect(() => {
    if (!newTodoWithDate) {
      selectDay(currentTheme, null, newTodoWithDate);
    }
  }, [newTodoWithDate]);

  return (
    <StyledCalendar>
      <OutsideClickHandler
        onOutsideClick={() => {
          if (newTodoWithDate) {
            selectDay(currentTheme, new Date(selectedDate), newTodoWithDate);
          } else {
            selectDay(currentTheme, null, newTodoWithDate);
          }
          setSelected(new Date());
        }}
      >
        <RCalendar
          view="month"
          locale="en-GB"
          activeStartDate={date}
          onClickDay={(value) => handleCkickDay(value)}
          onDrillUp={() => {
            setDate(new Date());
            setSelected(new Date());
          }}
          onActiveStartDateChange={({activeStartDate}) =>
            setDate(activeStartDate)
          }
          onChange={(value: Date) => setSelected(value)}
        />
        {!newTodoWithDate && (
          <DailyView shownDate={shownDate} todayTodos={todayTodos} />
        )}

        {/* <Button onClick={handleToggleTheme} scale={1}>
          toggle theme
        </Button> */}
      </OutsideClickHandler>
    </StyledCalendar>
  );
};

export default Calendar;

import React from 'react';
import {useAppDispatch, useAppSelector} from 'store/hooks';
import {setTheme} from 'store/stores/main/mainSlice';

import StyledCalendar from './Calendar.style';

const Calendar = () => {
  const dispatch = useAppDispatch();
  const {theme} = useAppSelector(({main}: any) => ({
    theme: main.theme,
  }));

  const toggleThemehandler = (): void => {
    dispatch(setTheme(theme === 'light' ? 'dark' : 'light'));
  };

  return (
    <StyledCalendar>
      <button onClick={toggleThemehandler}>theme</button>
    </StyledCalendar>
  );
};

export default Calendar;

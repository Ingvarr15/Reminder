import React, {useEffect, useState} from 'react';

import Links from 'components/Links/Links';
import TodoList from 'components/TotoList/TodoList';
import Calendar from './components/Calendar/Calendar';

import StyledThemeProvider from 'ui/StyledThemeProvider';
import AppContainer from 'ui/AppContainer';
import {useAppDispatch, useAppSelector} from 'store/hooks';
import {loadState, saveState} from 'store/stores/main/mainSlice';

const App = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state);

  const selectDate = (date: string) => {
    setSelectedDate(date === selectedDate || date === null ? null : date);
  };

  useEffect(() => {
    dispatch(loadState());
  }, []);

  useEffect(() => {
    dispatch(saveState());
  }, [state]);

  return (
    <StyledThemeProvider>
      <AppContainer>
        <Links />
        <TodoList selectedDate={selectedDate} selectDate={selectDate} />
        <Calendar selectDate={selectDate} />
      </AppContainer>
    </StyledThemeProvider>
  );
};

export default App;

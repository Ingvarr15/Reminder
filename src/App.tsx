import React, {useEffect} from 'react';

import Links from 'components/Links/Links';
import TodoList from 'components/TotoList/TodoList';
import Calendar from './components/Calendar/Calendar';

import StyledThemeProvider from 'ui/StyledThemeProvider';
import AppContainer from 'ui/AppContainer';
import {useAppDispatch, useAppSelector} from 'store/hooks';
import {loadState, saveState} from 'store/stores/main/mainSlice';

const App = () => {
  const dispatch = useAppDispatch();
  const {todos, theme, links} = useAppSelector(({main}) => ({
    todos: main.todos,
    theme: main.theme,
    links: main.links,
  }));

  useEffect(() => {
    dispatch(loadState());
  }, []);

  useEffect(() => {
    dispatch(saveState());
  }, [todos, theme, links]);

  return (
    <StyledThemeProvider>
      <AppContainer>
        <Links />
        <TodoList />
        <Calendar />
      </AppContainer>
    </StyledThemeProvider>
  );
};

export default App;

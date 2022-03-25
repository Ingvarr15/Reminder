import React from 'react';
import {Provider} from 'react-redux';

import Calendar from './components/Calendar/Calendar';
import TodoList from 'components/TotoList/TodoList';

import store from 'store/store';
import StyledThemeProvider from 'ui/StyledThemeProvider';
import AppContainer from 'ui/AppContainer';

const App = () => {
  return (
    <Provider store={store}>
      <StyledThemeProvider>
        <AppContainer>
          <TodoList />
          <Calendar />
        </AppContainer>
      </StyledThemeProvider>
    </Provider>
  );
};

export default App;

import React from 'react';
import {Provider} from 'react-redux';
import LocaleProvider from 'antd/lib/locale-provider';
import enGb from 'antd/lib/locale-provider/en_GB';

import Calendar from './components/Calendar/Calendar';
import TodoList from 'components/TotoList/TodoList';

import store from 'store/store';
import StyledThemeProvider from 'ui/StyledThemeProvider';
import AppContainer from 'ui/AppContainer';

const App = () => {
  return (
    <Provider store={store}>
      <LocaleProvider locale={enGb}>
        <StyledThemeProvider>
          <AppContainer>
            <TodoList />
            <Calendar />
          </AppContainer>
        </StyledThemeProvider>
      </LocaleProvider>
    </Provider>
  );
};

export default App;

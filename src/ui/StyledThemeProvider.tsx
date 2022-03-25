import React from 'react';
import {ThemeProvider} from 'styled-components';

import {useAppSelector} from 'store/hooks';
import themes from './theme';
import {RootState} from 'store/store';
import MainStyles from './MainStyles';

const StyledThemeProvider: React.FC = ({children}) => {
  const {theme} = useAppSelector(({main}: RootState) => ({
    theme: main.theme,
  }));

  return (
    <ThemeProvider theme={themes[theme]}>
      <MainStyles>{children}</MainStyles>
    </ThemeProvider>
  );
};

export default StyledThemeProvider;

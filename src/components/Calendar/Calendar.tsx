import React from 'react';
import {useAppDispatch, useAppSelector} from 'store/hooks';
import AntCalendar from 'antd/lib/calendar';
import Badge from 'antd/lib/badge';
import moment from 'moment';
import 'moment/locale/en-gb';
import 'antd/dist/antd.css';
import './lessTheme.less';

import StyledCalendar from './Calendar.style';
import {setTheme} from 'store/stores/main/mainSlice';
import {RootState} from 'store/store';
import {TTodo} from 'store/stores/main/types';

moment.locale('en-gb');

const Calendar = () => {
  const dispatch = useAppDispatch();
  const {theme, todos} = useAppSelector(({main}: RootState) => ({
    theme: main.theme,
    todos: main.todos,
  }));

  const toggleThemehandler = () => {
    dispatch(setTheme(theme === 'light' ? 'dark' : 'light'));
  };

  const getListData = (value: moment.Moment) => {
    return todos.filter(
      (item: TTodo) =>
        moment(item.date).date() === value.date() &&
        moment(item.date).month() === value.month() &&
        moment(item.date).year() === value.year(),
    );
  };

  const dateCellRender = (value: moment.Moment) => {
    const listData = getListData(value);

    return (
      <ul className="events">
        {listData.map((item: TTodo) => (
          <li key={item.text}>
            <Badge color={item.badge} text={item.text} />
          </li>
        ))}
      </ul>
    );
  };

  return (
    <StyledCalendar>
      <AntCalendar dateCellRender={dateCellRender} />
      <button onClick={toggleThemehandler}>theme</button>
    </StyledCalendar>
  );
};

export default Calendar;

import React from 'react';

import {TTodo} from 'store/stores/main/types';

const DailyView = ({dailyShown, todayTodos}) => {
  if (!dailyShown) return null;

  return (
    <div>
      For today:
      <ul>
        {todayTodos.map((todo: TTodo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default DailyView;

import React from 'react';

import {TTodo} from 'store/stores/main/types';

const DailyView = ({shownDate, todayTodos}) => {
  return (
    <div className="daily-container">
      For {shownDate}:
      {todayTodos.length === 0 ? (
        <div>
          {'<'}Nothing...{'>'}
        </div>
      ) : (
        <ul>
          {todayTodos.map((todo: TTodo) => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DailyView;

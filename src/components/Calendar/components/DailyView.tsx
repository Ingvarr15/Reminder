import React from 'react';
import classnames from 'classnames';

import {TTodo} from 'store/stores/main/types';

const DailyView = ({shownDate, todayTodos}) => {
  return (
    <div className="daily-container">
      For {shownDate}:
      {todayTodos.length === 0 ? (
        <div className="todos-nothing">
          {'<'}Nothing...{'>'}
        </div>
      ) : (
        <ul>
          {todayTodos.map((todo: TTodo) => (
            <li
              className={classnames({'completed-todo': todo.done})}
              key={todo.id}
            >
              {todo.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DailyView;

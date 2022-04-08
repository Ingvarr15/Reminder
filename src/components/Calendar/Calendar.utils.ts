import moment from 'moment';

import {DAY_FORMAT} from 'constantsList';
import {TTodo} from 'store/stores/main/types';

export const renderBadges = (todos: Array<TTodo>) => {
  const tiles = document.querySelectorAll('.react-calendar__tile');

  tiles.forEach((tile) => {
    const dateLabel = tile.children[0]?.getAttribute('aria-label');
    const dayTodos = todos.filter((todo) => todo.date === dateLabel);

    if (dayTodos.length !== 0) {
      if (tile.children.length < 2) {
        const badge = document.createElement('div');
        const badgeInner = document.createElement('span');
        badge.classList.add('badge');
        badgeInner.classList.add('badge-inner');
        badgeInner.innerHTML = dayTodos.length.toString();
        badge.appendChild(badgeInner);
        tile.appendChild(badge);
      } else {
        tile.children[1].innerHTML = dayTodos.length.toString();
      }
    } else {
      tile.children[1]?.remove();
    }
  });
};

export const selectDay = (
  currentTheme: any,
  value: Date | null,
  newTodoWithDate: boolean,
) => {
  const formattedValue = moment(value).format(DAY_FORMAT);
  const tiles: NodeListOf<HTMLElement> = document.querySelectorAll(
    '.react-calendar__tile',
  );
  tiles.forEach((tile) => {
    tile.style.background = 'transparent';
    tile.style.borderColor = currentTheme.colors.font;
    tile.children[0].classList.remove('selected-abbr');
  });

  if (value) {
    tiles.forEach((tile) => {
      const dateLabel = tile.children[0]?.getAttribute('aria-label');
      if (formattedValue === dateLabel) {
        if (newTodoWithDate) {
          tile.style.borderColor = currentTheme.colors.primary;
          tile.children[0].classList.add('selected-abbr');
        } else {
          tile.style.background = currentTheme.colors.blur;
        }
      }
    });
  }
};

export const getDayTitle = (selected: Date) => {
  if (
    moment(selected).format(DAY_FORMAT) ===
    moment(new Date()).format(DAY_FORMAT)
  ) {
    return 'today';
  } else if (
    moment(selected).format(DAY_FORMAT) ===
    moment(new Date()).add(1, 'day').format(DAY_FORMAT)
  ) {
    return 'tomorrow';
  } else {
    return moment(selected).format(DAY_FORMAT);
  }
};

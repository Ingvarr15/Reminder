import moment from 'moment';

import {TTodo} from 'store/stores/main/types';

export const renderBadges = (todos: Array<TTodo>) => {
  const tiles = document.querySelectorAll('.react-calendar__tile');

  tiles.forEach((tile) => {
    const dateLabel = tile.children[0]?.getAttribute('aria-label');
    const dayTodos = todos.filter(
      (todo) => moment(todo.date).format('D MMMM YYYY') === dateLabel,
    );

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

export const selectDay = (currentTheme: any, value: Date | null) => {
  const formattedValue = moment(value).format('D MMMM YYYY');
  const tiles: NodeListOf<HTMLElement> = document.querySelectorAll(
    '.react-calendar__tile',
  );
  tiles.forEach((tile) => (tile.style.background = 'transparent'));

  if (value) {
    tiles.forEach((tile) => {
      const dateLabel = tile.children[0]?.getAttribute('aria-label');
      if (formattedValue === dateLabel) {
        tile.style.background = currentTheme.colors.blur;
      }
    });
  }
};

import classNames from 'classnames';
import React from 'react';

const TabSwitcher = ({tab, setTab}) => {
  return (
    <div className="tab-switcher">
      <div
        className={classNames({
          'tab-switcher__item': true,
          active: tab === 'Links',
        })}
        onClick={() => setTab('Links')}
      >
        Links
      </div>
      <div
        className={classNames({
          'tab-switcher__item': true,
          active: tab === 'Notes',
        })}
        onClick={() => setTab('Notes')}
      >
        Notes
      </div>
    </div>
  );
};

export default TabSwitcher;

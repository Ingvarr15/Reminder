import React from 'react';

import {useAppDispatch, useAppSelector} from 'store/hooks';

const LinksList = () => {
  const dispatch = useAppDispatch();
  const {links} = useAppSelector(({main}) => ({
    links: main.links,
  }));

  return (
    <ul className="links-list">
      {links.map((link) => (
        <li className="links-list__item" key={link.id}>
          <a href={link.url} target="_blank">
            {link.img === '' ? (
              'asd'
            ) : (
              <img className="link-item__img" src={link.img} height="24" />
            )}
            <div className="link-item__title">{link.title}</div>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default LinksList;

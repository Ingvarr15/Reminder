import React, {useContext, useRef} from 'react';

import {useAppDispatch, useAppSelector} from 'store/hooks';
import {deleteLink, replaceLinks} from 'store/stores/main/mainSlice';
import {LinksContext} from './Links';
import {setEdit} from './localStore/Links.actions';

const LinksList = () => {
  const {localDispatch} = useContext(LinksContext);
  const dispatch = useAppDispatch();
  const {links} = useAppSelector(({main, form}) => ({
    links: main.links,
  }));
  const dragItem = useRef(null);
  const dragOverItem = useRef(null);

  const handleDragStart = (e: React.DragEvent, position: number) => {
    const target = e.target as HTMLDivElement;
    e.dataTransfer.setDragImage(target.children[0], 12, 12);
    dragItem.current = position;
  };

  const handleDragEnter = (position: number) => {
    dragOverItem.current = position;
  };

  const handleDrop = () => {
    const copyListItems = [...links];
    const dragItemContent = copyListItems[dragItem.current];
    copyListItems.splice(dragItem.current, 1);
    copyListItems.splice(dragOverItem.current, 0, dragItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    dispatch(replaceLinks(copyListItems));
  };

  return (
    <ul className="links-list">
      {links.map((link, index) => (
        <li className="links-list__item" key={link.id}>
          <div
            className="link-item__delete delete-btn"
            onClick={() => dispatch(deleteLink(link.id))}
          >
            <i className="fa-solid fa-xmark link-item__icon"></i>
          </div>
          <div
            className="link-item__edit edit-btn"
            onClick={() => localDispatch(setEdit(link))}
          >
            <i className="fa-solid fa-pencil link-item__icon"></i>
          </div>
          <a
            className="link-item__a"
            draggable
            onDragOver={(e) => e.preventDefault()}
            onDragStart={(e) => handleDragStart(e, index)}
            onDragEnter={() => handleDragEnter(index)}
            onDragEnd={handleDrop}
            href={`https://${link.url}`}
          >
            <img className="link-item__img" src={link.img} draggable={false} />

            <div className="link-item__title">{link.title}</div>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default LinksList;

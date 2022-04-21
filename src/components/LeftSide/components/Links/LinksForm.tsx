import React, {FormEvent, SyntheticEvent, useContext} from 'react';

import Button from 'ui/Button';

import {useAppDispatch} from 'store/hooks';
import {addLink, editLink} from 'store/stores/main/mainSlice';
import {getIcon} from './Links.utils';
import {LinksContext} from './Links';
import {setImg, setTitle, setUrl} from './localStore/Links.actions';

const LinksForm = ({setOpenForm}) => {
  const {data, localDispatch} = useContext(LinksContext);
  const dispatch = useAppDispatch();

  const handleChangeForm = (e: FormEvent<HTMLInputElement>) => {
    switch (e.currentTarget.id) {
      case 'img':
        localDispatch(setImg(e.currentTarget.value));
        break;
      case 'title':
        localDispatch(setTitle(e.currentTarget.value));
        break;
      case 'url':
        localDispatch(setUrl(e.currentTarget.value));
    }
  };

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    const {isEdit, id, title, img, url} = data;

    const newLink = {
      id: isEdit ? id : Math.random().toString().substring(2, 7),
      title: title.trim(),
      img: img === '' ? getIcon(url) : img,
      url: url.trim(),
    };

    if (title.trim() === '' || url.trim() === '') {
      return;
    } else {
      if (isEdit) {
        dispatch(editLink(newLink));
      } else {
        dispatch(addLink(newLink));
      }
      localDispatch(setOpenForm(false));
    }
  };

  return (
    <form className="links-form">
      <div
        className="close-form"
        onClick={() => localDispatch(setOpenForm(false))}
      >
        <i className="fa-solid fa-xmark close-btn"></i>
      </div>
      <div className="links-form__item">
        <div className="links-item__header">Image:</div>
        <input
          className="links-item__input"
          type="text"
          id="img"
          value={data.img}
          onChange={handleChangeForm}
        />
      </div>

      <div className="links-form__item">
        <div className="links-item__header">Title: *</div>
        <input
          className="links-item__input"
          type="text"
          id="title"
          value={data.title}
          onChange={handleChangeForm}
        />
      </div>

      <div className="links-form__item">
        <div className="links-item__header">URL: *</div>
        <input
          className="links-item__input"
          type="text"
          id="url"
          value={data.url}
          onChange={handleChangeForm}
        />
      </div>

      <Button onClick={handleSubmit}>{data.isEdit ? 'Edit' : 'Add'}</Button>
    </form>
  );
};

export default LinksForm;

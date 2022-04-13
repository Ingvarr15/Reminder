import React, {FormEvent, SyntheticEvent, useEffect} from 'react';

import Button from 'ui/Button';

import {useAppDispatch, useAppSelector} from 'store/hooks';
import {
  setLinkTitle,
  setLinkImg,
  setLinkUrl,
  resetForm,
} from 'store/stores/form/formSlice';
import {addLink} from 'store/stores/main/mainSlice';
import {getIcon} from '../Links.utils';

const LinksForm = ({setCreateNew}) => {
  const dispatch = useAppDispatch();
  const {title, img, url} = useAppSelector(({form: {linkForm}}) => ({
    title: linkForm.title,
    img: linkForm.img,
    url: linkForm.url,
  }));

  const handleChangeForm = (e: FormEvent<HTMLInputElement>) => {
    switch (e.currentTarget.id) {
      case 'img':
        dispatch(setLinkImg(e.currentTarget.value));
        break;
      case 'title':
        dispatch(setLinkTitle(e.currentTarget.value));
        break;
      case 'url':
        dispatch(setLinkUrl(e.currentTarget.value));
    }
  };

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    const newLink = {
      id: Math.random().toString().substring(2, 7),
      title: title.trim(),
      img: getIcon(url),
      url: url.trim(),
    };

    if (newLink.title === '' || newLink.url === '') {
      return;
    } else {
      dispatch(addLink(newLink));
      dispatch(resetForm());
    }
  };

  useEffect(() => {
    return () => {
      dispatch(resetForm());
    };
  }, []);

  return (
    <form className="links-form">
      <div className="close-form" onClick={() => setCreateNew(false)}>
        <i className="fa-solid fa-xmark close-btn"></i>
      </div>
      <div className="links-form__item">
        <div className="links-item__header">Image:</div>
        <input
          className="links-item__input"
          type="text"
          id="img"
          value={img}
          onChange={handleChangeForm}
        />
      </div>

      <div className="links-form__item">
        <div className="links-item__header">Title: *</div>
        <input
          className="links-item__input"
          type="text"
          id="title"
          value={title}
          onChange={handleChangeForm}
        />
      </div>

      <div className="links-form__item">
        <div className="links-item__header">URL: *</div>
        <input
          className="links-item__input"
          type="text"
          id="url"
          value={url}
          onChange={handleChangeForm}
        />
      </div>

      <Button onClick={handleSubmit}>Add</Button>
    </form>
  );
};

export default LinksForm;

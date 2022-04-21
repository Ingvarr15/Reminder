import React, { SyntheticEvent, useContext } from "react";

import Button from "ui/Button";

import { NotesContext } from "./Notes";
import { useAppDispatch } from "store/hooks";
import { addNote, editNote } from "store/stores/main/mainSlice";
import { setOpenForm, setText, setTitle } from "./localStore/Notes.actions";

const NotesForm = () => {
  const { data, localDispatch } = useContext(NotesContext);
  const dispatch = useAppDispatch();

  const handleAddNote = (e: SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const { id, title, text, isEdit } = data;
    const trimmedText = text.trim();

    const newNote = {
      id: isEdit ? id : Math.random().toString().substring(2, 7),
      title: title.trim(),
      text: trimmedText,
    };

    if (trimmedText === "") {
      return;
    } else {
      if (isEdit) {
        dispatch(editNote(newNote));
      } else {
        dispatch(addNote(newNote));
      }
    }
    localDispatch(setOpenForm(false));
  };

  return (
    <form className="notes-form">
      <div
        className="close-form"
        onClick={() => localDispatch(setOpenForm(false))}
      >
        <i className="fa-solid fa-xmark close-btn"></i>
      </div>
      <div className="notes-form__title">New note</div>
      <input
        className="notes-form__input input"
        value={data.title}
        onChange={(e) => localDispatch(setTitle(e.currentTarget.value))}
        type="text"
      />
      <textarea
        className="notes-form__input textarea"
        value={data.text}
        onChange={(e) => localDispatch(setText(e.currentTarget.value))}
        rows={10}
      />
      <div className="notes-form__buttons">
        <Button onClick={handleAddNote}>{data.isEdit ? "Edit" : "Add"}</Button>
      </div>
    </form>
  );
};

export default NotesForm;

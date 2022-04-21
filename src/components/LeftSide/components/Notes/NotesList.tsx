import React, { SyntheticEvent, useContext } from "react";

import Button from "ui/Button";

import { NotesContext } from "./Notes";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { setEdit, setOpenForm } from "./localStore/Notes.actions";
import { TNote } from "store/stores/main/types";
import { deleteNote } from "store/stores/main/mainSlice";

const NotesList = () => {
  const { localDispatch } = useContext(NotesContext);
  const dispatch = useAppDispatch();
  const { notes } = useAppSelector(({ main }) => ({
    notes: main.notes,
  }));

  const formatNote = (note: TNote) => {
    const limit = 25;
    const dots = "...";

    if (note.title.length > limit) {
      return note.title.substring(0, limit) + dots;
    } else if (note.title.length === 0) {
      return (
        note.text.substring(0, limit) + (note.text.length > limit ? dots : "")
      );
    } else {
      return note.title;
    }
  };

  const handleClick = (e: SyntheticEvent, note: TNote) => {
    e.preventDefault();
    const target = e.target as HTMLElement;
    if (target.tagName === "LI") {
      localDispatch(setEdit(note));
    } else if (target.tagName === "BUTTON") {
      dispatch(deleteNote(note.id));
    }
  };

  return (
    <div>
      <Button onClick={() => localDispatch(setOpenForm(true))}>+</Button>
      {notes.length > 0 ? (
        <ul className="notes-list">
          {notes.map((note) => (
            <li
              className="notes-list__item"
              onClick={(e) => handleClick(e, note)}
              key={note.id}
            >
              {formatNote(note)}
              <button
                className="control-button"
                onClick={() => dispatch(deleteNote(note.id))}
              >
                <i className="fa-solid fa-trash-can"></i>
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <div className="section-is-empty">
          {"<"}Empty...{">"}
        </div>
      )}
    </div>
  );
};

export default NotesList;

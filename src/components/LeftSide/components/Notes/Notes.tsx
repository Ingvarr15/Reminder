import React, { createContext, useEffect, useReducer } from "react";

import NotesForm from "./NotesForm";
import NotesList from "./NotesList";

import reducer, {
  INotesForm,
  initialState,
  resetState,
} from "./localStore/Notes.reducer";

export const NotesContext = createContext<{
  data: INotesForm;
  localDispatch: React.Dispatch<any>;
}>({
  data: initialState,
  localDispatch: () => null,
});

const Notes = () => {
  const [data, localDispatch] = useReducer(reducer, initialState, resetState);

  return (
    <NotesContext.Provider value={{ data, localDispatch }}>
      <div className="notes-container">
        {data.isOpened ? <NotesForm /> : <NotesList />}
      </div>
    </NotesContext.Provider>
  );
};

export default Notes;

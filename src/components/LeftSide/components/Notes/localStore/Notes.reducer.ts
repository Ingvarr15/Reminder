import { SET_EDIT, SET_TEXT, SET_OPEN_FORM, SET_TITLE } from "./actionTypes";
import { TAction } from "./actionTypes";

export interface INotesForm {
  isOpened: boolean;
  isEdit: boolean;
  id: string;
  title: string;
  text: string;
}

export const initialState: INotesForm = {
  isOpened: false,
  isEdit: false,
  id: "",
  title: "",
  text: "",
};

export const resetState = () => {
  return initialState;
};

const NotesReducer = (state = initialState, action: TAction) => {
  switch (action.type) {
    case SET_OPEN_FORM:
      if (action.payload) {
        return {
          ...state,
          isOpened: action.payload,
        };
      } else {
        return resetState();
      }
    case SET_TITLE:
      return {
        ...state,
        title: action.payload,
      };
    case SET_TEXT:
      return {
        ...state,
        text: action.payload,
      };
    case SET_EDIT:
      return {
        ...state,
        isOpened: true,
        isEdit: true,
        id: action.payload.id,
        title: action.payload.title,
        text: action.payload.text,
      };
    default:
      return resetState();
  }
};

export default NotesReducer;

import {
  SET_EDIT,
  SET_IMG,
  SET_OPEN_FORM,
  SET_TITLE,
  SET_URL,
} from './actionTypes';
import {TAction} from './actionTypes';

export interface ILinksForm {
  isOpened: boolean;
  isEdit: boolean;
  id: string;
  title: string;
  img: string;
  url: string;
}

export const initialState: ILinksForm = {
  isOpened: false,
  isEdit: false,
  id: '',
  title: '',
  img: '',
  url: '',
};

export const resetState = () => {
  return initialState;
};

const LinksReducer = (state = initialState, action: TAction) => {
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
    case SET_IMG:
      return {
        ...state,
        img: action.payload,
      };
    case SET_URL:
      return {
        ...state,
        url: action.payload,
      };
    case SET_EDIT:
      return {
        ...state,
        isOpened: true,
        isEdit: true,
        id: action.payload.id,
        title: action.payload.title,
        img: action.payload.img,
        url: action.payload.url,
      };
    default:
      return resetState();
  }
};

export default LinksReducer;

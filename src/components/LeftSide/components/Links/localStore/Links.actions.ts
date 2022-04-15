import {
  SET_EDIT,
  SET_IMG,
  SET_OPEN_FORM,
  SET_TITLE,
  SET_URL,
  TAction,
} from './actionTypes';
import {TLink} from 'store/stores/main/types';

export const setOpenForm = (payload: boolean): TAction => ({
  type: SET_OPEN_FORM,
  payload,
});

export const setTitle = (payload: string): TAction => ({
  type: SET_TITLE,
  payload,
});

export const setImg = (payload: string): TAction => ({
  type: SET_IMG,
  payload,
});

export const setUrl = (payload: string): TAction => ({
  type: SET_URL,
  payload,
});

export const setEdit = (payload: TLink): TAction => ({
  type: SET_EDIT,
  payload,
});

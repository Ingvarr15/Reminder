import {TLink} from 'store/stores/main/types';

export const SET_OPEN_FORM = 'SET_OPEN_FORM';
export const SET_TITLE = 'SET_TITLE';
export const SET_IMG = 'SET_IMG';
export const SET_URL = 'SET_URL';
export const SET_EDIT = 'SET_EDIT';

export type TSetOpenForm = {
  type: typeof SET_OPEN_FORM;
  payload: boolean;
};

export type TSetTitle = {
  type: typeof SET_TITLE;
  payload: string;
};

export type TSetImg = {
  type: typeof SET_IMG;
  payload: string;
};

export type TSetUrl = {
  type: typeof SET_URL;
  payload: string;
};

export type TSetEdit = {
  type: typeof SET_EDIT;
  payload: TLink;
};

export type TAction = TSetOpenForm | TSetTitle | TSetImg | TSetUrl | TSetEdit;

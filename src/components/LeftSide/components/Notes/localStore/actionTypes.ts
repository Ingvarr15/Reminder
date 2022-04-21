import { TNote } from "store/stores/main/types";

export const SET_OPEN_FORM = "SET_OPEN_FORM";
export const SET_TITLE = "SET_TITLE";
export const SET_TEXT = "SET_TEXT";
export const SET_EDIT = "SET_EDIT";

export type TSetOpenForm = {
  type: typeof SET_OPEN_FORM;
  payload: boolean;
};

export type TSetTitle = {
  type: typeof SET_TITLE;
  payload: string;
};

export type TSetText = {
  type: typeof SET_TEXT;
  payload: string;
};

export type TSetEdit = {
  type: typeof SET_EDIT;
  payload: TNote;
};

export type TAction = TSetOpenForm | TSetTitle | TSetText | TSetEdit;

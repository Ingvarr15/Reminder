import {
  SET_EDIT,
  SET_TEXT,
  SET_OPEN_FORM,
  SET_TITLE,
  TAction,
} from "./actionTypes";
import { TNote } from "store/stores/main/types";

export const setOpenForm = (payload: boolean): TAction => ({
  type: SET_OPEN_FORM,
  payload,
});

export const setTitle = (payload: string): TAction => ({
  type: SET_TITLE,
  payload,
});

export const setText = (payload: string): TAction => ({
  type: SET_TEXT,
  payload,
});

export const setEdit = (payload: TNote): TAction => ({
  type: SET_EDIT,
  payload,
});

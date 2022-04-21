export type TTodo = {
  id: string;
  title: string;
  done: boolean;
  date: string | null;
  time: string | null;
};

export type TLink = {
  id: string;
  title: string;
  img: string;
  url: string;
};

export type TNote = {
  id: string;
  title: string;
  text: string;
};

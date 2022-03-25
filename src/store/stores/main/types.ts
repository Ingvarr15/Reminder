export type TTodo = {
  id: string;
  text: string;
  badge:
    | 'pink'
    | 'red'
    | 'yellow'
    | 'orange'
    | 'cyan'
    | 'green'
    | 'blue'
    | 'purple'
    | 'geekblue'
    | 'magenta'
    | 'volcano'
    | 'gold'
    | 'lime';
  date?: Date;
};

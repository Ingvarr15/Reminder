export type TTodo = {
  id: string;
  title: string;
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
  date?: any;
};

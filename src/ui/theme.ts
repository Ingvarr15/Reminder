import darken from 'polished/lib/color/darken';

export interface Ttheme {
  font: {
    family: string;
    size: string;
  };
  colors: {
    primary: string;
    blur: string;
    selected: string;
    background: string;
    font: string;
    darken: string;
  };
}

interface Tthemes {
  [key: string]: Ttheme;
}

const commonTheme = {
  font: {
    family: 'Roboto Condensed',
    size: '18px',
  },
};

const theme: Tthemes = {
  orangeGreen: {
    ...commonTheme,
    colors: {
      primary: '#6965ee',
      blur: '#6965ee43',
      selected: '#6965ee63',
      background:
        'linear-gradient(45deg, rgba(255,154,0,1) 0%, rgba(38,145,0,1) 100%)',
      font: '#ffffff',
      darken: darken(0.03, '#6965ee'),
    },
  },
  bluePurple: {
    ...commonTheme,
    colors: {
      primary: '#45c10f',
      blur: '#45c10f43',
      selected: '#45c10f63',
      background:
        'linear-gradient(45deg, rgba(141,0,255,1) 25%, rgba(0,164,255,1) 100%)',
      font: '#ffffff',
      darken: darken(0.06, '#45c10f'),
    },
  },
  dark: {
    ...commonTheme,
    colors: {
      primary: '#ffab00',
      blur: '#ffab0043',
      selected: '#ffab0063',
      background: '#333333',
      font: '#ffffff',
      darken: darken(0.2, '#5550e6'),
    },
  },
};

export default theme;

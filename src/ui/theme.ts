type Ttheme = {
  font: {
    family: string;
    size: string;
  };
  colors: {
    background: string;
    font: string;
  };
};

interface Tthemes {
  [key: string]: Ttheme;
}

const theme: Tthemes = {
  light: {
    font: {
      family: 'Roboto Condensed',
      size: '14px',
    },
    colors: {
      background: '#FFFFFF',
      font: '#000814',
    },
  },
  dark: {
    font: {
      family: 'Roboto Condensed',
      size: '14px',
    },
    colors: {
      background: '#333333',
      font: '#d6d6d6',
    },
  },
};

export default theme;

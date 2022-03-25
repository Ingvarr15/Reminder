type Ttheme = {
  font: {
    family: string;
    size: string;
    color: string;
  };
  colors: {
    background: string;
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
      color: '#000814',
    },
    colors: {
      background: '#FFFFFF',
    },
  },
  dark: {
    font: {
      family: 'Roboto Condensed',
      size: '14px',
      color: '#d6d6d6',
    },
    colors: {
      background: '#333333',
    },
  },
};

export default theme;

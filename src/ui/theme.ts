import darken from "polished/lib/color/darken";

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
    family: "Roboto Condensed",
    size: "18px",
  },
};

const primaryColors = {
  orangeGreen: "#6965ee",
  bluePurple: "#45c10f",
  dark: "#737373",
};

const theme: Tthemes = {
  orangeGreen: {
    ...commonTheme,
    colors: {
      primary: primaryColors.orangeGreen,
      blur: primaryColors.orangeGreen + 43,
      selected: primaryColors.orangeGreen + 63,
      background:
        "linear-gradient(45deg, rgba(255,154,0,1) 0%, rgba(38,145,0,1) 100%)",
      font: "#ffffff",
      darken: darken(0.03, primaryColors.orangeGreen),
    },
  },
  bluePurple: {
    ...commonTheme,
    colors: {
      primary: primaryColors.bluePurple,
      blur: primaryColors.bluePurple + 43,
      selected: primaryColors.bluePurple + 63,
      background:
        "linear-gradient(45deg, rgba(141,0,255,1) 25%, rgba(0,164,255,1) 100%)",
      font: "#ffffff",
      darken: darken(0.06, primaryColors.bluePurple),
    },
  },
  dark: {
    ...commonTheme,
    colors: {
      primary: primaryColors.dark,
      blur: primaryColors.dark + 43,
      selected: primaryColors.dark + 63,
      background: "#333333",
      font: "#e8e8e8",
      darken: darken(0.2, primaryColors.dark),
    },
  },
};

export default theme;

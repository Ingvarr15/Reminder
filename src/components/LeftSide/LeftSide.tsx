import React, { useState } from "react";

import TabSwitcher from "./components/TabSwitcher/TabSwitcher";
import Links from "./components/Links/Links";
import Notes from "./components/Notes/Notes";
import Button from "ui/Button";

import StyledLeftSide from "./LeftSide.style";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { setTheme } from "store/stores/main/mainSlice";

const LeftSide = () => {
  const [tab, setTab] = useState("Links");
  const dispatch = useAppDispatch();
  const { theme } = useAppSelector(({ main }) => ({
    theme: main.theme,
  }));

  const handleToggleTheme = () => {
    switch (theme) {
      case "orangeGreen":
        dispatch(setTheme("bluePurple"));
        break;
      case "bluePurple":
        dispatch(setTheme("orangeGreen"));
        break;
    }
  };

  return (
    <StyledLeftSide>
      <TabSwitcher tab={tab} setTab={setTab} />
      <div className="left-side-inner">
        {tab === "Links" ? <Links /> : <Notes />}
      </div>
      <Button onClick={handleToggleTheme} scale={1}>
        toggle theme
      </Button>
    </StyledLeftSide>
  );
};

export default LeftSide;

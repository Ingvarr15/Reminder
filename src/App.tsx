import React, { useEffect } from "react";

import LeftSide from "components/LeftSide/LeftSide";
import TodoList from "components/TotoList/TodoList";
import Calendar from "./components/Calendar/Calendar";

import StyledThemeProvider from "ui/StyledThemeProvider";
import AppContainer from "ui/AppContainer";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { loadState, saveState } from "store/stores/main/mainSlice";

const App = () => {
  const dispatch = useAppDispatch();
  const { todos, theme, links, notes, isLoaded } = useAppSelector(
    ({ main }) => ({
      todos: main.todos,
      theme: main.theme,
      links: main.links,
      notes: main.notes,
      isLoaded: main.isLoaded,
    })
  );

  useEffect(() => {
    dispatch(loadState());
  }, []);

  useEffect(() => {
    dispatch(saveState());
  }, [todos, theme, links, notes]);

  if (!isLoaded) return null;

  return (
    <StyledThemeProvider>
      <AppContainer>
        <LeftSide />
        <TodoList />
        <Calendar />
      </AppContainer>
    </StyledThemeProvider>
  );
};

export default App;

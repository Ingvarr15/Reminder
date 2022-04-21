import React, { createContext, useReducer } from "react";

import Button from "ui/Button";
import LinksForm from "./LinksForm";
import LinksList from "./LinksList";

import { setOpenForm } from "./localStore/Links.actions";
import reducer, {
  ILinksForm,
  initialState,
  resetState,
} from "./localStore/Links.reducer";

export const LinksContext = createContext<{
  data: ILinksForm;
  localDispatch: React.Dispatch<any>;
}>({
  data: initialState,
  localDispatch: () => null,
});

const Links = () => {
  const [data, localDispatch] = useReducer(reducer, initialState, resetState);

  return (
    <LinksContext.Provider value={{ data, localDispatch }}>
      <div>
        {data.isOpened ? (
          <LinksForm />
        ) : (
          <>
            <div className="links-header">
              <Button
                className="links-header__btn"
                onClick={() => localDispatch(setOpenForm(!data.isOpened))}
              >
                +
              </Button>
            </div>

            <LinksList />
          </>
        )}
      </div>
    </LinksContext.Provider>
  );
};

export default Links;

import React, {createContext, useReducer} from 'react';

import Button from 'ui/Button';
import LinksForm from './components/LinksForm';
import LinksList from './components/LinksList';

import StyledLinks from './Links.style';
import {setOpenForm} from './localStore/Links.actions';
import reducer, {
  ILinksForm,
  initialState,
  resetState,
} from './localStore/Links.reducer';

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
    <LinksContext.Provider value={{data, localDispatch}}>
      <StyledLinks>
        {data.isOpened ? (
          <LinksForm setOpenForm={setOpenForm} />
        ) : (
          <>
            <div className="links-header">
              <Button
                className="links-header__btn"
                onClick={() => localDispatch(setOpenForm(!data.isOpened))}
              >
                +
              </Button>

              <div className="links-header__title">Links</div>
            </div>

            <LinksList />
          </>
        )}
      </StyledLinks>
    </LinksContext.Provider>
  );
};

export default Links;

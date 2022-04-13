import React, {useState} from 'react';

import Button from 'ui/Button';
import LinksForm from './components/LinksForm';
import LinksList from './components/LinksList';

import StyledLinks from './Links.style';

const Links = () => {
  const [createNew, setCreateNew] = useState(false);

  return (
    <StyledLinks>
      {createNew ? <LinksForm setCreateNew={setCreateNew} /> : <LinksList />}
    </StyledLinks>
  );
};

export default Links;

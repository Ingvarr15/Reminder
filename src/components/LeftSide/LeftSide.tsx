import React, {useState} from 'react';

import TabSwitcher from './components/TabSwitcher/TabSwitcher';
import Links from './components/Links/Links';
import Notes from './components/Notes/Notes';

import StyledLeftSide from './LeftSide.style';

const LeftSide = () => {
  const [tab, setTab] = useState('Links');

  return (
    <StyledLeftSide>
      <TabSwitcher tab={tab} setTab={setTab} />
      <div className="left-side-inner">
        {tab === 'Links' ? <Links /> : <Notes />}
      </div>
    </StyledLeftSide>
  );
};

export default LeftSide;

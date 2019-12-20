import React from 'react';
import {Box} from 'rebass';
import styled from 'styled-components';

import Feed from './components/Feed';

import Events from './components/Events';
import Footer from './components/Footer';
import Header from './components/Header';
import Welcome from './components/Welcome';
import OrgMembersDisplay from './components/Members';
import Talks from './components/Talks';

const PostWrap = styled.div`
  margin: 0 auto;
  max-width: 948px;
`;

function App() {
  return (
    <>
      <Header />
      <Welcome />
      <Box bg="#eff1f5">
        {/* Members list */}
        <OrgMembersDisplay orgName="js-ni" />

        <Box m="0 auto" px={[3, 4, 0]} py={5}>
          <PostWrap>
            <Feed />
          </PostWrap>
        </Box>
      </Box>
      <Talks />
      <Events />
      <Footer />
    </>
  );
}

export default App;

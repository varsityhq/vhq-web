import React from 'react';
import StickyBox from 'react-sticky-box';
import List from '../List';
import FollowSuggestion from '../FollowSuggestion';
import News from '../News';

import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from './styles';

const SideBar= () => {
  return (
    <Container className="v-sidebar-container">
      <SearchWrapper>
        <SearchInput placeholder="Search VarsityHQ" />
        <SearchIcon />
      </SearchWrapper>

      <StickyBox>
        <Body>
          <List
            title="Recommended"
            elements={[
              <FollowSuggestion name="Wuldku Kizon" nickname="@wkizon" />,
              <FollowSuggestion name="Oriny Figash" nickname="@OrinyFi22" />,
              <FollowSuggestion name="Maxe Nenial" nickname="@maxe_nenial" />,
            ]}
          />

          <List
            title="What’s happening"
            elements={[
              <News
                header="News · Tech"
                topic="VHQ launches a new platform"
                link="https://maroon-prod.s3.amazonaws.com/media/photos/2020/06/17/blm_sign.png"
              />,
              <News
                header="Entertainment · 2 hours ago"
                topic="New VHQ video"
                link="https://maroon-prod.s3.amazonaws.com/media/photos/2020/06/17/blm_sign.png"
              />,
            
            ]}
          />
        </Body>
      </StickyBox>
    </Container>
  );
};

export default SideBar;

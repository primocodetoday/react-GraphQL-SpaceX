import React from 'react';
import styled from 'styled-components';
import PastMissionsContainer from '../containers/PastMissionsContainer';
import Header from '../components/molecules/Header';

const StyledWrapper = styled.main`
  padding: 0 20px;
  display: flex;
  flex-direction: column;
`;

const PastMissions = () => (
  <StyledWrapper>
    <Header />
    <PastMissionsContainer />
  </StyledWrapper>
);

export default PastMissions;

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Container } from '@material-ui/core';
import Header from '../components/molecules/Header';

const StyledWrapper = styled(Container)`
  display: flex;
  flex-direction: column;
`;

const MainTemplate = ({ children }) => (
  <StyledWrapper>
    <Header />
    {children}
  </StyledWrapper>
);

MainTemplate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]).isRequired,
};

export default MainTemplate;

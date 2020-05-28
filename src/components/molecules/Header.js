import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import Logo from '../atoms/Logo';

// material need this

const StyledWrapper = styled.header`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 10px 10px;

  @media (max-width: 760px) {
    justify-content: center;
  }
`;

const MenuWrapper = styled.div`
  margin-left: auto;

  @media (max-width: 760px) {
    margin: 20px auto;
    display: flex;
  }
`;

const StyledButton = styled(Button)`
  margin: 10px 10px !important;
  text-transform: uppercase;
  background-color: white !important;
  font-size: 0.8em;
  text-align: center;
`;

const Header = () => {
  return (
    <StyledWrapper>
      <NavLink to="/">
        <Logo />
      </NavLink>
      <MenuWrapper>
        <StyledButton
          variant="contained"
          component={NavLink}
          to="/pastmissions"
        >
          Past Launches
        </StyledButton>
        <StyledButton
          variant="contained"
          component={NavLink}
          to="/incomingmissions"
        >
          Incoming Launches
        </StyledButton>
      </MenuWrapper>
    </StyledWrapper>
  );
};

export default Header;

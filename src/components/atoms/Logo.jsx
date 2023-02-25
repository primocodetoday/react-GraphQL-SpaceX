import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/SpaceX-Logo.svg';

const LogoWrapper = styled.div``;

const Logo = () => (
  <LogoWrapper>
    <img src={logo} alt="spaceX logo" />
  </LogoWrapper>
);

export default Logo;

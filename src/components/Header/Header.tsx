import React from 'react';

import { StyledHeader } from '../../../styles/Header/Header';
import { StyledNavbar } from '../../../styles/Header/Navbar';
import Image from 'next/image';

import Logo from '../../assets/Header/logo.svg'

const Header = () => {
  return (
    <StyledHeader>
      <StyledNavbar>
        <p>Hello</p>
      </StyledNavbar>
    </StyledHeader>
  )
}

export default Header;
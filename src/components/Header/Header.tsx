import React from 'react';

import { StyledHeader } from '../../../styles/Header/Header';
import { StyledNavbar } from '../../../styles/Header/Navbar';

import Logo from '../../assets/Header/logo.svg'

// export default function Header() {
//   return (
//     <StyledHeader>
//       <StyledNavbar>
//         <Logo width="200" height="200"/>
//         <p>Hello</p>
//       </StyledNavbar>
//     </StyledHeader>
//   )
// }

const Header = () => {
  return (
    <StyledHeader>
      <StyledNavbar>
        <Logo width="200" height="200" />
        <p>Hello</p>
      </StyledNavbar>
    </StyledHeader>
  )
}

export default Header;
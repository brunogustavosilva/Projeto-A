import React from 'react';
import {
  Navbar, NavLinks, NavLink, Logo, WhatsappButton,
} from '../../assets/styles/navbar';

import logo from '../../assets/logo.png';

import whatsapp from '../../assets/whatsapp.svg';

function NavbarComponent() {
  return (
    <Navbar>
      <Logo>
        <img src={logo} alt="Logo do site" className="site-logo" />
      </Logo>
      <NavLinks>
        <NavLink>Home</NavLink>
        <NavLink>Serviços</NavLink>
        <NavLink>Contato</NavLink>
      </NavLinks>
      <WhatsappButton>
        <img src={whatsapp} alt="whatsApp" className="whatsappIcon" />
        Whatsapp
      </WhatsappButton>
    </Navbar>
  );
}

export default NavbarComponent;

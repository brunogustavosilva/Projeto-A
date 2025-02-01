import styled from 'styled-components';

export const Navbar = styled.nav`
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(30px);
  padding: 20px 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
  box-shadow: 0 1px 1px rgba(161, 161, 161, 0.15);
`;

export const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const NavLink = styled.li`
  font-size: var(--font-size-small);
  font-weight: 600;
  color: white; /* Cor do texto */
  cursor: pointer; /* Adiciona o cursor pointer */
  transition: color 0.3s, text-shadow 0.3s; /* Adiciona transição suave */


  &:hover {
    color:rgb(255, 255, 255); /* Altera a cor do link ao passar o mouse */
    text-shadow: 0 0 30px #fff, 0 0 8px #fff/* Aumenta o brilho ao passar o mouse */
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  height: auto;
  margin-right: 10px;

  .site-logo {
    width: 40px;
    height: auto;
    margin-right: 10px; /* Para dar um espaço entre a logo e o texto caso necessário */
  }
`;

export const WhatsappButton = styled.button`
  background-color: #25d366;
  color: white;
  padding: 10px 20px;
  font-size: var(--font-size-small);
  border: none;
  border-radius: 60px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-left: auto;
  font-weight: 600;
  display: inline-flex;

  &:hover {
    transition: ease-in-out 0.2s;
    background-color:rgb(255, 255, 255);
    color: black;
  }

  .whatsappIcon {
  width: 20px;   /* Tamanho do emote */
  height: auto;   /* Mantém a proporção */
  margin-right: 8px;  /* Espaço entre o texto e o emote */
}
`;

import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
 * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Instrument Sans", serif;
  color: #F2F5F0;
  scrollbar-width: none;

  :root {
    --font-size-h1: 3.5rem;
    --font-size-h2: 2.8rem;
    --font-size-h3: 2rem;
    --font-size-p: 1.3rem;
    --font-size-small: 1rem;
  }
}

.icons {
  width: 28px;   /* Tamanho do emote */
  height: auto;   /* Mantém a proporção */
  margin-left: 8px;  /* Espaço entre o texto e o emote */
}


  body {
    position: relative;
    background: ${({ theme }) => theme.backgroundColor}; /* Cor de fundo base */
    font-size: var(--font-size-small);
    height: 100vh;
    overflow-x: hidden;
  }

  body::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 260vh;
    background: ${({ theme }) => theme.backgroundImage};
    background-size: auto; /* Mantém o tamanho original da imagem */
    background-repeat: repeat; /* Faz a imagem se repetir */
    background-attachment: fixed; /* Mantém o fundo fixo enquanto rola */
    opacity: 0.02; /* Diminuindo a intensidade do ruído */
    pointer-events: none; /* O ruído não interfere nas interações */
    z-index: -1; /* Garante que o ruído fique abaixo do conteúdo */
  }

 button {
  cursor: pointer;
 }

 a.button {
  display: inline-block; /* Garante que o link se comporte como um bloco */
  font-size: var(--font-size-p);
  font-weight: 700;
  padding: 12px 60px; /* Espaçamento interno */
  color: white; /* Cor do texto */
  background: rgb(0, 0, 255);
  box-shadow: 2px;
  text-decoration: none; /* Remove o sublinhado */
  border-radius: 60px; /* Bordas arredondadas */
  text-align: center; /* Centraliza o texto */
  cursor: pointer; /* Cursor de mão */
  transition: ease-in-out 0.5s;
  display: inline-flex;
  margin-top: 20px;
  }

  .button:hover {
    background: rgb(3, 0, 159);
  }


  a:focus {
    outline: none; /* Remove o contorno ao clicar */
  }

`;

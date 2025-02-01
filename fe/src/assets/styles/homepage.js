import styled from 'styled-components';

export const HomePageContainer = styled.section`
  position: relative;
  height: 100vh; /* Garante que o vídeo cubra a tela inteira */
  width: 100%;
  overflow: hidden; /* Garante que o vídeo não ultrapasse os limites da section */

  .video-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1; /* Coloca o vídeo atrás do conteúdo */
  }

  video {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Faz o vídeo cobrir todo o espaço */
    position: absolute;
    top: 0;
    left: 0;
    filter: blur(8px); /* Aplica o efeito de blur diretamente no vídeo */
    opacity: 0.2;
  }
`;

export const TextContent = styled.div`
  color: white;
  z-index: 1;
  position: absolute;
  top: 40%; /* Coloca o conteúdo no meio verticalmente */
  left: 30%; /* Alinha o conteúdo no meio horizontalmente */
  transform: translate(-50%, -50%);
  max-width: 900px;
  text-align: left; /* Alinha o texto à esquerda */

  h1 {
    font-size: var(--font-size-h1);
    margin: 0;
    position: relative;

    .word {
      display: inline-block;
      transition: transform 0.5s ease, opacity 0.5s ease;
      position: absolute;
    }

    .down {
      transform: translateY(100%); /* Começa fora da tela */
      opacity: 0; /* Fica invisível */
    }

    .up {
      transform: translateY(0); /* Fica visível na posição normal */
      opacity: 1; /* Fica visível */
    }
  }

  p {
    padding-top: 25px;
    font-size: var(--font-size-p);
    font-weight: 400;
  }

  .word {
  display: inline-block;
  opacity: 0;
  transition: opacity 1s ease, transform 1s ease;
}

/* Efeito de transição suave */
.up {
  opacity: 1;
  transform: translateY(0); /* Mostra a palavra */
}

.down {
  opacity: 0;
  transform: translateY(30px); /* Faz a palavra "sumir" para baixo */
}

/* Gradientes de cor para cada palavra */
.event {
  background: linear-gradient(90deg, #ff7e5f, #feb47b);
  -webkit-background-clip: text;  /* Para navegadores Webkit (Chrome, Safari, etc.) */
  background-clip: text;          /* Para compatibilidade com outros navegadores */
  color: transparent;
}

.wedding {
  background: linear-gradient(90deg, #6a11cb, #2575fc);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.moments {
  background: linear-gradient(90deg, #ff6a00, #ee0979);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
`;

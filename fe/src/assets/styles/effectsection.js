import styled from 'styled-components';

// Container principal da EffectSection
export const EffectSectionContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.7);
  width: 80vw;
  max-height: 90%;
  overflow: hidden;
  position: relative;
  background: rgba(47, 47, 47, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
`;

// Container do vídeo (do lado direito)
export const VideoContainer = styled.div`
  width: 50%; /* Largura do vídeo */
  height: 700px;
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  display: flex;
  justify-content: center; /* Centraliza o vídeo horizontalmente */
  align-items: center; /* Centraliza o vídeo verticalmente */

  video {
    max-width: 768px;
    height: 100%;
    object-fit: cover; /* Faz o vídeo cobrir o espaço sem distorcer */
  }
`;

// Container do texto (do lado esquerdo)
export const TextContainer = styled.div`
  width: 48%; /* Ajuste conforme necessário */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
  margin-top: -15vh;

  h2 {
    font-size: var(--font-size-h2);
  }

  p {
    font-size: var(--font-size-p);
  }

  img {
    max-width: 25vh;
  }
`;

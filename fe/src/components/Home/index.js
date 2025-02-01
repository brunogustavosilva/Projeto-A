import React, { useEffect, useState } from 'react';
import { HomePageContainer, TextContent } from '../../assets/styles/homepage';
import videoPath from '../../assets/Party2.mp4'; // Importando o vídeo
import poppEmoji from '../../assets/party-popper.png';

function HomePage() {
  const [word, setWord] = useState('eventos'); // Estado que guarda a palavra exibida

  useEffect(() => {
    const interval = setInterval(() => {
      setWord((prev) => {
        // Alterna entre as palavras
        if (prev === 'eventos') return 'casamentos';
        if (prev === 'casamentos') return 'momentos';
        if (prev === 'eventos') return 'momentos';
        return 'eventos'; // Se estiver em 'momentos', retorna para 'festa'
      });
    }, 3500); // Troca a palavra a cada 3 segundos

    return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
  }, []);

  return (
    <HomePageContainer>
      <div className="video-container">
        <video autoPlay loop muted>
          <source src={videoPath} type="video/mp4" />
          Seu navegador não suporta o elemento de vídeo.
        </video>
      </div>
      <TextContent>
        <h1>
          Europa Acessórios equipamentos para
          <span className={`word ${word === 'eventos' ? 'up' : 'down'} event`} style={{ marginLeft: '10px' }}>festas e eventos</span>
          <span className={`word ${word === 'casamentos' ? 'up' : 'down'} wedding`} style={{ marginLeft: '10px' }}>casamentos</span>
          <span className={`word ${word === 'momentos' ? 'up' : 'down'} moments`} style={{ marginLeft: '10px' }}>um momento inesquecível</span>
        </h1>
        <p>Na Europa Acessórios, alugamos equipamentos audiovisuais de alta qualidade para eventos de qualquer porte, com serviço confiável e impecável.</p>
        <a className="button" href="www.goog">
          Quero saber mais!
          <img src={poppEmoji} alt="Party Popper" className="icons" />
        </a>
      </TextContent>
    </HomePageContainer>
  );
}

export default HomePage;

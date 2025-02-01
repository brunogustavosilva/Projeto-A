import React, { useEffect } from 'react';
import gsap from 'gsap';
import {
  ServicesContainer, ServText, ImageContainer, CardWrapper,
} from '../../assets/styles/services';
import lightImage from '../../assets/luzes.png';
import wand from '../../assets/wand.png';

function Services() {
  useEffect(() => {
    gsap.to('.button-rgb', {
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'none',
      keyframes: [
        { backgroundColor: 'rgb(255, 0, 0)' },
        { backgroundColor: 'rgb(0, 255, 0)' },
        { backgroundColor: 'rgb(0, 0, 255)' },
        { backgroundColor: 'rgb(255, 0, 255)' },
      ],
    });
  }, []);

  return (
    <ServicesContainer>
      <CardWrapper>
        <ImageContainer>
          <img src={lightImage} alt="Imagem do serviço" />
        </ImageContainer>
        <ServText>
          <h2>Serviços</h2>
          <p>
            Oferecemos uma ampla variedade de equipamentos audiovisuais para festas, eventos corporativos e momentos especiais, garantindo qualidade e confiabilidade.
          </p>
          <a className="button button-rgb" href="www.goog">
            Mostre-me os efeitos
            <img src={wand} alt="" className="icons" />
          </a>
        </ServText>
      </CardWrapper>
    </ServicesContainer>
  );
}

export default Services;

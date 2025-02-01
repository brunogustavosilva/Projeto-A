import styled from 'styled-components';

export const ServicesContainer = styled.section`
  display: flex;
  margin: 70px 0;
  justify-content: center;
  align-items: center;
  padding: 0 5%;
  position: relative;
`;

export const CardWrapper = styled.div`
  display: flex;
  align-items: center;
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
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

export const ImageContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
  z-index: 1;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: rotateY(10deg);
    max-width: auto;
    border-radius: 12px;
    mask-image: linear-gradient(to right, rgba(0, 0, 0, 1) 30%, rgba(0, 0, 0, 0) 100%);
    -webkit-mask-image: linear-gradient(to right, rgba(0, 0, 0, 1) 30%, rgba(0, 0, 0, 0) 100%);
  }
`;

export const ServText = styled.div`
  width: 40%;
  text-align: left;
  padding-left: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  h2 {
    font-size: var(--font-size-h2);
    font-weight: bold;
    margin-bottom: 1rem;
  }

  p {
    font-size: var(--font-size-p);
    line-height: 1.8;
  }

  .button {
    color: white;
    background-color: white;
    transition: all 0.3s ease;
  }
`;

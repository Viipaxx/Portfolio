import styled from "styled-components";

export const Container = styled.div`
  background-color: #102427;
  width: 100%;
  margin: auto;
  position: relative;

  @media screen and (max-width: 1000px) {
    width: 100%;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
  } 
`

export const Banner = styled.img`
  width: 100%;
  height: auto;

  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;

export const Title = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-size: 30px;
  font-weight: 600;
  width: 260px;
  border-bottom: 1px solid #308F8C;
  margin: 15px auto;
  text-align: center;

  @media screen and (max-width: 1000px) {
    font-size: 20px;
    width: 180px;
  }

  @media screen and (max-width: 600px) {
    width: 100px;
    font-size: 16px;
  }
`;

export const ScrollTopButton = styled.button`
  position: sticky;
  bottom: 30px;
  left: 95%;
  z-index: 1000;

  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;

  &:hover img {
    transform: translateY(-4px);
  }

  @media screen and (max-width: 1000px) {
    /* bottom: 30px; */
    left: 95%;
  }

  @media screen and (max-width: 600px) {
    left: 85%;
  }
`;

export const ArrowImage = styled.img`
  width: 45px;
  height: 45px;
  transition: transform 0.3s ease;

  @media screen and (max-width: 1000px) {
    width: 30px;
    height: 30px;
  }
`;
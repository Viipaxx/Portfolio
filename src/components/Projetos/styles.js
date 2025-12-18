import styled from "styled-components";

export const Container = styled.div`
  max-width: 95%;
  height: 480px;
  display: flex;
  align-items: center;
  overflow-x: auto;
  margin: auto;
  padding: 0 20px;
  gap: 50px;
  
  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #0f1f22;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: #308F8C;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #3fbdb8;
  }

  @media screen and (max-width: 1000px) {
    font-size: 20px;
    max-width: 85%;
    height: 310px;
    gap: 20px;
    margin: 0 auto;
  }

  @media screen and (max-width: 600px) {
    max-width: 95%;
    font-size: 16px;
  }
`

export const ContainerProjeto = styled.div`
 min-width: 227px;
 height: 263px;
 background-color: #162F33;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 position: relative;
 transition: .5s;
 z-index: ${({ active }) => (active ? "100000" : null)};

 cursor: pointer;

 &:hover {
  border: 1px solid #fff;
  transform: scale(1.03);
 }

  @media screen and (max-width: 1000px) {
    min-width: 180px;
    height: 200px;

    &:hover {
      border: 1px solid #fff;
      transform: scale(1);
    }
  }
`

export const ImageProjeto = styled.img`
 width: 195px;
 height: 180px;

  @media screen and (max-width: 1000px) {
    width: 140px;
    height: 140px;
  }
`

export const TitleProjeto = styled.h1`
 font-family: "Montserrat", sans-serif;
 font-weight: 600;
 font-size: 32px;
 text-align: center;

  @media screen and (max-width: 1000px) {
    font-size: 20px;
    width: 180px;
  }
`

export const ContainerExpandProjeto = styled.div`
 width: 400px;
 height: 450px;
 background-color: #162F33;
 display: block;
 position: absolute;
 display: ${({ active }) => (active ? "flex" : "none")}; 
 left: ${({ isLast }) => (isLast ? "-240px" : "40px")};
 z-index: ${({ active }) => (active ? "100000" : null)};
 align-items: center;
 justify-content: center;
 flex-direction: column;
 padding: 10px 5px;
 gap: 10px;
 border: 1px solid #fff;

  @media screen and (max-width: 1000px) {
    width: 250px;
    height: 300px;
     left: ${({ isLast }) => (isLast ? "-150px" : "40px")};
  }

  @media screen and (max-width: 600px) {
    width: 250px;
    height: 300px;
    left: ${({ isLast }) => (isLast ? "-60px" : "-10px")};
  }
`

export const ImageExpandProjet = styled.img`
 width: 350px;
 height: 220px;

  @media screen and (max-width: 1000px) {
    width: 180px;
    height: 120px;
  }
`

export const TilteExpandProjeto = styled.h1`
 font-family: "Montserrat", sans-serif;
 font-weight: 600;
 font-size: 32px;

  @media screen and (max-width: 1000px) {
    font-size: 20px;
  }
`

export const DescpritionExpandProjeto = styled.p`
 font-family: "Montserrat", sans-serif;
 font-weight: 600;
 font-size: 17px;
 text-align: center;

  @media screen and (max-width: 1000px) {
    font-size: 10px;
  }
`

export const LinkExpandProjeto = styled.a`
 width: 247px;
 height: 38px;
 border-radius: 20px;
 background-color: #308F8C;
 font-family: "Montserrat", sans-serif;
 font-weight: 600;
 font-size: 17px;
 text-align: center;
 display: flex;
 align-items: center;
 justify-content: center;
 text-decoration: none;
 transition: 0.5s;
 color: #000;

 &:hover {
    color: #fff;
 }

  @media screen and (max-width: 1000px) {
    font-size: 12px;
    width: 120px;
    height: 20px;
  }
`

export const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${(props) => (props.left ? "left: -20px;" : "right: -20px;")}
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #308F8C;
  color: white;
  border: none;
  font-size: 24px;
  cursor: pointer;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.8;

  &:hover {
    opacity: 1;
  }

  @media screen and (max-width: 1000px) {
    ${(props) => (props.left ? "left: 20px;" : "right: 20px;")}
  }
`;


export const SuperDiv = styled.div`
  position: relative; 
  width: 95%;
  margin: auto;

  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`
import styled from "styled-components";

export const Container = styled.div`
    width: 95%;
    margin: 21px auto 0;
    background-color: #162F33;
    padding: 21px 0;

    @media screen and (max-width: 1000px) {
        width: 95%;
    }
`

export const Title = styled.h1`
    font-family: 'Montserrat', sans-serif;
    font-size: 30px;
    font-weight: 600;
    width: 260px;
    border-bottom: 1px solid #308F8C;
    margin: auto;
    text-align: center;    

    @media screen and (max-width: 1000px) {
        font-size: 20px;
        width: 180px;
    }

    @media screen and (max-width: 600px) {
        width: 100px;
        font-size: 16px;
    }
`

export const ContainerHabilidade = styled.div`
    width: 92px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-top: 15px;

    transform: ${({ active }) => (active ? "scale(1.05)" : "scale(1)")};
    opacity: ${({ active }) => (active ? 1 : 0.7)};
    transition: all 0.3s ease;

    @media screen and (max-width: 1000px) {
        width: 50px;
    }
`

export const TitleHabilidade = styled.h1`
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    font-style: Bold;
    font-size: 20px;

    @media screen and (max-width: 1000px) {
        font-size: 12px;
    }

    @media screen and (max-width: 600px) {
        font-size: 10px;
    }
`

export const ContainerAnel = styled.div`
    width: 91px;
    height: 91px;
    position: relative;

   @media screen and (max-width: 1000px) {
        width: 60px;
        height: 60px;
    }
`

export const Anel = styled.div`
 width: 100%;
 height: 100%;
 border: 12px solid #38a3a5; /* cor do anel de trás */
 border-radius: 50%;
 box-sizing: border-box;

 &:hover{
    transform: rotate(360deg);
 }
`

export const Progresso = styled.div`
    position: absolute;
    inset: 0;
    border-radius: 50%;
    box-sizing: border-box;
    background: conic-gradient( #0f3a3d 0deg, #0f3a3d 270deg, transparent 270deg);
    mask: radial-gradient(farthest-side, transparent calc(100% - 12px), black calc(100% - 12px));
    transition: transform .5s linear;

    &:hover{
        transform: rotate(360deg);
    }
`

export const SectionAneis = styled.div`
    width: 650px;
    margin: 41px 0 0 68px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;

    @media screen and (max-width: 600px) {
        width: 100%;
        margin: 0 0 0 10px;
    }
`

export const SectionHabilidade = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const HabilidadeContent = styled.div`
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-size: 18px;
    width: 700px;
    text-align: center;

    @media screen and (max-width: 1000px) {
        font-size: 14px;
    }

    @media screen and (max-width: 600px) {
        display: none;
    }
`
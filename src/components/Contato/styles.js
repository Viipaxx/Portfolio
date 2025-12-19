import styled from "styled-components";

export const Container = styled.footer`
    width: 100%;
    height: 390px;
    background: #162F33;
    padding: 30px 0 0 0;

    @media screen and (max-width: 1000px) {
        width: 100%;
        height: 270px;
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

export const ContatosContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    place-items: center;
    width: 800px;
    margin: 150px auto;
    gap: 15px;

    > :nth-last-child(-n + 3) {
        margin-left: 40px;
    }

    @media screen and (max-width: 1000px) {
        width: auto;
        gap: 15px 0;
        margin: 70px auto;
  }

    @media screen and (max-width: 600px) {
        width: 100%;
        font-size: 16px;
        margin: 40px auto;
        grid-template-columns: 1fr 1fr;
        place-items: center;
        gap: 10px 0;

        > :nth-last-child(-n + 3) {
            margin-left: 0;
        }
    }
`

export const Contatos = styled.a`
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-size: 14px;
    text-decoration: none;
    
    width: 149px;
    height: 32px;
    border-radius: 15px;
    background-color: #102427;
    display: flex;
    align-items: center;
    transition: .5s;
    text-align: center;

    &:hover {
        background-color: #308F8C;
    }

    @media screen and (max-width: 600px) {
        width: 125px;
    }

`
export const ContatosIcon = styled.img`
    width: 20px;
    height: 20px;
    margin: 0 10px;
`
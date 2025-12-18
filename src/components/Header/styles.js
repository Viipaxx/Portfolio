import styled from "styled-components";

export const Container = styled.header`
 display: flex;
 flex-direction: row;
 width: 100%;
 height: 81px;
 align-items: center;
 justify-content: space-between;
 padding: 0 50px;
 
 @media screen and (max-width: 1000px) {
    width: 100%;
  }

    @media screen and (max-width: 600px) {
      padding: 0 0 0 10px;
  }

  
`

export const LogoSection = styled.div`
 display: flex;
 flex-direction: row;
 align-items: center;
 gap: 10px;
 cursor: pointer;
`

export const Logo = styled.img`
 width: 57px;
 height: 50px;

  @media screen and (max-width: 600px) {
    width: 37px;
    height: 30px;
  }
`

export const LogoTitle = styled.h1`
 font-family: "Montserrat", sans-serif;
 font-size: 30px;
 font-weight: bold;

 @media screen and (max-width: 1000px) {
    font-size: 17px;
  }

   @media screen and (max-width: 600px) {
    display: none;
  }
`

export const NavLink = styled.nav`
 display: flex;
 flex-direction: row;
 gap: 15px;

  @media screen and (max-width: 600px) {
    gap: 5px;
  }
`

export const Link = styled.a`
 width: 120px;
 height: 36px;
 border-radius: 15px;
 background-color: #162F33;
 box-shadow: 0px 4px 4px 0px #00000040;

 display: flex;
 align-items: center;
 justify-content: center;
 text-decoration: none;
 transition: 0.5s;

 &:hover {
    color: #000;
    background-color: #308F8C;
 }

 @media screen and (max-width: 1000px) {
    width: 80px;
    font-size: 12px;
  }

   @media screen and (max-width: 600px) {
    width: 50px;
    font-size: 8px;
  }
`
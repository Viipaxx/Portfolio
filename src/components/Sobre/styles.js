import styled from "styled-components";

export const Container = styled.div`
   width: 95%;
   height: 219px;
   background-color: #162F33;
   margin: auto;
   display: flex;
   align-items: center;
   justify-content: space-evenly;
   padding: 0 11px;

   @media screen and (max-width: 1000px) {
      width: 95%;
      padding: 0 5px;
      margin: auto;
   }
`

export const TextContent = styled.p`
   font-family: 'Poppins', sans-serif;
   font-size: 16px;
   font-style: normal;
   width: 880px;
   font-weight: 400;
   text-align: center;

   @media screen and (max-width: 1000px) {
      font-size: 10px;
      width: 510px;
   }

   @media screen and (max-width: 600px) {
      width: 100%;
   }
`

export const Avatar = styled.img`
   width: 158px;
   height: 158px;

   @media screen and (max-width: 1000px) {
      width: 120px;
      height: 120px;
   }

   @media screen and (max-width: 600px) {
      display: none;
   }
`
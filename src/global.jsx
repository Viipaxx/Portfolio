import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing:  border-box;
        color: #c8e0d8;
        font-family: "Poppins", sans-serif;
    }

    html {
        scroll-behavior: smooth;

    }

    body {
        background-color: #000000;
        width: 100%;
        max-width: 1240px;
        margin: auto;

        @media screen and (max-width: 1000px) {
            width: 100%;
        }

        @media screen and (max-width: 600px) {
            width: 100%;
        }
    }

`
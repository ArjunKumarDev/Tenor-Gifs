import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
       * {
          box-sizing: border-box;
          margin:0;
          padding: 0;
          font-family: 'Kanit', sans-serif;
       }

       html {
         font-size:10px;
       }

       h2{
        color: #2b2b2b;
        line-height: 1.1em;
        margin-bottom: 20px;
        margin-left: 0;
        margin-right: 0;
       }

       li{
        list-style: none;
       }

       a {
        text-decoration: none;
       }
`;

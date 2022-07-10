import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
       * {
          box-sizing: border-box;
          margin:0;
          padding: 0;
       }

       html {
         font-size:10px;

         @media (max-width:600px) {
          font-size: 8px;
         }
       }

       body {
        font-family: Inter var,helvetica,arial,sans-serif;
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
        cursor: pointer;
       }

       
`

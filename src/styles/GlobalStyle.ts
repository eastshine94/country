import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
     * {
       box-sizing: border-box;
     }
     body {
      width: 100%;
      height: 100%;
      background: #f1f3ff;
    }
     body, div, ul, li, dl, dd, dt, ol, h1, h2, h3, h4, h5, h6, input, fieldset, legend, p, select, table, th, td, tr, textarea, button, form, figure, figcaption {
      padding: 0;
      margin: 0;
    }
    
    a{
      color: #222;
      text-decoration:none;
    }
    body, input, textarea, select, button, table {
      font-family: 'Nanum Gothic', sans-serif;
      color: #222;
      font-size: 13px;
      line-height: 1.5;
    }
    
    em, address {
      font-style: normal
    }
    
    dl, ul, li, ol, menu {
      list-style: none;
    }

     h1, h2, h3, h4, h5, h6 {
       font-size: 13px;
       font-weight: normal;
    }
    
    button {
      border: none;
      outline: none;
    }

    img, fieldset {
      border: 0 none;
    }
`;

export default GlobalStyle;
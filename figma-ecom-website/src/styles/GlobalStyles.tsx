import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: Inter, Helvetica, Sans-Serif;
  }
  button {
    border-radius: 0.25rem;
    color: '#FFF';
    background-color: '#1B4B66';
    border: none;
  }
  input {
    background-color: #F1F1F1;
    border-radius: 0.25rem;
    font-size: 1rem;
    padding: 1rem;
    margin: 0.25rem;
    border: none; 
    box-sizing: border-box;
    outline: none;
  }
`;

export default GlobalStyle;

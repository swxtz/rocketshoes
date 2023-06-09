import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
  --button: #FF0000;
  --main-background:  #C4C4C4;
  --background: #E5E5E5;
  --text: #000;
  --footer: #000;
  --text-description: #9C9696;
  --text-hover:  #363636;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-family: "Roboto", sans-serif;
    background-color: var(--main-background);
  }

  a, input {
    text-decoration: none;
  }

  input {
    border: none;
  }
`;




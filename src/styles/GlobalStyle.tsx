import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Roboto", cursive;
  }

  body {
    background-color: #d7ffc5;
    /* background-image: url("images/background-3.png"); */
}
`
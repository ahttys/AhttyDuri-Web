import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Bazier Square, Noto Sans KR, Segoe UI, Apple SD Gothic Neo, Roboto, Helvetica Neue, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
}
h1,h2,h3,h4,h5,h6{
    margin: 0;
}
button {
    text-decoration: none;
    cursor: pointer;
    color: inherit;
  }
a { 
    /* 링크의 색상 및 밑줄 없애기 */
    color: inherit;
    text-decoration: none;
}
`;

export default GlobalStyles;

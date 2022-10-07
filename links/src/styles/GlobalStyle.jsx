import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style-type: none;
}

:root{
    --body-bg: #000000;
    --link-bg: #ffffff1f;
    --link-hover: #ffffff37;
    --link-color: white;
    --text-color: #ffffff;
}

body{
    background: var(--body-bg);
}
`
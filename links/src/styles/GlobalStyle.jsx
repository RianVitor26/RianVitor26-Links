import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style-type: none;
}

:root{
    --body-bg: #000414;
    --link-bg: #001677;
    --link-hover: #001ea1;
    --link-color: white;
    --text-color: #ffffff;
}

body{
    background: #00071d;
}
`
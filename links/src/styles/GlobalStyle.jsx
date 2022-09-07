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
    --link-bg: #001466;
    --link-hover: #0020a0;
    --link-color: #e7e7e7;
    --text-color: #bdbdbd;
}

body{
    background: var(--body-bg);
}
`
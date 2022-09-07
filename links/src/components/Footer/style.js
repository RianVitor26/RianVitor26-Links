import styled from 'styled-components'

export const Container = styled.div`
width: 100%;
height: 20vh;
display: flex; 
align-items: center;
justify-content: center;

p{
    color: var(--text-color);
    font-size: clamp(12px, 1.2vw, 40px);
}

a{
    color: var(--text-color);
    transition: all ease .2s;
    font-size: clamp(12px, 1.2vw, 40px);

    :hover{
        color: var(--link-color);
    }
}
`

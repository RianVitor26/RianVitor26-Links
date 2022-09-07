import styled from 'styled-components'

export const Container = styled.div`
width: 30%;
min-width: 250px;
margin: 0 auto;
display: flex;
flex-direction: column;
align-items: center;
margin-top: 5vh;
`

export const Link = styled.div`
width: 100%;
height: 10vh;
margin-bottom: 2vh;

a{
    width: 100%;
    height: 100%;
    font-size: clamp(14px, 1.3vw, 50px);
    color: var(--link-color);
    background-color: var(--link-bg);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 1vw;
    transition: all ease .4s;

    :hover{
        background: var(--link-hover);
        transform: translateY(-1vh);
    }
}
`

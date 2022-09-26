import styled from 'styled-components'



export const Container = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
margin-top: 5vh;
flex-direction: column;

h2{
    color: white;
    margin-top: 1vh;
    font-size: clamp(14px, 1.5vw, 100px);
}



`
export const Avatar = styled.div`
width: 200px;
height: 200px;
border-radius: 50%;
background-image: url('perfil.png');
background-repeat: no-repeat;
background-size: cover;
background-position: center;
`
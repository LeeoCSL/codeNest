import styled from 'styled-components'
import { Card } from 'antd';
import bgImage from '../assets/bg.jpg';



export const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    align-items: center;
    padding-top: 20px;
    ${'' /* margin-top: 100px; */}
    background-image: url(${bgImage}); 
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    
    
`
export const ImgLogo = styled.img`
    width: 15rem;
    ${'' /* height: 100px; */}
`

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    margin-top: 30px;
    
    color: white;
     
`

export const Corpo = styled.main`
    max-width: 36rem;
    width: 90%;
    margin: 3rem auto;

    section {
       opacity: 0;
        transform: translateY(2rem);
        animation-name: appear;
        animation-duration: 700ms;
        animation-fill-mode: forwards;
    }

    @keyframes appear {
      100% {
          opacity: 1;
          transform: translateY(0)
      }
    }

`

export const Secao = styled.section`
    background-image: linear-gradient(90deg, #9672fc 0%, #43e7ad 50%, #e2d45c 100%);
    border-radius: 0.625rem;
    padding-top: 4px;
    padding-left: 4px;
    div {
    padding: 2rem;
    padding-top: 1.5rem;
    border-radius: 0.5rem;
    background-color: #2a2634;
}
`

export const Title = styled.h2`
letter-spacing: -0.47px;
font-family: "inter";
line-height: 160%;
`

export const SubTitle = styled.p`
  letter-spacing: -0.18px;
  color: #a1a1aa;
  font-family: "inter";
  line-height: 160%;
`

export const Form = styled.form`
   display: flex;
    gap: 0.85rem;
    flex-wrap: wrap;
    margin: 1.25rem 0;

    input, select {
    all: unset;
    border: 2px solid #9147ff;
    border-radius: 0.5rem;
    padding: 0.675rem;
    font-size: 0.875rem;
    background-color: #00000066;
}

input { 
    flex: 1;
}

button {
    width: 100%;
    border: 0;
    background-image: linear-gradient(245deg, #9672fc 0%, #43e7ad 50%, #e2d45c 100%);
    padding: 0.675rem;
    border-radius: 0.5rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.12px;
    color: black;
    transition: all 0.3s;;
}

button:hover {
    cursor: pointer;
    /* transform: translateY(-2px); */
    transform: scale3d(1.01, 1.01, 1.01);
    box-shadow: 0 5px 1rem rgba(255, 248, 107, 0.2);
}

.loading {
    animation: pulse 1s infinite;
}

@keyframes pulse {
    50% {
        opacity: 0.5;
    }
}
`

export const Input = styled.input``

export const Select = styled.select``

export const Button = styled.button``

export const AiResponse = styled.div`
    background: rgba(0,0,0, 0.4);
    border-radius: 0.5rem;
    padding: 1.25rem;
    border-left: 4px solid #43e7ad;
    border-top: 4px solid #43e7ad;
    font-size: 16px;

    ul{
    padding-left: 1.5rem;
    opacity: 0.8;
}

li {
    
    margin-left: 2rem;
}

p {
    color: white;
}

.hidden {
    display: none
}

`

export const ResponseContent = styled.div`

`
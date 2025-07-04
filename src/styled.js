import styled from "styled-components";


export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh; /* pega a tela inteira */
`

export const ContentWrapper = styled.div`
  flex: 1;
  overflow-y: auto; /* faz só o conteúdo rolar */

  box-sizing: border-box;
`

export const ImgChangeMode = styled.img`
width: 100px;
height: 100px;
position: absolute;
top: 0;
left: 0;
margin: 10px;
cursor: pointer; 
`
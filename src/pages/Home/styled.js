import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;                  
  ${'' /* Define que os filhos do container serão organizados com flexbox */}

  width: 100%;                    
  ${'' /* O container ocupará 100% da largura do elemento pai */}

  min-height: 100vh;              
  ${'' /* Garante que o container tenha pelo menos a altura total da tela */}

  flex-direction: column;         
  ${'' /* Organiza os filhos verticalmente (um embaixo do outro) */}
 
  align-items: center;            
  ${'' /* Centraliza os filhos na horizontal (no eixo cruzado) */}
  
  background-color: ${({ theme }) => theme.background};      
  ${'' /* Define o fundo do container como cinza claro */}
  
  padding-top: 80px;              
  ${'' /* Adiciona um espaço de 40px no topo interno do container */}

  
`

export const ImgLogo = styled.img`
width: 200px;
height: 200px;
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

export const Body = styled.div`
  display: flex;
  width: 100%;
  height: 500px;
  justify-content: center;
  
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); // 3 colunas iguais
  gap: 20px;
  padding: 20px;
  width: 60%;            // garante largura
  max-width: 1000px;      // opcional pra limitar
  margin: 0 auto;         // centraliza
  
`;

export const GridButton = styled(Link)`
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.text};
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  font-weight: bold;
  text-decoration: none;
  box-shadow: 0 0 10px #00000020;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.03);
  }
`;
import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  height: 100px;
  ${'' /* padding: 0px 16px; */}
  background-color: ${({ theme }) => theme.backgroundHeader};
  color: ${({ theme }) => theme.text};
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.text + '33'}; /* com opacidade */
  position: fixed;
  z-index: 1001;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
`;

export const ImgChangeMode = styled.img`
width: 100px;
height: 100px;
${'' /* position: absolute; */}
top: 0;
left: 0;
margin: 10px;
cursor: pointer; 
`
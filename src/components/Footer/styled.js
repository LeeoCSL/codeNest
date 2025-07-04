// src/components/Footer/styled.js
import styled from 'styled-components'

export const FooterContainer = styled.div`
  height: 60px;
  width: 100%;
  background-color: #282c34;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const FooterLink = styled.a`
  color: #61dafb;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

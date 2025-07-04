import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const TextName = styled.span`
  font-size: 32px;              // Tamanho da fonte um pouco maior
  color: ${({ theme }) => theme.text};                 // Cor escura sólida (sem aspas!)
  font-weight: 600;             // Deixa o texto mais encorpado, sem ser "boldão"
  letter-spacing: 1px;          // Dá um respiro entre as letras
  width: 100%;
  text-align: center;
  margin-left: 0px;
 
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: inline-flex;
  align-items: center;
  width: 90%;
  backgorund-color: #f0f;
`;
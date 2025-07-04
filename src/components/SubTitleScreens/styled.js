import styled from 'styled-components';

export const TextName = styled.span`
  font-size: 28px;              // Tamanho da fonte um pouco maior
  color: ${({ theme }) => theme.text};                 // Cor escura sólida (sem aspas!)
  font-weight: 600;             // Deixa o texto mais encorpado, sem ser "boldão"
  letter-spacing: 1px;          // Dá um respiro entre as letras
  width: 100%;
  text-align: center;
  
`;


import styled from 'styled-components'

export const Button = styled.div`
  background-color: ${({ theme }) => theme.primary || '#444'};
  color: ${({ theme }) => theme.text || '#fff'};
  padding: 16px;
  border-radius: 12px;
  font-weight: 600;
  font-size: 16px;
  text-align: center;
  cursor: pointer;
  user-select: none;
  transition: all 0.25s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  border: 2px solid transparent;

  display: flex;               // ativa flexbox
  justify-content: center;     // centraliza na horizontal
  align-items: center;         // centraliza na vertical

  width: 100%;                 // ocupa o espaço da coluna da grid
  max-width: 220px;            // limita largura
  height: 100%;
  max-height: 120px;           // limita altura

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.25);
    border-color: ${({ theme }) => theme.text};
  }

  &:active {
    transform: scale(0.98);
    box-shadow: none;
  }
`;
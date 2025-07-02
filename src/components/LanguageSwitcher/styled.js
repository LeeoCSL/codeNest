import styled from 'styled-components';

export const DropdownWrapper = styled.div`
  position: relative;
  margin-left: 20px;
`;

export const DropdownButton = styled.button`
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.text};
  padding: 6px 12px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
`;

export const DropdownMenu = styled.ul`
  position: absolute;
  top: 110%;
  right: 0;
  background: ${({ theme }) => theme.primary};
  border-radius: 6px;
  list-style: none;
  padding: 6px 0;
  margin: 4px 0 0;
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
  z-index: 100;
`;

export const Option = styled.li`
  padding: 6px 12px;
  cursor: pointer;
  white-space: nowrap;

  &:hover {
    background: ${({ theme }) => theme.text + '22'};
  }
`;

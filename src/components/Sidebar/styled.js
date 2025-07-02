import styled from 'styled-components';

export const SidebarContainer = styled.div`
  width: ${({ open }) => (open ? '200px' : '60px')};
  height: 100vh;
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.text};
  transition: width 0.3s;
  position: fixed;
  left: 0;
  top: 0;
  padding-top: 60px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.2);
`;

export const ToggleButton = styled.button`
  position: absolute;
  top: 10px;
  right: -20px;
  background: ${({ theme }) => theme.primary};
  border: none;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  padding: 5px;
  font-size: 18px;
`;

export const NavList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const NavItem = styled.li`
  margin: 16px 0;
  padding: 0 16px;

  a {
    color: ${({ theme }) => theme.text};
    text-decoration: none;
    display: block;
    transition: background 0.2s;
  }

  a:hover {
    background: ${({ theme }) => theme.text + '22'};
    border-radius: 4px;
  }
`;

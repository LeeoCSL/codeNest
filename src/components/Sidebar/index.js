import { useState } from 'react';
import { SidebarContainer, ToggleButton, NavList, NavItem } from './styled';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  const [open, setOpen] = useState(true);

  return (
    <SidebarContainer open={open}>
      <ToggleButton onClick={() => setOpen(!open)}>
        {open ? '←' : '→'}
      </ToggleButton>
      {open && (
        <NavList>
          <NavItem><Link to="/">Home</Link></NavItem>
          <NavItem><Link to="/docDarkMode">Dark Mode</Link></NavItem>
          {/* <NavItem><Link to="/utils">🧩 Utilitários</Link></NavItem>
          <NavItem><Link to="/settings">⚙️ Configurações</Link></NavItem> */}
        </NavList>
      )}
    </SidebarContainer>
  );
}
import React, { useEffect, useState } from 'react';
import {TextName, StyledLink} from './styled';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function AppName() {
    const navigate = useNavigate();
  return (
    <StyledLink to="/">
      <TextName>codeNest</TextName>
    </StyledLink>
  );
}

export default AppName;
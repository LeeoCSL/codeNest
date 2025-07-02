import React, { useEffect, useState } from 'react';
import {TextName} from './styled';
import { useNavigate } from 'react-router-dom';
function AppName() {
    const navigate = useNavigate();
  return (
   <TextName className={'title-app'} onClick={() => navigate('/')} >CodeNest</TextName>
  );
}

export default AppName;
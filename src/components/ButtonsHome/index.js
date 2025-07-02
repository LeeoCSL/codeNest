import React, { useState, useEffect, useRef } from 'react';

import {
    Button
} from './styled'
import { useNavigate } from 'react-router-dom';
const ButtonsHome = ({text, to}) => {
  const navigate = useNavigate();
    return(
        <Button onClick={() => navigate(to)}>
            {text}
        </Button>
    )
}


export default ButtonsHome;
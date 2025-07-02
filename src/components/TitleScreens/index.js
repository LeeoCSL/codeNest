import React, { useEffect, useState } from 'react';
import {TextName} from './styled';

function TitleScreens({text}) {
  return (
   <TextName className={'title-app'}>{text}</TextName>
  );
}

export default TitleScreens;
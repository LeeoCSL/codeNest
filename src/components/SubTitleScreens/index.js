import React, { useEffect, useState } from 'react';
import {TextName} from './styled';

function SubTitleScreens({text}) {
  return (
   <TextName className={'title-app'}>{text}</TextName>
  );
}

export default SubTitleScreens;
import {
    HeaderContainer,
    Title,
    ImgChangeMode
} from './styled'

import AppName from '../../components/AppName/AppName'
import LanguageSwitcher from '../../components/LanguageSwitcher';

import imgDarkMode from '../../assets/imgDarkMode.png'
import imgLightMode from '../../assets/imgLightMode.png'

export default function Header({ toggleTheme, viewMode }) {
  return (
    <HeaderContainer>
    <LanguageSwitcher/>
      <AppName/>
       {viewMode == 'dark' ? 
             <ImgChangeMode src={imgDarkMode} onClick={() => toggleTheme('light')}/>
           :
             <ImgChangeMode src={imgLightMode} onClick={() => toggleTheme('dark')}/>
           }
    </HeaderContainer>
  );
}
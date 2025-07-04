import logoMyCodeDB from './assets/logoMyCodeDB.png'
import {
  
  ImgChangeMode
} from './styled';

import AppName from './components/AppName/AppName'
import { ThemeProvider } from 'styled-components';
import { useEffect, useState } from 'react';
import { GlobalStyle } from './styles/globalStyle';
import { lightTheme, darkTheme } from './styles/theme';
import Home from './pages/Home'

import imgDarkMode from './assets/imgDarkMode.png'
import imgLightMode from './assets/imgLightMode.png'

import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes'

import Header from './components/Header/Header';

import Sidebar from './components/Sidebar'

import ChatBot from './components/ChatBot'

import { ConfigProvider, theme } from 'antd';

import {getAntTheme} from './utils/antTheme';



function App() {
  const [viewMode, setViewMode] = useState('dark');

  useEffect(() => {
    let viewMode = localStorage.getItem("viewMode");
    setViewMode(viewMode)
  },[])

  const handleChangeMode = (mode) => {
    console.log('42 sdfsdfsdf', mode)
localStorage.setItem('viewMode', mode)
setViewMode(mode)
  }

  // const toggleTheme = () => setIsDarkMode(prev => !prev);

  return (
    <ConfigProvider
    theme={getAntTheme(viewMode) }
  >
     <ThemeProvider theme={viewMode == 'dark' ? darkTheme : lightTheme}>
       <BrowserRouter>
      <GlobalStyle />
       {/* <Sidebar /> */}
      <Header toggleTheme={handleChangeMode} viewMode={viewMode} />
      <ChatBot />
      <Routes />
         
      {/* <Home /> */}
       
      </BrowserRouter>
    </ThemeProvider>

  </ConfigProvider>
  );
}

export default App;

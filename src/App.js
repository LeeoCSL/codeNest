import { ThemeProvider } from 'styled-components';
import { useEffect, useState } from 'react';
import { GlobalStyle } from './styles/globalStyle';
import { lightTheme, darkTheme } from './styles/theme';
import Routes from './Routes'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'
import ChatBot from './components/ChatBot'
import { ConfigProvider } from 'antd';
import { getAntTheme } from './utils/antTheme';
import { HashRouter as Router, useLocation } from 'react-router-dom';
import { LayoutWrapper, ContentWrapper } from './styled';

function App() {
  const [viewMode, setViewMode] = useState('dark');

  useEffect(() => {
    let viewMode = localStorage.getItem("viewMode");
    setViewMode(viewMode);
  }, []);

  const handleChangeMode = (mode) => {
    console.log('42 sdfsdfsdf', mode);
    localStorage.setItem('viewMode', mode);
    setViewMode(mode);
  };

  return (
    <ConfigProvider theme={getAntTheme(viewMode)}>
      <ThemeProvider theme={viewMode == 'dark' ? darkTheme : lightTheme}>
        <Router>
          <GlobalStyle />
          <AppContent toggleTheme={handleChangeMode} viewMode={viewMode} />
        </Router>
      </ThemeProvider>
    </ConfigProvider>
  );
}

// 🔑 Header controlado pela rota:
function AppContent({ toggleTheme, viewMode }) {
  const location = useLocation();
  const hideHeaderRoutes = ['/nlwIniciante', '/nlwAvancado'];

  return (
    <LayoutWrapper>
      {!hideHeaderRoutes.includes(location.pathname) && (
        <Header toggleTheme={toggleTheme} viewMode={viewMode} />
      )}

      <ContentWrapper>
        {/* <ChatBot /> */}
        <Routes />
      </ContentWrapper>

      <Footer />
    </LayoutWrapper>
  );
}

export default App;
// import { ThemeProvider } from 'styled-components';
// import { useEffect, useState } from 'react';
// import { GlobalStyle } from './styles/globalStyle';
// import { lightTheme, darkTheme } from './styles/theme';
// import Routes from './Routes'
// import Header from './components/Header/Header';
// import Footer from './components/Footer/Footer'
// import ChatBot from './components/ChatBot'
// import { ConfigProvider, theme } from 'antd';
// import {getAntTheme} from './utils/antTheme';
// import { HashRouter as Router } from 'react-router-dom';
// import { LayoutWrapper, ContentWrapper } from './styled'
// import { useLocation } from 'react-router-dom';
// function App() {
//   const [viewMode, setViewMode] = useState('dark');
//   const location = useLocation();
//   const hideHeaderRoutes = ['/nlwIniciante', '/nlwAvancado',]; // rotas sem header

//   useEffect(() => {
//     let viewMode = localStorage.getItem("viewMode");
//     setViewMode(viewMode)
//   },[])

//   const handleChangeMode = (mode) => {
//     console.log('42 sdfsdfsdf', mode)
// localStorage.setItem('viewMode', mode)
// setViewMode(mode)
//   }

//   // const toggleTheme = () => setIsDarkMode(prev => !prev);

//   return (
//     <ConfigProvider theme={getAntTheme(viewMode)}>
//       <ThemeProvider theme={viewMode == 'dark' ? darkTheme : lightTheme}>
//         <Router>
//           <GlobalStyle />

//           <LayoutWrapper>
//           {!hideHeaderRoutes.includes(location.pathname) && <Header toggleTheme={handleChangeMode} viewMode={viewMode} />}
            

//             <ContentWrapper>
//               {/* <ChatBot /> */}
//               <Routes />
//             </ContentWrapper>

//             <Footer />
//           </LayoutWrapper>

//         </Router>
//       </ThemeProvider>
//     </ConfigProvider>
//   )
// }

// export default App;


import React, { useState, useEffect, useRef } from 'react';

import logoMyCodeDB from '../../assets/logoMyCodeDB.png'
import imgDarkMode from '../../assets/imgDarkMode.png'
import imgLightMode from '../../assets/imgLightMode.png'
import {
  Container,
  ImgLogo,
  ImgChangeMode,
  Body,
  Grid,
  GridButton 
} from './styled';

import AppName from '../../components/AppName/AppName'

import ButtonsHome from '../../components/ButtonsHome'

import { useTranslation } from 'react-i18next';

const Home = (props) => {
const { t } = useTranslation();

  const [viewMode, setViewMode] = useState('dark')

  const buttonsToShow = [
    {
      text: t('home_button_dark_mode'),
      link: '/docDarkMode',
    },
    {text: t('home_button_translate'),
      link: '/docTranslate'
    },
    {text: t('home_button_snippets'),
      link: '/docSnippets'
    },
    {text: t('home_button_sentry'),
      link: '/docSentry'
    },
    
  ]

  const handleChangeMode = (mode) => {
    localStorage.setItem('viewMode', mode)
  }

    return (
        <Container>
        <ImgLogo 
          src={logoMyCodeDB}
          className="App-logo" alt="logo" />

          
          <Body >
          {/* <ButtonsHome text={'btn.text'} key={'index'} to={'btn.link'}/> */}
            <Grid >
              {buttonsToShow.map((btn, index) => {
                return <ButtonsHome text={btn.text} key={index} to={btn.link}/>
              })}
            </Grid>
          </Body>
    </Container>
    )
}

export default Home;

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
  GridButton,
  StyledCard 
} from './styled';

import AppName from '../../components/AppName/AppName'

import ButtonsHome from '../../components/ButtonsHome'

import { useTranslation } from 'react-i18next';

import { Layout, Row, Col, Card } from 'antd';

import { Link } from 'react-router-dom';

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
    {text: t('home_button_fields_examples'),
      link: '/docFields'
    },
    {text: t('home_button_status_code'),
      link: '/docStatusCode'
    },
    {text: t('home_button_ant_design'),
      link: '/docAntDesign'
    },
     {text: 'SUB-PROJECTS',
      link: '/nlwIniciante'
      // link: '/subProjects'
    },
  ]

    return (
        <Layout style={{ minHeight: '100vh', padding: '24px', paddingTop: '80px' }}>
         <div style={{ textAlign: 'center', marginBottom: '32px' }}>

        <ImgLogo 
          src={logoMyCodeDB}
          className="App-logo" alt="logo" />

         </div>

         <Row gutter={[16, 16]} justify="center">
           {buttonsToShow.map((btn, index) => (
         <Col xs={24} sm={12} md={8} lg={8} key={index}>
         <Link to={btn.link}>

            <StyledCard hoverable>
               {btn.text}
            </StyledCard>
         </Link>
         </Col>
      ))}
         </Row>
          
          {/* <Body >
          
            <Grid >
              {buttonsToShow.map((btn, index) => {
                return <ButtonsHome text={btn.text} key={index} to={btn.link}/>
              })}
            </Grid>
          </Body> */}
    </Layout>
    )
}

export default Home;
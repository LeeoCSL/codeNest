import React, { useState, useEffect, useRef } from 'react';

import TitleScreens from '../../../components/TitleScreens'

import {
    Container,
    Body,
    TextExplanationConcept,
    TextExplanationCreate,
    ImgLogo,
    StyledCard,
    Logo
} from './styled'

import SnippetPreview from '../../../components/SnippetPreview';
import nlw from '../../../assets/nlw.PNG'
import { useTranslation } from 'react-i18next';

import { Layout, Row, Col, Card } from 'antd';

import { Link } from 'react-router-dom';

const NLW = (props) => {
const { t } = useTranslation();
    return (
        <Container>

    <Logo>
        <div style={{fontSize: '50px', color: 'white', fontWeight: 'bold'}}>
        <span style={{color: '#9672fc'}}>{'<'}</span>nlw<span style={{color: '#9672fc'}}>{'/>'}</span></div>
    </Logo>

        <Body>
<Row gutter={[16, 16]} justify="center">

                     <Col xs={24} sm={12} md={8} lg={8} >
         <Link to={'/nlwIniciante'}>

            <StyledCard hoverable>
               {'Iniciante'}
            </StyledCard>
         </Link>

         <Link to={'/nlwAvancado'}>

            <StyledCard hoverable>
               {'Avançado'}
            </StyledCard>
         </Link>
         </Col>
</Row>
           


        </Body>
        </Container>
    )
}

export default NLW;
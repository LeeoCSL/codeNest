import React, { useState, useEffect, useRef } from 'react';

import TitleScreens from '../../../components/TitleScreens'

import {
    Container,
    Body,
    TextExplanationConcept,
    TextExplanationCreate,
    ImgLogo,
    StyledCard
} from './styled'

import SnippetPreview from '../../../components/SnippetPreview';
import nlw from '../../../assets/nlw.PNG'
import { useTranslation } from 'react-i18next';

import { Layout, Row, Col, Card } from 'antd';

import { Link } from 'react-router-dom';

const NLWAvancado = (props) => {
const { t } = useTranslation();
    return (
        <Container>
<Link to={'/subProjects'} style={{textDecoration: 'none', color: 'white'}}>

    <div 
    style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000', 
        width: '200px', 
        height: '80px',
        marginTop: '20px'
        
        }}>
        <div style={{fontSize: '50px', color: 'white', fontWeight: 'bold'}}>
        <span style={{color: '#9672fc'}}>{'<'}</span>nlw<span style={{color: '#9672fc'}}>{'/>'}</span></div>
    </div>

</Link>
        <Body>

           


        </Body>
        </Container>
    )
}

export default NLWAvancado;
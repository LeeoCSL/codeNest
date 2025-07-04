import React, { useState, useEffect, useRef } from 'react';

import TitleScreens from '../../components/TitleScreens'

import {
    Container,
    Body,
    TextExplanationConcept,
    TextExplanationCreate
} from './styled'

import SnippetPreview from '../../components/SnippetPreview';

import {
    textExplainConcept,
    textExplainCreate
} from '../../texts/textDarkMode'

import {
    codesToSnippet
} from './codesToSnippet'

import { useTranslation } from 'react-i18next';


const AntDesignPage = (props) => {
const { t } = useTranslation();
    return (
        <Container>

        <TitleScreens text={t('ant_design_title')}/>

        <Body>

            

            

            

        </Body>
        </Container>
    )
}

export default AntDesignPage;
import React, { useState, useEffect, useRef } from 'react';

import TitleScreens from '../../components/TitleScreens'

import {
    Container,
    Body,
    TextExplanationConcept,
    TextExplanationCreate,
    TextHelloWorld
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


const Banner = (props) => {
const { t } = useTranslation();
    return (
        <Container>
            <Body>
                <TextHelloWorld>
                    {t('hello_world')}
                </TextHelloWorld>
            </Body> 
        </Container>
    )
}

export default Banner;


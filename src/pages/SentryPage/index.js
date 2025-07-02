import React, { useState, useEffect, useRef } from 'react';

import TitleScreens from '../../components/TitleScreens'

import {
    Container,
    Body,
    TextExplanationConcept,
    TextExplanationCreate,
    TextWithoutSnippet
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


const SentryPage = (props) => {
const { t } = useTranslation();
    return (
        <Container>

        <TitleScreens text={t('sentry_title')}/>

        <Body>

            <TextExplanationConcept>
                {t('sentry_text_explain_concept')}
            </TextExplanationConcept>

            <TextExplanationCreate>
                {t('sentry_text_explain_create')}
            </TextExplanationCreate>

            <TextExplanationCreate>
               {t('see_step_by_step')}
            </TextExplanationCreate>

            {codesToSnippet.map((item, index) => {
                {/* if(item && item.code != '--'){ */}

                return <SnippetPreview
                title={t(item.text)}
                code={item.code??''}
                language="jsx"
                />
                {/* }else{
                    return <TextWithoutSnippet>{t(item.text)}</TextWithoutSnippet>
                } */}
            })}

            {/* <SnippetPreview
                title={darkModeCodeOne.text}
                code={darkModeCodeOne.code}
                language="jsx"
                />

                <SnippetPreview
                title={darkModeCodeTwo.text}
                code={darkModeCodeTwo.code}
                language="jsx"
                /> */}

        </Body>
        </Container>
    )
}

export default SentryPage;
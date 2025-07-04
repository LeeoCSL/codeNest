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
    codesToSnippet
} from './codesToSnippet'

import { useTranslation } from 'react-i18next';


const FieldsExamples = (props) => {
const { t } = useTranslation();
    return (
        <Container>

        <TitleScreens text={t('dark_mode_title')}/>

        <Body>

            <TextExplanationConcept>
                {t('dark_mode_text_explain_concept')}
            </TextExplanationConcept>

            <TextExplanationCreate>
                {t('dark_mode_text_explain_create')}
            </TextExplanationCreate>

            <TextExplanationCreate>
               {t('see_step_by_step')}
            </TextExplanationCreate>

            {codesToSnippet.map((item, index) => {
                return <SnippetPreview
                title={t(item.text)}
                code={item.code}
                language="jsx"
                />
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

export default FieldsExamples;
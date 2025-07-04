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


const ToDosPage = (props) => {

      const toDos = [
    {
      text: 'Traduções pt/es de Sentry',
    },
    {
      text: 'Traduções pt/es de Snippets',
    },
    {
      text: 'Explicação Docker (?)',
    },
    {
      text: 'Pagina mostrando campos diferentes funcionando + snippet (mascaras, tipos de campos, etc)',
    },
    {
      text: 'Botão voltar para home',
    },
    {
      text: 'Analise de UX/UI',
    },
    {
      text: 'TDD',
    }, 
    {
      text: 'LLM/RAG',
    },
    {
      text: 'design patterns',
    },
    {
      text: 'tailwind css',
    },
    {
      text: 'STATUS CODES',
    },
    {
      text: 'CHAKRA UI',
    },
    
  ]


const { t } = useTranslation();
    return (
        <Container>

        <TitleScreens text={`TODO's`}/>

        <Body>

            {   toDos && toDos.map((item) => {
                return<>
                        <TextExplanationCreate>
                            {item.text}
                        </TextExplanationCreate>
                </>
            })
                
                }

            

         

        </Body>
        </Container>
    )
}

export default ToDosPage;
import React, { useState, useEffect, useRef } from 'react';

import TitleScreens from '../../../components/TitleScreens'

import {
    Container,
    Body,
    ImgLogo,
    Corpo,
    Secao,
    Title,
    SubTitle,
    Form,
    Input,
    Select,
    Button,
    AiResponse,
    ResponseContent
} from './styled'

import SnippetPreview from '../../../components/SnippetPreview';
import logo from "../assets/logo.png"
import { useTranslation } from 'react-i18next';

import { Layout, Row, Col, Card } from 'antd';

import { Link } from 'react-router-dom';
import Showdown from 'showdown'
const NLWIniciante = (props) => {

    const [apiKey, setApiKey] = useState('');
    const [gameSelect, setGameSelect] = useState('');
    const [questionInput, setQuestionInput] = useState('');
// AIzaSyCUcxqaSUmo97v9TOpMH6J3WTj2VZHt9j4

const [buttonDisabled, setButtonDisabled] = useState(false)

const [aiResponse, setAiResponse] = useState()


const markdownToHTML = (text) => {
    const converter = new Showdown.Converter()
    return converter.makeHtml(text)
}

    const askIA = async () => {
 const model  = "gemini-2.5-flash"
    const geminiURL = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`

    const pergunta = `
        ## Especialidade
        Você é um especialista assistente de meta para o jogo ${gameSelect}

        ## Tarefa
        Você deve responder as perguntas do usuário com base no seu conhecimento do jogo, estratégias, builds e dicas

        ## Regras
        - Se você não sabe a resposta, responda com 'Não sei' e nao tente inventar uma resposta.
        - Se a pergunta nao esta relacionada ao jogo, responda com 'Essa pergunta não está relacionada ao jogo'
        - Considere a data atual ${new Date().toLocaleDateString()}
        - Faça pesquisas atualizadas sobre o patch atual, baseado na data atual, para dar uma resposta coerente.
        - Nunca responda itens que você não tenha certeza de que existe no patch atual.
        - No caso de itens, diga a ordem de cada

        ## Resposta
        - Economize na resposta, seja direto e responda no maximo 500 caracteres
        - Responda em markdown
        - Não precisa fazer nenhuma saudação ou despedida, apenas responda o que o usuário esta querendo.

        ## Exemplo de resposta
        pergunta do usuário: Melhor bbiuld rengar jungle
        resposta: A build mais atual é \n\n **Itens:**\n\n coloque os itens aqui. \n\n**Runas:**\n\nexemplo de runas\n\n

        ---
        Aqui está a pergunta do usuário: ${questionInput}

    `
    const contents = [{
        role:"user",
        parts:[{
            text: pergunta
        }]
    }]

    const tools =[{
        google_search:{}
    }]

        const response = await fetch(geminiURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
                contents, tools
        })
    })

        const data = await response.json()
        console.log('42 data', data)
        return data.candidates[0].content.parts[0].text

    }

    const sendForm = async (e) => {
        e.preventDefault()
        const askButton = document.getElementById('askButton')
        console.log('42 aqui', apiKey, gameSelect, questionInput)
        askButton.classList.add('loading')
        setButtonDisabled(true)

           try {
        //perguntar para a IA
        const text = await askIA()
        setAiResponse(markdownToHTML(text))
        // aiResponse.querySelector('.response-content').innerHTML =markdownToHTML(text)
        // aiResponse.classList.remove('hidden')
        // aiResponse.textContent = text

    } catch(error) {

        console.log(error)

    } finally {
        // askButton.disabled = false
        // askButton.textContent= 'Perguntar'
        // askButton.classList.remove('loading')

    }
        
    }

const { t } = useTranslation();
    return (
        <Container>
            <Link to={'/subProjects'} style={{textDecoration: 'none', color: 'white'}}>
                <ImgLogo src={logo} />
        
            </Link>

        <Body>

        <Corpo>
            <Secao>
                <div>

                    <Title>
                        Assistente de Meta
                    </Title>
                    <SubTitle>
                        Pergunte sobre estratégias, build e dicas para seus jogos!
                    </SubTitle>

                    <Form>
                        <Input id="apiKey" type="password" placeholder="Informe a API key do gemini" required
                            onChange={(e) => setApiKey(e.target.value)}
                        />

                            <Select id="gameSelect"
                            onChange={(e) => setGameSelect(e.target.value)}>
                                <option value="">Selecione um jogo</option>
                                <option value="valorant">Valorant</option>
                                <option value="league of legends">League of Legends</option>
                                <option value="csgo">CS:GO</option>
                            </Select>

                            <Input id="questionInput" type="text" placeholder="Ex: Melhor build para ADC..."
                                onChange={(e) => setQuestionInput(e.target.value)}
                                required
                            />
                            
                            <Button 
                            disabled={buttonDisabled}
                            id="askButton"
                                onClick={sendForm}
                            >Perguntar</Button>

                    </Form>
                    {console.log('42 aiResponse', aiResponse)}
                    {aiResponse && 
                        <AiResponse class="hidden">
                           <ResponseContent dangerouslySetInnerHTML={{ __html: aiResponse }} />
                        </AiResponse>
                    }
                </div>
            </Secao>
        </Corpo>
           


        </Body>
        </Container>
    )
}

export default NLWIniciante;
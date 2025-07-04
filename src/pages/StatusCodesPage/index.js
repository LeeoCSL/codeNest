import React, { useState, useEffect, useRef } from 'react';

import TitleScreens from '../../components/TitleScreens'
import SubTitleScreens from '../../components/SubTitleScreens'

import {
    Container,
    Body,
    Group,
    TitleGroup
} from './styled'

import { Card, Row, Col } from "antd";

import { useTranslation } from 'react-i18next';




const StatusCodesPage = (props) => {

    const { t } = useTranslation();

    const statusGroups = [
  {
    titleKey: 'status_code_1xx',
    codes: ['100', '101']
  },
  {
    titleKey: 'status_code_2xx',
    codes: ['200', '201', '204']
  },
  {
    titleKey: 'status_code_3xx',
    codes: ['301', '302', '304']
  },
  {
    titleKey: 'status_code_4xx',
    codes: ['400', '401', '403', '404', '429']
  },
  {
    titleKey: 'status_code_5xx',
    codes: ['500', '502', '503']
  }
];

const toRender = statusGroups.map(group => ({
  title: t(group.titleKey),
  content: group.codes.map(code => ({
    title: t(`status_code_title_${code}`),
    text: t(`status_code_text_${code}`)
  }))
}));



    return (
        <Container>

        <TitleScreens text={t('status_code_title')}/>

            <SubTitleScreens text= {t('status_code_subtitle')}/>
        <Body>

{toRender.map((item) =>{
            return(
                <Card title={item.title} style={{ width: '100%', marginTop: '20px', borderColor:'#7b68ee',}}>
                    <Row gutter={[16, 16]} wrap justify="center">
                        {item.content.map((each) => (
                            <Col xs={24} sm={12} md={8} lg={6} xl={6} key={each.title}>
                            <Card type="inner" title={each.title} style={{height: '200px'}}>
                                <p>{each.text}</p>
                            </Card>
                            </Col>
                        ))}
                    </Row>

                </Card>
            )
        })}

       

             

                


      

        </Body>
        </Container>
    )
}

export default StatusCodesPage;
import styled from 'styled-components'
import { Card } from 'antd';
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    align-items: center;
    padding-top: 100px;  
    
`
export const ImgLogo = styled.img`
width: 300px;
height: 200px;
`

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    margin-top: 30px;
`

export const TextExplanationConcept = styled.span`
    font-size: 15px;
`

export const TextExplanationCreate = styled.span`
    margin-top: 20px;
    font-size: 20px;

`

export const StyledCard = styled(Card)`
  background: ${({ theme }) => theme.primary || '#444'};
  color: #fff;
  border: 1px solid #303050;
  border-radius: 12px;
  text-align: center;
  transition: all 0.3s;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
 padding: 16px;
 margin-top: 20px;
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.5);
    background: #272740;
  }

  .ant-card-body {
    padding: 16px;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(245deg, #9672fc 0%, #43e7ad 50%, #e2d45c 100%);
  width: 200px; 
  height: 80px;
  margin-top: 20px;
`
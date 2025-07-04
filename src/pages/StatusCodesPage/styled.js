import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    align-items: center;
    padding-top: 120px;  
    
`

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    margin-top: 30px;
padding-bottom: 50px;
`

export const TextExplanationConcept = styled.span`
    font-size: 15px;
`

export const TextExplanationCreate = styled.span`
    margin-top: 20px;
    font-size: 20px;

`


export const Group = styled.div`
    position: relative;
    display: flex;
    flex-flow: ${(props) => (props.flexFlow ? props.flexFlow : 'column nowrap')};
    height: auto;
    width: 100%;
    justify-content: stretch;
    align-items: ${(props) => (props.align ? props.align : 'center')};
    border-radius: 5px;
    border: ${({ theme, ...props }) => `solid 1px ${theme.primary}`};
    padding: ${(props) => (props.padding ? props.padding : '10px')};
    padding-bottom: 20px;
    margin-Top: 20px;

   
`;

export const TitleGroup = styled.p`
    position: absolute;
    background-color: ${({ theme }) => theme.background};
    top: -20px;
    left: 10px;
    padding: 3px;
    font-size: 20px;
    color: ${({ theme }) => theme.primary};;
`;

// export const Group = styled.div`
//     margin-top: ${(props) => (props.marginTop ? props.marginTop : '15px')};
//     margin-bottom: 15px;

//     position: relative;
//     display: flex;    
//     flex-flow: row wrap;
//     height: auto;
//     width: 91.5%;
//     max-width: 1440px;
//     justify-content: stretch;
//     align-items: center;    
//     border-radius: 5px;
//     border: ${({ theme, ...props }) => `solid 1px ${theme.primary}`};
//     padding: 15px;

//     @media (min-width: 780px) {
//         width: 94.5%;
//     }
// `;

// export const TitleGroup = styled.p`
//     position: absolute;
//     ${'' /* background-color: white; */}
//     top: -26px;
//     left: 10px;
//     padding: 3px;
//     color: ${({ theme }) => theme.primary};
// `;
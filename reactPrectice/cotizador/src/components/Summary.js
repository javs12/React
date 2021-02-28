import React from 'react';
import styled from '@emotion/styled';


const SummaryContainer = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838F;
    color:#FFF;
    margin-top: 1rem;
`;

const Summary = ({ data }) => {
    const { marca, year, plan } = data;

    if (marca === '' || year === '' || plan === '') return null;
    return ( 
        <SummaryContainer>
            <h2>Resumen de la cotización</h2>
            <ul>
                <li>Marca: { marca }</li>
                <li>Plan: { plan } </li>
                <li>Año de Auto: { year } </li>
            </ul>
        </SummaryContainer>
     );
}
 
export default Summary;

import React, { useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Summary from './components/Summary';
import Result from './components/Result';

import styled from '@emotion/styled';

const Container = styled.div`
    max-width:600px;
    margin:0 auto;
`;
const FormContainer = styled.div`
  background-color: #FFF;
  padding: 3rem;
`;

function App() {
  const [summary, saveSummary] = useState({
      cotizacion:0,
      data:{
        marca:'',
        year:'',
        plan:'',
      }
  });

  const { data, cotizacion } = summary;

  return (
    <Container>
      <Header 
        title='Cotizador de Seguros'
      />
      <FormContainer>
        <Form 
          saveSummary={saveSummary}
        />
      <Summary 
          data={data}
      />
      <Result
          cotizacion={cotizacion}
      />
      </FormContainer>
    </Container>
  );
}

export default App;

import React, { useState } from 'react';
import styled from '@emotion/styled';

const Button = styled.button`
  background: -webkit-linear-gradient(top left, #007d35 40%, #0f574e 100%);
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
`;


const Container = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;

function App() {
  const [phrase,getPhrase] = useState({});

  const consultarAPI = async () => {
    const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    const phrase =  await api.json();
    getPhrase(phrase[0]);
  }

  return (
    <Container>
        <Button
          onClick={consultarAPI}
        > Obtener Frase </Button>
    </Container>
  );
}

export default App;

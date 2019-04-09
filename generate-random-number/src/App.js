import React from 'react';
import styled from 'styled-components';
import Header from './components/randomNumber/Header';
import GenerateNewNumber from './components/randomNumber/GeneratNewNumber';

const App = () => (
  <Main>
    <Header />
    <GenerateNewNumber />
  </Main>
)

const Main = styled.div`
  padding: 0;
`;

export default App;

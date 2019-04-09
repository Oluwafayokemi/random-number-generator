import React from 'react';
import styled from 'styled-components';
import Select from 'react-select';


const OPTIONS = [
  { label: "Ascending", value: 1 },
  { label: "Descending", value: 2 },
]
const DefaultSelect = () => (
  <Container>
    <Select options={OPTIONS} />
  </Container>
)

const Container = styled.div`
    width: 100%;
    cursor: pointer;
`;
export default DefaultSelect;

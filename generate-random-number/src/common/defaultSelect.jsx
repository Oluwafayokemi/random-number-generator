import React from 'react';
import Select from 'react-select';
import styled from 'styled-components';


const OPTIONS = [
  { label: "Ascending", value: 1 },
  { label: "Descending", value: 2 },
]
const DefaultSelect = (props) => {
  const {selectClassName} = props;
  return (
  <Wrapper>
    <Select {...props} options={OPTIONS} className={selectClassName} />
  </Wrapper>
)
}

const Wrapper = styled.div`
    
`;
export default DefaultSelect;

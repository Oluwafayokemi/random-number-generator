import React from 'react';
import Select from 'react-select';
import styled from 'styled-components';


const OPTIONS = [
  { label: "Ascending", value: 1 },
  { label: "Descending", value: 2 },
]
const DefaultSelect = (props) => (
  <Wrapper>
    <Select {...props} options={OPTIONS} className="selected" />
  </Wrapper>
)

const Wrapper = styled.div`
    .css-xp4uvy{
      cursor: pointer;
    }
    .selected{
      cursor: pointer;
    }
`;
export default DefaultSelect;

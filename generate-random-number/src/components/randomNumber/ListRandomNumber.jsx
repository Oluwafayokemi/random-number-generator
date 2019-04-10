import React from 'react';
import styled from 'styled-components';
import NumberInput from '../../common.js/Input';

const PREVALUE = '0';
const ListRandomNumber = ({ list }) => {
  return (
    <Wrapper>
      <Main>
        {list && list.map((list, index) => {
          return (
            <NumberInput
              className="wrapper"
              defaultValue={PREVALUE + list}
              key={index}
            />
          )
        })
        }
      </Main>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  flex-flow: column wrap;
  max-height: 100%;
  max-width: 100%;
  border: 2px solid blue;
  margin-top: 1em;
  padding: 1em;
  .wrapper {
    border-radius: 4px;
    height: 20px;
    border: 2px solid blue;
    margin: 2px;
    width: 80px;
    padding: 3px;
  }
  .wrapper:focus {
    outline: none;
  }
`;
const Main = styled.div`
  align-items: flex-start;
  align-content: space-between;
  padding-right: 1.5em;
  text-align: right;
`

export default ListRandomNumber;
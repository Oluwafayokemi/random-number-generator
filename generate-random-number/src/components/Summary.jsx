/**
 * @file summary of generated number 
 */

//  Modules
import React from 'react';
import styled from 'styled-components';

// Const
const SUMMARY = "Summary";
const TOTAL = "Total numbers generated";
const MAX = "Max number";
const MIN = "Min number";
/**
 * @function Summary
 * @description summary of total numbers generated, max number and min number
 * @param {Object} props - list: Array, maxphoneNumber: number, minPhoneNumber: number
 * @returns {ReactElement}
 */
const Summary = ({ list, maxPhoneNumber, minPhoneNumber }) => {
  return (
    <Container>
      <span className="sum">{SUMMARY}</span>
      <Table>
        <Total>
          <span>{TOTAL}</span>
          <span>{list.length}</span>
        </Total>
        <Max>
          <span>{MAX}</span>
          <span>{maxPhoneNumber}</span>
        </Max>
        <Min>
          <span>{MIN}</span>
          <span>{minPhoneNumber}</span>
        </Min>
      </Table>
    </Container>
  )
}

const Container = styled.div`
  margin-top: 3em;
  span.sum {
    font-weight: bold;
    font-size: 20px;
    color: #3F3F3F;
    letter-spacing: 0;
  }
`;
const Table = styled.div`
    border: 1px solid #DBD9D9;
    margin-top: 1.5em;
    display: flex;
    flex-flow: column wrap;
`;
const Total = styled.div`
  display: flex;
  justify-content: space-between;
  background: #F8F8F8;
  border-bottom: 1px solid #DBD9D9;
  padding: .8em;
  :hover {
      opacity: 0.7;
    }
`;
const Max = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1em;
    :hover {
      opacity: 0.7;
    }
`;
const Min = styled.div`
    display: flex;
    justify-content: space-between;
    background: #F8F8F8;
    border-top: 1px solid #DBD9D9;
    padding: .8em;
    :hover {
      opacity: 0.7;
    }
`;
export default Summary;
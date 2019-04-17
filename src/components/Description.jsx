/**
 * @file Description
 */

//  Modules
import React from 'react';
import styled from 'styled-components';

// Const
const DESCRIPTION = "To generate random numbers, enter the amount of numbers to generate and the order. Note: You can only generate a maximum of 1000 numbers at a time"

/**
 * @function Description
 * @description container to explain the purpose of the app
 * @returns {ReactElement}
 */
const Description = () => (
  <Div>
    <span>
      {DESCRIPTION}
    </span>
  </Div>
)

const Div = styled.div`
  background: #EAFCFF;
  border: 1px solid #ABEBFC;
  border-radius: 3px;
  padding: .8em;
  span {
    color: #209098;
  }
`;
export default Description;
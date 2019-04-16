/**
 * @file Input
 */

//  Module
import React from 'react';

/**
 * @function NumberInput
 * @description displays number input
 * @param {Object} props
 * @returns {ReactElement}
 */
const NumberInput = (props) => (
  <input
    {...props}
    type="number"
  />
)
export default NumberInput;
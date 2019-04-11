/**
 * @file display random number
 */

//  Modules
import React from 'react';
import styled from 'styled-components';

/**
 * @function RandomNumber
 * @description displays list of random number generated
 * @returns {ReactElement}
 */
const Header = () => (
  <Main>
    <Font> Disney Phone Number Generator</Font>
  </Main>
)

const Main = styled.div`
    /* height: 150px; */
    padding: 0;
`;
const Font = styled.p`
  text-align: center;
  padding: 2em;
  font-family: 'Monoton', cursive;
  font-weight: bold;
  text-transform: uppercase;
`;
export default Header;
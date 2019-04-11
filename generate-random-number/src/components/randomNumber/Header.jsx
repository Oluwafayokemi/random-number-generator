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
    padding: 0;
`;
const Font = styled.p`
  text-align: center;
  text-shadow: 2px 2px 4px #eee;
  padding: 2em;
  font-family: 'Monoton', cursive;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 16px;
`;
export default Header;
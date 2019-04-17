/**
 * @file header
 */

//  Modules
import React from 'react';
import styled from 'styled-components';

// Const
const HEADERTITLE = "Random Number Generator";
const LOGO = "RG";

/**
 * @function Header
 * @description constains logo and title of the app
 * @returns {ReactElement}
 */
const Header = () => (
  <Head>
    <span className="logo">{LOGO}</span>
    <span className="title">
      {HEADERTITLE}
    </span>
  </Head>
)

const Head = styled.div`
  display: flex;
  height: 80px;
  border-bottom: 1px solid #E2DFDF;
  align-items: center;
  span.title {
    color: #000;
    padding-left: 23px;
  }
  span.logo {
    padding: 1em;
    background-color: #424647;
    color: #fff;
    font-weight: bolder;
    font-size: 26px;
  }
`;
export default Header;
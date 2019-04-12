/**
 * @file Button clear and download
 */

//  Modules
import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/**
 * @function ActionButton
 * @description displays button to clear and download
 * @returns {ReactElement}
 */
const ActionButton = ({reload, onClickSaveFile}) => (
  <Wrapper>
    <Button type="submit" className="clear" onClick={reload} > Clear </Button>
    <Button type="submit" className="download" onClick={onClickSaveFile}>
      <FontAwesomeIcon icon="download" />
      Download
    </Button>
  </Wrapper>
);

const Wrapper = styled.div`
  margin-top: 1em;
  display: flex;
  justify-content: space-between;
  .download {
    display: flex;
    justify-content: space-between;
  }
`;
const Button = styled.button`
  width: 153px;
  font-size: 16px;
  padding: 1em;
  font-weight: 600;
  color: #3F3F3F;
  cursor: pointer;
  :focus{
    outline: none;
  } 
  :hover {
    opacity: 0.9;
  }
`;
export default ActionButton;
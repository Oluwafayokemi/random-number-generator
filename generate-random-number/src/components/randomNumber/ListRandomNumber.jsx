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
              readOnly
              className="wrapper"
              value={PREVALUE + list}
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
  max-height: 80vh;
  overflow: scroll;
  max-width: 100%;
  background-image:url(https://www.desktopbackground.org/p/2012/11/21/487004_moneymap-calculate-cloud_1920x1080_h.jpg);
  background-color: #cccccc; /* Used if the image is unavailable */
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */ 
  border-radius: 5px;
  padding: 2em;
  .wrapper {
    box-shadow: 0 4px 8px 0 #fff, 0 6px 20px 0 rgba(0,0, 0, 0.2);
    border-radius: 4px;
    height: 20px;
    border: none;
    margin: 3px;
    width: 80px;
    padding: 3px;
  }
  .wrapper:focus {
    outline: none;
  }
`;
const Main = styled.div`

`;

export default ListRandomNumber;
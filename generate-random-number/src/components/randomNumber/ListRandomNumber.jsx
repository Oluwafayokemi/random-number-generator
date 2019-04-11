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
  align-items: center;
  max-height: 100%;
  max-width: 100%;
  background-image:url(https://www.desktopbackground.org/p/2012/11/21/487004_moneymap-calculate-cloud_1920x1080_h.jpg);
  background-color: #cccccc; /* Used if the image is unavailable */
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */ 
  border-radius: 5px;
  padding: 3em;
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
  /* align-content: space-between; */
  align-items: center;
  text-align: right;
`;

export default ListRandomNumber;
/**
 * @file generate number and in order
 */

//  Modules
import React from 'react';
import styled from 'styled-components';
import NumberInput from '../common/Input';
import DefaultSelect from '../common/DefaultSelect';

// Const
const TOTALNUMBER = "Total numbers to generate";
const ORDER = "Order";
const SELECT = "Select to sort";
const GENERATE = "Generate";

/**
 * @function Generate
 * @description total numbers in order
 * @param {Object} props - handleSubmit: function, handleChange: function, value: number, handleSelectChange: function, selectedOption: string
 * @returns {ReactElement}
 * 
 */
const Generate = ({handleSubmit, handleChange, value, handleSelectChange, selectedOption}) => (
  <form onSubmit={handleSubmit}>
    <Container>
      <InputWrapper>
        <span>{TOTALNUMBER}</span>
        <NumberInput onChange={handleChange} value={value}/>
      </InputWrapper>
      <SelectWrapper>
        <span>{ORDER}</span>
        <DefaultSelect selectClassName="select" placeholder={SELECT} onChange={handleSelectChange} value={selectedOption} />
      </SelectWrapper>
    </Container>
    <Button type="submit">{GENERATE}</Button>
  </form>
)

const Container = styled.div`
  display: flex;
  color: #3F3F3F;
  font-size: 16px;
  padding-top: 3em;
`;

const InputWrapper = styled.div`
  width: 239px;
  margin-right:1em;
  span {
   padding-bottom: 1em;
  }
  input {
    width: 100%;
    padding: 1em;
    background: #FBFBFB;
    border: 1px solid #636161;
    border-radius: 3px;
    margin-top: 1em;

    :focus{
      outline: none;
    }
  }
`;

const SelectWrapper = styled.div`
  width: 239px;
  height: 46px;
  margin-left:1em;
  span {
    padding-bottom: 5px;
  }
  .select{
    width: 100%;
    margin-top: .6em;
    outline-color:  #636161;
    .css-vj8t7z {
      background: #FBFBFB;
      border: 1px solid #DBD9D9;
      border-radius: 3px;
      outline: none !important;

      :focus{
      outline: none !important;
    }
    }
    .css-15k3avv {
      cursor: pointer;
      :focus {

      outline: none !important;
      }

    }
    :focus{
      outline: none !important;
    }
  }
`;

const Button = styled.button`
  width: 100%;
  background: #33BFAD;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,0.17);
  border-radius: 3px;
  padding: 1em;
  color: #FFFFFF;
  font-size: 16px;
  letter-spacing: 0;
  font-weight: bold;
  margin-top: 20px;
  cursor:pointer;

  :focus{
    outline: none
  }
`;
export default Generate;
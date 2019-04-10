import React from 'react';
import styled from 'styled-components';
import NumberInput from '../../common.js/Input';
import ListRandomNumber from './ListRandomNumber';
import DefaultSelect from '../../common.js/defaultSelect';

const NUMBERPLACEHOLDER = "Choose a Number";
const MINNUMBER = 99999999;
const MAXNUMBER = 100000000;
const DEFAULTVALUE = 100
class GenerateNewNumber extends React.Component {
  state = {
    value: '',
    list: []
  }
  componentDidMount() {
    const listNumber = this.generateNumber(MINNUMBER, MAXNUMBER, DEFAULTVALUE)
    this.setState({ value: DEFAULTVALUE, list: listNumber })
  }

  componentDidUpdate(prevProps, prevState) {
    const nextState = this.state.list
    if (prevState.list !== nextState) {

    }
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { value } = this.state;
    this.generateNumber(MINNUMBER, MAXNUMBER, value)
  }

  generateNumber = (min, max, iterate) => {
    var newNumber = [];
    for (var i = 0; i < iterate; i++) {
      newNumber.push(Math.floor(Math.random() * max) + min);
    }
    this.setState({ list: newNumber })
    return newNumber;
  }


  render() {
    const { list, value } = this.state;
    return (
      <React.Fragment>
        <p>Generate Number:</p>
        <Form onSubmit={this.handleSubmit}>
          <FormWrapper>
            <NumberInput
              className="wrapper"
              name="number"
              placeholder={NUMBERPLACEHOLDER}
              onChange={this.handleChange}
              value={value}
            />
            <DefaultSelect />
            <Download>
            </Download>
          </FormWrapper>
          <Input type="submit" />
        </Form>
        <ListRandomNumber list={list} />
      </React.Fragment>
    )
  }
}
const FormWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  .wrapper {
    border-radius: 4px;
    width: auto;
    border: 2px solid blue;
    margin-right: 1em;

  }
  .wrapper:focus {
    outline: none;
  }
`;
const Form = styled.form`
  width: 100%;
`;
const Input = styled.input`
  width: 100%;
  cursor: pointer;
    margin-top: 1em;
    padding: 5px 1px;
   background-color: blue;
    color: white;
    font-weight: bold;
`;
const Download = styled.div`
  width: 50px
`;
export default GenerateNewNumber;